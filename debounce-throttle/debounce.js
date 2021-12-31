/**
 * 对于短时间内连续触发的事件，防抖的含义就是让某个时间期限内，事件处理函数只执行一次
 */
function debounce (fn, delay) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, delay)
  }
}