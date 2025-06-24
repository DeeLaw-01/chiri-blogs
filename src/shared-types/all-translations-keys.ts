import AllTranslationKeysJSON from 'src/tmp/translation-keys.json'

export type AllTranslationKeys =
  | keyof typeof AllTranslationKeysJSON
  | (string & {})
