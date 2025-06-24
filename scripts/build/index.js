const getConfig = require('./config')
const missingTranslations = require('./translations/missing')
const loadTranslations = require('./translations/load')

async function main() {
  await missingTranslations()
  await loadTranslations()
  await getConfig()
}

main().catch((err) => {
  console.error('❌ Error during build:', err)
  process.exit(1)
})
