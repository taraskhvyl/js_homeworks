class SqlCalc {

  constructor(numb) {
    this.numb = numb;
  }

  // сумма
  sum() {
    let result = this.numb;
    for (var i = 0; i < arguments.length; i++) {
      result = result + arguments[i];
    }
    return result * result;
  }
    
  dif() {
    let result = this.numb;
    for (var i = 0; i < arguments.length; i++) {
      result = result - arguments[i];
    }
    return result * result;
  }
    
  div() {
    let result = this.numb;
    for (var i = 0; i < arguments.length; i++) {
      if(arguments[i] === 0) continue;
      result = result / arguments[i];
    }
    return result * result;
  }
    
  mul() {
    let result = this.numb;
    for (var i = 0; i < arguments.length; i++) {
      result = result * arguments[i];
    }
    return result * result;
  }
}

let myCalculator = new SqlCalc(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(myCalculator.dif(10, 20)); //вернет 4 900
console.log(myCalculator.div(2, 2)); //вернет 625
console.log(myCalculator.mul(2, 2)); //вернет 160 000