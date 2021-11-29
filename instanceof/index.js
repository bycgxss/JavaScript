const myInstanceof = (leftValue, rightValue) => {
  let rightPrototype = rightValue.prototype
  let leftProto = leftValue.__proto__
  while (true) {
    if (!leftProto) {
      return false
    }
    if (leftProto === rightPrototype) {
      return true
    }
    leftProto = leftProto.__proto__
  }
}

console.log(myInstanceof(1, Number))
console.log(myInstanceof([], Array))
console.log(myInstanceof({}, Array))
