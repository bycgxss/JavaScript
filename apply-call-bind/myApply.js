Function.prototype.myApply = function (context, arr) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  context = context || window
  context.fn = this
  if (!arr) {
    return context.fn()
  }
  const result = context.fn(...arr)
  delete context.fn
  return result
}
