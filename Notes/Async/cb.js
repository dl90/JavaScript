const myCallback = (err, result) => err ? console.log(err.message) : console.log(result)

const multiplier = (num1, num2, myCallback) => {
  setTimeout(() => myCallback(null, parseInt(num1) * parseInt(num2)), 4000)

  if (num1 % 1) num1 = Math.round(num1)
  if (num2 % 1) num2 = Math.round(num2)
  !Number.isInteger(num1) || !Number.isInteger(num2) ? myCallback(new Error('Not an int'), null) : myCallback(null, num1 * num2)
}

multiplier(11, 22, myCallback)
setTimeout(() => {
  multiplier(1.11, 2.22, myCallback)
}, 1000)
