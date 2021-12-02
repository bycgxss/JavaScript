Array.prototype.myEvery = function (fn, context) {
  for (let i = 0; i < this.length; i++) {
    if (!fn.call(context, this[i], i, this)) {
      return false
    }
  }
  return true
}