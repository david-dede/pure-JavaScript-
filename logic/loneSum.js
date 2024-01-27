function loneSum(a, b, c){
  let = output=a+b+c
  if(a==b&&b==c&&a==c){
    return 0
  }

  if(a==b){
    return c
  }
  if(b==c){
    return a
  }
  if(a==c){
    return b
  }
  else{
    return output
  }
}
console.log(loneSum(3, 3, 3) );