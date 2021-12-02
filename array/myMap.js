Array.prototype.myMap = function (fn, context) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn.call(context, this[i], i, this))
  }
  return newArr
}