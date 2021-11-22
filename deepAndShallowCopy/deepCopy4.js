/**
 * 解决循环引用问题
 */

function forEach (array, callback) {
  let index = 0
  const length = array.length
  while (index < length) {
    callback(array[index], index)
    index++
  }
}

function deepCopy (target, map = new Map()) {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {}
    const keys = Array.isArray(target) ? undefined : Object.keys(target)
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)
    forEach(keys || target, (value, key) => {
      if (keys) { key = value }
      cloneTarget[key] = deepCopy(target[key], map)
    })
    return map.get(target)
  } else {
    return target
  }
}