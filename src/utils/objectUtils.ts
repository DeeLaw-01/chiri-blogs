// Util to check two object are equal or not
// In array , object order of keys doesn't matter here
// const objA = { name: 'John', age: 30, hobbies: ['Reading', 'Gaming'] };
// const objB = { age: 30, name: 'John', hobbies: ['Gaming', 'Reading'] };
// objectsIsEqual(objA , objB) // true

const objectsIsEqual = (obj1: any, obj2: any): boolean => {
  if (typeof obj1 !== typeof obj2) {
    return false
  }
  if (typeof obj1 !== 'object' || obj1 === null || obj2 === null) {
    return obj1 === obj2
  }
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false
    }

    const sortedObj1 = obj1.slice().sort()
    const sortedObj2 = obj2.slice().sort()

    for (let i = 0; i < sortedObj1.length; i++) {
      if (!objectsIsEqual(sortedObj1[i], sortedObj2[i])) {
        return false
      }
    }

    return true
  }
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    if (!objectsIsEqual(obj1[key], obj2[key])) {
      return false
    }
  }

  return true
}

// a method to convert the object to string
const objectToString = (obj: object): string => {
  if (typeof obj === 'object') {
    try {
      return JSON.stringify(obj, null, 2)
    } catch (e) {
      return 'Unable to stringify object'
    }
  }
  return String(obj)
}

const shuffleArray = <T>(array: T[]): T[] => {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export { objectsIsEqual, objectToString, shuffleArray }
