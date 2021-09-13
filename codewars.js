// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
    return array.map((line, index) => {
      return `${index + 1}: ${line}`
    });
  }


// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript



const arr = N => {
    let total = [];
    for (let i = 0; i < N; i++){
   total.push(i);
    }
   return total;
    }
  
  

// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript


function flyBy(lamps, drone){
    let droneArray = drone.split(''); // array
    let lampsArray = lamps.split(''); // array
     let droneIndex;
     // find position of T (index)
     // change 'x' to 'o' up until that index
     // change array back to string 
     //return lamps string 
     
   
     for (let i = 0; i < droneArray.length; i++){
     if (droneArray[i] === 'T'){
       droneIndex = i;
     }
   }
   for (let i = 0; i <= droneIndex; i++){
     console.log(droneIndex);
     lampsArray[i] = 'o';
   }
     let lampsString = lampsArray.join('');
     
     return lampsString;
     }

// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
    let total = 0;
      for (let i = 0; i < marks.length; i++){
         total += marks[i];
      
      }
    return Math.floor(total / marks.length);
    }


// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043


let reverse = a =>a.map(a.pop,[...a]); 