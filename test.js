function fizzBuzz(start, end){
    let strArr = [];
    for(let i = start; i <= end; i++){
      switch(true){
        case i % 3 === 0 && i % 5 === 0:
          strArr.push('FizzBuzz');
          break;
        case i % 3 === 0:
          strArr.push('Fizz');
          break;
        case i % 5 === 0:
          strArr.push('Buzz');
          break;
        default:
          strArr.push(i.toString());
      }
    }
    console.log(strArr);
  }
  
  fizzBuzz(1, 100);
  
  