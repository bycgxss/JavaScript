/**
 * 浅拷贝：只拷贝原对象第一层的属性。即拷贝A对象里面的数据，但是不拷贝A对象里面的子对象。
 * 如果属性是基础数据类型，拷贝的就是基础数据类型的值
 * 如果属性是引用数据类型，拷贝的是引用类型的内存地址
 */

function shallowCopy (target) {
  if (typeof obj === 'object' && obj !== 'null') {
    return Array.isArray(target) ? [...target] : { ...target }
  } else {
    return target
  }
}