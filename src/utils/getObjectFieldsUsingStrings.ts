/** A simple util to grab a field value from object using a nested
 * string like field.0.nested.some_key */
export default function getObjectFieldsUsingStrings(obj, str) {
  str = str.replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
  str = str.replace(/^\./, '') // strip a leading dot
  const a = str.split('.')

  for (let i = 0, n = a.length; i < n; ++i) {
    let k = a[i]
    if (k in obj) {
      obj = obj[k]
    } else {
      return
    }
  }
  return obj
}
