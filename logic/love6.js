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