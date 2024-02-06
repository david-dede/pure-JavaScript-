// The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.

// Examples

// love6(6, 4) → true
// love6(4, 5) → false
// love6(1, 5) → true

function love6(a, b){
  let sumOutput=a+b || b+a
  let diffOutput=a-b ||b-a
  let oppDiffOutput =b-a
  if(a===6||b===6 ||sumOutput===6 || diffOutput===6|| oppDiffOutput===6)
  return true
else{
    return false
}
}
console.log(love6(1, 5) );