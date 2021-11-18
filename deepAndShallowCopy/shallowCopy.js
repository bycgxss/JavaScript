/**
 * 浅拷贝：只拷贝原对象第一层的属性。即拷贝A对象里面的数据，但是不拷贝A对象里面的子对象。
 * 如果属性是基础数据类型，拷贝的就是基础数据类型的值
 * 如果属性是引用数据类型，拷贝的是引用类型的内存地址
 */

function shallowCopy (obj) {
  if (typeof obj === 'object' && obj !== 'null') {
    let copy = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = obj[key]
      }
    }
    return copy
  } else {
    return obj
  }
}

const arr = [1, 2, 3, [4, 5]]
const arr1 = shallowCopy(arr)
arr[0] = 0
arr[3][0] = 5
console.log(arr, arr1)


const obj = { name: 'aaa', age: 24, hobby: ['Game', 'PingPong'] }
const obj2 = shallowCopy(obj)
obj.name = 'bbb'
obj.hobby[0] = 'Basketball'
console.log(obj, obj2)
