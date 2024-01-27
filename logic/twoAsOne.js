function twoAsOne(a, b, c){
 let output =a+b 
 if(a+b===c){
    return true
 }
  if(a+c===b){
    return true
 }
  if(b+c===a){
    return true
 }
 else{
    return false
 }

}
console.log(twoAsOne(3, 1, 2));