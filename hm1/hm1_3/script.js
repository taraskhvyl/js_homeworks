function calculator(firstNumber) {
  var result = firstNumber;
  return {
    sum : function () {
      for (var i = 0; i < arguments.length; i++) {
        result = result + arguments[i];
      }
      return result;
    },
    
    dif : function () {
      for (var i = 0; i < arguments.length; i++) {
        result = result - arguments[i];
      }
      return result;
    },
    
    div : function () {
      for (var i = 0; i < arguments.length; i++) {
        if(arguments[i] === 0) continue;
        result = result / arguments[i];
      }
      return result;
    },
    
    mul : function () {
      for (var i = 0; i < arguments.length; i++) {
        result = result * arguments[i];
      }
      return result;
    }
  }
  
  
  return result;
}

var myCalculator = calculator(100);
console.log(myCalculator.sum(1, 2, 3)); //вернет 106

var myCalculator = calculator(100);
console.log(myCalculator.dif(10, 20)); //вернет 70

var myCalculator = calculator(100);
console.log(myCalculator.div(2, 2)); //вернет 25

var myCalculator = calculator(100);
console.log(myCalculator.mul(2, 2)); //вернет 400