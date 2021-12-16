Function.prototype.myBind = function (context, ...rest) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  let self = this
  return function (...arr) {
    return self.apply(context, rest.concat(arr))
  }
}