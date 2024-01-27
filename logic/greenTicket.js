function greenTicket(a, b, c){
    if(a==b&&a==c&&c==b){
    return 20
 }
 if(a==b||a==c||c==b){
    return 10
 } 
 
 if(a!==b&&a!==c&&c!==b){
    return 0
 }
}