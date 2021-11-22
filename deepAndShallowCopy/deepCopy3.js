/**
 * 性能优化 while 循环替换 for in循环，并抽象出forEach函数
 */

function forEach (array, callback) {
  let index = 0
  const length = array.length
  while (index < length) {
    callback(array[index], index)
    index++
  }
}

function deepCopy (target) {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {}
    const keys = Array.isArray(target) ? undefined : Object.keys(target)
    forEach(keys || target, (value, key) => {
      if (keys) { key = value }
      cloneTarget[key] = deepCopy(target[key])
    })
    return cloneTarget
  } else {
    return target
  }
}