// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function myFunction(str, x){
  let strArray = [];
  for (let i = 0; i <= x; i++){
      strArray = strArray.concat(str);
  }
  return strArray;
}








// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------


function myArray(str){
   newStr = str.slice('').reverse();
   return newStr;
}







// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function falsyOut(arr){
let newArray = arr.filter(Boolean);
return newArray;
}








// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

function nested(arr){
let objectArr = arr.map(item => Object.fromEntries(item));
return objectArr;
}








// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------


function unique(numbers){
    const uniqueNumbers = [ ... new Set(numbers)];
}







// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------


function similar(arr1, arr2){
    let newArr1 = arr1.slice().sort();
    let newArr2 = arr2.slice().sort();
if (newArr1.length === newArr2.length && newArr1.every(value, index) === newArr2.every(value, index)) {
    return true;
}else {
    return false;
}
}

function similar(arr1, arr2) {
    let newArr1 = arr1.slice().sort();
    let newArr2 = arr2.slice().sort();
    
    //compare newArr1 to newArr2
    //if you can't find the number in the other array, return false
    for (let i = 0; i < newArr1.length; i++) {
      newArr2.find(num => {
        if (num !== newArr1[i]) {
          return false
        }
      })
    }
  
      //compare newArr2 to newArr1
    //if you can't find the number in the other array, return false
    for (let i = 0; i < newArr2.length; i++) {
      newArr1.find(num => {
        if (num !== newArr2[i]) {
          return false
        }
      })
    }
  
      //Check their respective lengths to ensure no duplicates
    if (newArr1.length == newArr2.length) {
      return true;
    } else {
      return false;
    }
  }







// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------



