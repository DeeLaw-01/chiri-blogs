/** A simple util to pass in any object and an array with string values
 * to omit those fields from the inital object */
export default function getFilteredObject<
  TObj,
  TField extends Array<keyof TObj>
>(raw: TObj, fields: TField) {
  return Object.keys(raw)
    .filter((key) => !fields.includes(key))
    .reduce((obj, key) => {
      obj[key] = raw[key]
      return obj
    }, {}) as Omit<TObj, TField[number]>
}
