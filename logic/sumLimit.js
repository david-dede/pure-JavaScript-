function sumLimit(a, b){
  let aa=String(a).length
  let sumlength=String(a+b).length
  if(sumlength==aa){
return a+b
  }
  if(sumlength>aa){
return a
  }
}
