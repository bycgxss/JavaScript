Array.prototype.myReduce = function (fn, initialData) {
  let base = typeof initialData === 'undefined' ? this[0] : initialData
  let startPoint = typeof initialData === 'undefined' ? 1 : 0
  for (; startPoint < this.length; startPoint++) {
    base = fn(base, this[startPoint], startPoint, this)
  }
  return base
}