Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  context = context || window
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}