// Old Syntax Function 2 parameters
function sum(a, b) {
  return a + b
}
// Arrow Function
let sum2 = (a, b) => {
  return a + b
}
// When 1 line of code remove return and brackets
let sum3 = (a, b) =>  a + b


// Old Syntax Function 1 parameter
function isPositive(number) {
  return number >= 0
}
// Arrow Function
let isPositive2 = (number) => {
  return number >= 0
}
// When 1 line of code remove return and brackets
// and if only 1 parameter, remove parenthesis
let isPositive3 = number => number >= 0

// Old Syntax Function no parameters
function randomNumber() {
  return Math.random
}
// Arrow Function
let randomNumber2 = () => {
  return Math.random
}
// reduce to 1 line
let randomNumber3 = () => Math.random

// anonymous 
document.addEventListener('click', function () {
  console.log('Click')
})
// arrow
document.addEventListener('click', () => {
  console.log('Click')
})
// reduce to 1 line
document.addEventListener('click', () => console.log('Click'))

