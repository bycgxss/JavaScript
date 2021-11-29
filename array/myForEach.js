Array.prototype.myForEach = function (fn, context) {
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue
    fn.call(context, this[i], i, this)
  }
}