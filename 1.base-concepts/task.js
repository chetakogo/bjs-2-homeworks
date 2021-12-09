'use strict'
function solveEquation(a, b, c) {
  let arr;
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0) {
    arr = [];
    return arr;
  } else if (D === 0) {
    arr = [-b / (2 * a)]
    return arr;
  } else {
    arr = [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)]
    console.log(arr.length)
    return arr;
  }
  // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
let totalAmount;


  return totalAmount;
}
