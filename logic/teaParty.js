function teaParty(tea, candy){
    let doutea=tea +tea
    let doucandy=candy +candy
  if(tea<5 || candy<5){
    return 0
  }
  if(tea>=5 && candy>=5){
    if(tea>=doucandy || candy >=doutea){
    return 2
  }
    return 1
  }
  
}