let array = [1, 2, 3, 4, 5, 6];



//////// forEach ////////

function forEach(arr, func) {
  
  for(var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
  
}

// forEach(array, item => console.log(item));

//////// filter ////////

function filter(arr, func) {
  var result = [],
      j = 0;
  
  for(var i = 0; i < arr.length; i++) {
    if(func(arr[i]) === true) {
      
        result[j] = arr[i];
        j++;
      
    }
    
  }
  
  arr = result;
  
  return arr;
  
}

let greaterThan4 = filter(array, item => item > 4);

// console.log(greaterThan4);

//////// map ////////

function map(arr, func) {
  var result = [],
      j = 0;
  
  for(var i = 0; i < arr.length; i++) {
    var sq = func(arr[i]);
    
    result[j] = sq;
    j++;
    
  }
  
  return result;
}

let sqare = map(array, item => item*item);

// console.log(sqare);
// console.log(array);


//////// slice ////////

function slice(arr, func) {
  var res = [],
      resI = 0;
  for(var i = func[0]; i <= func[1]; i++) {
    res[resI] = arr[i];
    resI++;
  }
  
  return res;
}

let cut = slice(array, [1,3]);
// console.log(cut);


//////// reduce ////////


function reduce (arr, func, start) {
  var result;
  result = (start === undefined) ? 0 : start;
   
  for(var i = 0; i < arr.length; i++) {
    
    result =+ func(arr[i], result);
    
  }
  
  return result;
  
}

let reduceArray = reduce(array, (item, prev) => item + prev);

// console.log(reduceArray);



//////// splice ////////

function splice(args) {
  var arr = arguments[0],
      arrSecond = arguments[1],
      start = arrSecond[0],
      finish = arrSecond[1],
      forInsert = [],
      forInsertIdent = 0,
      result=[];
  
  for(var i = 2; i < arrSecond.length; i++){
    forInsert[forInsertIdent] = arrSecond[i];
    forInsertIdent++;
  }
  
  // проверяем, есть ли что вставлять после удаления
  if(forInsert.length === 0) {
    var ident = 0;
    
    for( i = 0; i < arr.length; i++) {
      if(i < start || i >= start + finish) {
        result[ident] =+ arr[i];
        ident++;
      }
    }
    
    arr = result;
  } else {
    console.log(forInsert);
  }
        
  return arr;
}

let spliceFunc = splice(array, [1, 2, 4, 5]);
//console.log(spliceFunc);