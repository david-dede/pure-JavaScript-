function shareDigit(a, b){
  if(Math.floor(a/10)==Math.floor(b/10) ){
    return true
  }
  if(Math.floor(a/10)==b%10 ){
    return true}
  
    if(a%10==Math.floor(b/10)){
    return true}
  
    if(a%10==b%10){
    return true}
  
  else{
    return false
  }
}
console.log(30%10==67%10);