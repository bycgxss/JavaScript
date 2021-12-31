/**
 * 短时间内大量触发同一事件，函数在执行一次之后，该函数在指定时间期限内不在执行
 */
function throttle (fn, delay) {
  let timer = null
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      fn()
      timer = null
    }, delay)
  }
}