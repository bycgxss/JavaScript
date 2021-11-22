/**
 * 使用循环递归方法，依次进行拷贝
 * 对于属性值为 Date Error Regexp Map Set 这些类型的，属性值会变成空对象
 * 无法解决循环引用的问题
 */

function deepCopy (target) {
  if (typeof target === 'object' && target !== null) {
    const copyTarget = Array.isArray(target) ? [] : {}
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        copyTarget[key] = deepCopy(target[key])
      }
    }
    return copyTarget
  } else {
    return target
  }
}

const obj = {
  str: '1',
  num: 1,
  bool: true,
  un: undefined,
  null: null,
  symbol: Symbol('xxx'),
  big: 10n,
  children: { a: 'a' },
  arr: [1, 2, 3],
  fn: function () { },
  date: new Date(),
  err: new Error(),
  reg: /123/,
  map: new Map(),
  set: new Set()
}

console.log(deepCopy(obj))
