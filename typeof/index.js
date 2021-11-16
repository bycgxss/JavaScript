const myTypeof = (value) => {
  const s = Object.prototype.toString.call(value)
  return s.match(/\[object (.*?)\]/)[1].toLowerCase()
}

console.log(myTypeof(''))
console.log(myTypeof(1))
console.log(myTypeof(true))
console.log(myTypeof(null))
console.log(myTypeof(undefined))
console.log(myTypeof([]))
console.log(myTypeof({}))
console.log(myTypeof(function () { }))
console.log(myTypeof(new Date()))
console.log(myTypeof(new Error()))
console.log(myTypeof(Math))
console.log(myTypeof(/123/))

