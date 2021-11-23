const deepTag = ['map', 'set', 'array', 'object']

// 判断是否为对象
function isObject (target) {
  const type = typeof target
  return type !== null && (type === 'object' || type === 'function')
}
// 获取 target 数据类型
function getTargetType (target) {
  const s = Object.prototype.toString.call(target)
  return s.match(/\[object (.*?)\]/)[1].toLowerCase()
}
// copy 不可遍历数据类型的值
function cloneOtherType (target, type) {
  switch (type) {
    case 'number':
    case 'string':
    case 'boolean':
    case 'date':
      return new target.constructor(target)
    case 'error':
      return new target.constructor(target.message)
    case 'symbol':
      return Object(Symbol.prototype.valueOf.call(target))
    case 'regexp':
      return cloneReg(target)
    case 'function':
      return cloneFunction(target)
    default:
      return null
  }
}
function cloneReg (target) {
  const reFlags = /\w*$/
  const result = new target.constructor(target.source, reFlags.exec(target))
  result.lastIndex = target.lastIndex
  return result
}
function cloneFunction (target) {
  return function (...args) {
    return target.call(this, ...args)
  }
}
// 抽离工具函数，优化性能
function forEach (array, callback) {
  let index = 0
  const length = array.length
  while (index < length) {
    callback(array[index], index)
    index++
  }
}

export default function deepCopy (target, map = new WeakMap()) {
  // copy 原始类型的值
  if (!isObject(target)) return target

  // 初始化
  const type = getTargetType(target)
  let cloneTarget
  if (deepTag.includes(type)) {
    cloneTarget = new target.constructor()
  } else {
    return cloneOtherType(target, type)
  }

  // 防止循环引用
  if (map.get(target)) return map.get(target)
  map.set(target, cloneTarget)
  // copy set
  if (type === 'set') {
    target.forEach(value => cloneTarget.add(deepCopy(value, map)))
    return cloneTarget
  }
  // copy map
  if (type === 'map') {
    target.forEach((value, key) => cloneTarget.set(key, deepCopy(value, map)))
    return cloneTarget
  }
  // copy object and array
  const keys = type === 'array' ? undefined : Object.keys(target)
  forEach(keys || target, (value, key) => {
    if (keys) { key = value }
    cloneTarget[key] = deepCopy(target[key], map)
  })

  return cloneTarget
}