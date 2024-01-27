function noTeenSum(a,b,c){
    return fix(a) + fix(b)+fix(c)
}
function fix(n){
    if(n>=13&& n<=14  ){
        return 0
    }
  if(n>=17 && n<=19){
  return 0}
    return n
}
console.log(fix(14));