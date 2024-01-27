function alarmClock(day, vacation){
     if(day==0 && !vacation || day==6 && !vacation){
    return "10:00"
  }
  if(day==0 && vacation || day==6 && vacation){
    return "off"
  }
  if(day>=1 && day<=5 && !vacation){
    return "7:00"
  }
  if(day>=1 && day<=5 && vacation){
    return "10:00"
  }
 
  
}
console.log(alarmClock(0, false) );