var allNumbers = [1, 2, 4, 5, 6, 7, 8],
	someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
	noNumbers = ['это', 'массив', 'без', 'чисел'];


function isSomeTrue(source, filterFn) {
    var allTrue = true; // устанавливаем метку
  
  if(source === undefined || source.length === 0) {
    console.log('Ошибка!');
  } else {
    
    for(var i = 0; i < source.length; i++) {
      if(filterFn(source[i]) === true) {
        allTrue = true;
        break;
      } else {
        allTrue = false;
        break;
      }
    }
    return allTrue;
    
  } //end of else
}

function isNumber(val) {
  return typeof val === 'number';
}

console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
