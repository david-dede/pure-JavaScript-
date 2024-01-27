function blackjack(a, b){
  if(a>21 && b>21){
    return 0
  }
  if(Math.abs(21-a)>Math.abs(21-b)){
    return a
  }
}