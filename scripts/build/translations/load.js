require('dotenv').config({
  path: '.env.local',
  override: true,
})

const environments = require('../../../src/data/environments')
const locales = require('../../../src/data/locales')
const set = require('lodash').set
const fs = require('fs')
const path = require('path')
const { showLoader, stopLoader } = require('../../utils/loader')

const BASE_URL = 'https://dq9v5xcysq4ya.cloudfront.net/prod'

function transformObject(obj) {
  let newObj = { ...obj } // Create a copy of the original object
  for (let key in newObj) {
    if (key.endsWith('_0') || key.endsWith('_one') || key.endsWith('_other')) {
      let newKey = key.substring(0, key.lastIndexOf('_')) // Remove the suffix
      if (!newObj[newKey]) {
        // If the new key doesn't exist yet
        newObj[newKey] = '{count, plural, '
      }
      let value = newObj[key].replace(/{count}/g, '#') // Replace "{count}" with "#"
      if (key.endsWith('_0')) {
        newObj[newKey] += '=0 {' + value + '} '
      } else if (key.endsWith('_one')) {
        newObj[newKey] += '=1 {' + value + '} '
      } else if (key.endsWith('_other')) {
        newObj[newKey] += 'other {' + value + '}'
      }
      delete newObj[key] // Delete the original key
    }
  }
  // Close the curly braces for the new keys
  for (let key in newObj) {
    if (newObj[key].startsWith('{count, plural, ')) {
      newObj[key] += '}'
    }
  }
  return newObj
}

function replaceTags(obj, tag) {
  for (let key in obj) {
    if (obj[key].includes('<0>') && obj[key].includes('</0>')) {
      obj[key] = obj[key].replace('<0>', `<${tag}>`)
      obj[key] = obj[key].replace('</0>', `</${tag}>`)
    }
  }
  return obj
}

const fetchData = async (locale) => {
  let messages = {}

  const res = await fetch(`${BASE_URL}/translations?locale=${locale}`)
  const pages = await res.json()

  // if on development, add the file to generate translation types
  if (environments.isDevelopment && locale === 'en') {
    let allTranslations = {}
    const allPagesKeys = Object.keys(pages)

    allPagesKeys.forEach((page) => {
      const pageKeys = Object.keys(pages[page])
      pageKeys.forEach((key) => {
        allTranslations[`${page}.${key}`] = ''
      })
    })

    const tmpPath = path.join(process.cwd(), 'src/tmp')

    if (!fs.existsSync(tmpPath)) {
      fs.mkdirSync(tmpPath)
    }

    fs.writeFile(
      `${tmpPath}/translation-keys.json`,
      JSON.stringify(allTranslations),
      (err) => {
        if (err) {
          console.error(err)
        }
        console.log(' Translation types added.')
      }
    )
  }

  for (const page in pages) {
    const translation = pages[page]

    // replace all double curly braces with single curly braces in the value
    const withSingleCurlyBraces = Object.entries(translation).reduce(
      (acc, [key, value]) => {
        acc[key] = value.replace(/{{/g, '{').replace(/}}/g, '}')
        return acc
      },
      {}
    )

    // transform the object to have plural keys
    const objectWithPlural = transformObject(withSingleCurlyBraces)

    // replace all <0> tags with <tag> tags, for payment
    const replacedTagsObj = replaceTags(objectWithPlural, 'tos')

    // all keys suffixed with .textNode
    const keysSuffixedWithTextNode = Object.entries(replacedTagsObj).reduce(
      (acc, [key, value]) => {
        acc[`${key}.textNode`] = value
        return acc
      },
      {}
    )

    // unflatten the object
    const nonFlatTranslation = Object.entries(keysSuffixedWithTextNode).reduce(
      (acc, [key, value]) => {
        set(acc, key, value)
        return acc
      },
      {}
    )

    messages = {
      ...messages,
      [page]: nonFlatTranslation,
    }
  }

  return messages
}

const runScript = async () => {
  const localesArr = locales.map((locale) => locale.value)

  if (environments.isDevelopment) showLoader('Loading translations')

  const processLocale = async (locale) => {
    const messages = await fetchData(locale)
    let jsonData = JSON.stringify(messages)

    const dir = path.join(process.cwd(), `public/translations/${locale}`)

    // check if directory exists, if not then create it
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(path.join(dir, 'messages.json'), jsonData)
  }

  await Promise.all(localesArr.map((locale) => processLocale(locale)))

  if (environments.isDevelopment) stopLoader()
}

module.exports = runScript

if (require.main === module) {
  runScript()
}
