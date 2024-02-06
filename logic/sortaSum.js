// Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.
// Examples

// sortaSum(3, 4) → 7
// sortaSum(9, 4) → 20
// sortaSum(10, 11) → 21


function sortaSum(a,b){
    let output= a+b;
    if(output>=10 && output<=19){
return 20
    }
    else{
        return output
    }
}


console.log(sortaSum(10, 11))