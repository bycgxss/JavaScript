Array.prototype.myFilter = function (fn, context) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    if (fn.call(context, this[i], i, this)) {
      newArr.push(this[i])
    }
  }
  return newArr
}