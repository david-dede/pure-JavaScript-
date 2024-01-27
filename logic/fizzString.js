function fizzString(str){
  let first = str.charAt(0);
  let last =str.charAt(str.lenght-1);
  
  
  if(last==="b" && first==="f"){
    return 'FizzBuzz'
  }

  if(first==="f"){
    return 'Fizz'
  }
  if(last==="b"){
    return 'Buzz'
  }
  else{
    return str
  }

 
}

console.log(fizzString('fib') );

