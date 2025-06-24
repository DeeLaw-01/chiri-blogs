const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')

const PARTNER_NAME = 'tryp'

const BASE_URL = `https://v1zxo6g2sf.execute-api.eu-central-1.amazonaws.com/prod/b2b?partner_name=${PARTNER_NAME}`

const BASE_DIR = path.resolve(__dirname, '../../../src/config')

function formatKey(key) {
  return key.toUpperCase()
}

function formatValue(val) {
  if (typeof val !== 'string') return val
  return `'${String(val).replace(/'/g, "\\'")}'`
}

function writeFile(folderPath, values) {
  const lines = Object.entries(values)
    .map(([k, v]) => `export const ${formatKey(k)} = ${formatValue(v)}`)
    .join('\n')

  fs.mkdirSync(folderPath, { recursive: true })
  fs.writeFileSync(path.join(folderPath, 'index.ts'), lines + '\n')
}

function processConfig(obj, currentPath) {
  if (obj._values) {
    writeFile(currentPath, obj._values)
  }

  for (const key of Object.keys(obj)) {
    if (key !== '_values') {
      const subfolder = path.join(currentPath, key)
      processConfig(obj[key], subfolder)
    }
  }
}

async function getConfig() {
  console.log('🔧 Loading config from B2B...')
  const res = await fetch(BASE_URL)
  const json = await res.json()
  console.log('Config fetched:')

  processConfig(json.config, BASE_DIR)
}

module.exports = getConfig

if (require.main === module) {
  getConfig()
}
