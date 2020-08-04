function sum(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mul(a, b) {
    return a * b;
  }

  function div(a, b) {
    if(b==0){
        const divideByZeroError = () => {
            throw new Error('Division by zero.');
        };
        return divideByZeroError;
    }  
    return a / b;
  }

  module.exports = {
      sum:sum,
      sub:sub,
      mul:mul,
      div:div
  };