const { readdirSync, readFileSync, lstatSync } = require('fs')
const path = require('path')

// Keys that has been checked
let allTranslationsKeys = []
// Keys that was found in a fine
let existingKeys = []

// All directories to check (including their subdirectories)
const PAGES_FILES = path.join(__dirname, '..', 'app')
const SRC_FILES = path.join(__dirname, '..', 'src')
const UI_FILES = path.join(__dirname, '..', 'ui')
const DATA_JSON_PATH = path.join(__dirname, '..', 'src', 'tmp', 'data.json')
const ALL_FOLDERS = [PAGES_FILES, SRC_FILES, UI_FILES].flat(Infinity)

// Translation directory to compare against (For a single language only!!)

/* 
* Loop through all folders with content (UI, SRC and PAGES)
* Foreach loop through the translation files (e.x common, checkout-page etc.)
* Define the text key (e.g checkout-page:banner.header or checkout-page.banner.header)
/* Add to looped-keys array, and call the recursive getDir method with it
*/
const loopContentFolders = () => {
  allTranslationsKeys = getAllTranslationKeys()
  ALL_FOLDERS.forEach((folder) => {
    allTranslationsKeys.forEach((translationKey) => {
      getDir(folder, translationKey)
    })
  })
  console.dir(
    allTranslationsKeys.filter(
      (element, i, a) =>
        !existingKeys.includes(element) && a.indexOf(element) === i
    ),
    { maxArrayLength: null }
  )
}

/*
 * Loop through all files within the source-directory.
 * Recursively check if its the value is a directory or not.
 * Repeat if it's a directory to get all sub-folders.
 * Output into existingKeys array if extension is .ts or .tsx AND the file contains textKey
 */
const getDir = (source, textKey) => {
  if (!textKey) return
  const results = readdirSync(source)
  results.forEach(function (result) {
    if (lstatSync(path.join(source, result)).isFile()) {
      const fileContent = readFileSync(path.join(source, result), 'utf8')
      const keyPattern = new RegExp(textKey.replace(/[:.]/g, '[:.]'), 'g')
      if (
        keyPattern.test(fileContent) &&
        (path.extname(result).toLowerCase() === '.tsx' ||
          path.extname(result).toLowerCase() === '.ts')
      ) {
        if (existingKeys.indexOf(textKey) === -1) existingKeys.push(textKey)
      }
    } else if (lstatSync(path.join(source, result)).isDirectory()) {
      // Recursive call with subdirectory
      getDir(path.join(source, result), textKey)
    }
  })
}
const getDataFromJsonFile = (filePath) => {
  try {
    const data = JSON.parse(readFileSync(filePath, 'utf8'))
    return data
  } catch (error) {
    // Log the error
    console.error(`Error reading data from ${filePath}: ${error}`)
    // Throw the error to indicate a failure
    throw error
  }
}

/*
 * Gets all the english translation files from the directory
 * Unpacks each one as an object with the parsed json and the file name
 * Returns an array of the translation file objects
 */

// To get all TranslationKeys from data.json file

const getAllTranslationKeys = () => {
  const data = getDataFromJsonFile(DATA_JSON_PATH)
  if (data) {
    const translationKeys = Object.keys(data)
    return translationKeys
  } else {
    return []
  }
}

// Execute program
module.exports = loopContentFolders

if (require.main === module) {
  loopContentFolders()
}
