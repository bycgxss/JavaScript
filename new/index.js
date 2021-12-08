function myNew (fn, ...rest) {
  const obj = Object.create(fn.prototype)
  const res = fn.apply(obj, rest)
  return res instanceof Object ? res : obj
}

function Person (name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
  this.sayName = function () {
    alert(this.name)
  }
}

const p1 = myNew(Person, "xxx", 18, 0)
console.log('p1:', p1)