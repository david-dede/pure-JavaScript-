function roundSum(a, b, c){
  return check(a)+check(b)+check(c)
}
function check(n){

    if(n%10>=5){
        return n+(10-n%10)
    }
    else{
        return n-n%10
    }
}