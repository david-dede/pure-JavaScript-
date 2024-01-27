function closeFar(a, b, c){
  if(Math.abs(b-a)<=1 || Math.abs(a-c)<=1){
    return true
  }
    if(Math.abs(b-a)>=2 || Math.abs(a-c)>=2 || Math.abs(b-c)>=2){
    return false
  }
  else{
    return false
  }
}