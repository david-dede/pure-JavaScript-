// Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.

function sortaSum(a,b){
    let output= a+b;
    if(output>=10 && output<=19){
return 20
    }
    else{
        return output
    }
}