const fetch = require('node-fetch')
const environments = require('../../../src/data/environments')

const BASE_URL = 'https://dq9v5xcysq4ya.cloudfront.net/prod'

const checkMissingTranslations = async () => {
  if (!environments.isProduction) {
    console.log('Not on production, skipping this step...')
    return
  }

  const res = await fetch(`${BASE_URL}/missing`)
  const keys = await res.json()

  if (keys.length > 0) {
    console.log('Missing translations:')
    console.log(keys)
    process.exit(1)
  } else {
    console.log('No missing translations ✅')
  }
}

module.exports = checkMissingTranslations

if (require.main === module) {
  checkMissingTranslations()
}
