// Starting array
let array = [28, 43, -12, 30, 4, 0, 13];
let reverseArray = [];
// Write your solution below:

// Separate For loops attempt
// for (let i = array.length; i > 0; i--) {
//     let num1 = array[i - 1];
//     reverseArray.push(num1);
// }  

// for (let i = 0; i < array.length; i++) {
//       let index = 0;
//       if (array[i] + reverseArray[index] === 0) {
//         console.log("True");
//       } 
//     index++;
//   }






  // Nested For loop
let result = "False";
for(let i = 0; i < array.length; i++) {
  for(let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
      result = "True";
    } 
  }
}
}
console.log(result);


