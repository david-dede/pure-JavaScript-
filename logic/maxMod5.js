function maxMod5(a, b){
    if(a==b){
        return 0
    }
    if(a%5==b%5&&a>b){
        return b
    }
     if(a%5==b%5&&b>a){
        return a
    }
  if(a>b){
    return a
  }
  if(b>a){
    return b
  }
}