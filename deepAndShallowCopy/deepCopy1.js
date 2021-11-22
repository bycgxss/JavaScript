/**
 * JSON.parse(JSON.stringify()) 能满足基本的深拷贝
 * bigInt 类型的值无法转换
 * 对于属性值为 undefined symbol function 类型的，则会丢失对应的属性
 * 对于属性值为 Error Regexp Map Set 这些类型的，属性值会变成空对象
 * 对于属性值为 Date 类型的，属性值会被转换成字符串
 */

const obj = {
  str: '1',
  num: 1,
  bool: true,
  un: undefined,
  null: null,
  symbol: Symbol('xxx'),
  // big: 10n,
  children: { a: 'a' },
  arr: [1, 2, 3],
  fn: function () { },
  date: new Date(),
  err: new Error(),
  reg: /123/,
  map: new Map(),
  set: new Set()
}

console.log(JSON.parse(JSON.stringify(obj)))
