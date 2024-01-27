function makeBricks(small, big, goal){
  if(goal>big*5+small){
    return false}
  if(goal%5>small){
  return false}
     else {return true}
}