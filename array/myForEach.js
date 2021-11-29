Array.prototype.myForEach = function (fn, context) {
  for (let i = 0; i < this.length; i++) {
    fn.call(context, this[i], i, this)
  }
}

let arr = [1, 2, 3]
arr.myForEach(item => {
  console.log(item)
})