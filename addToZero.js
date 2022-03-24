// Starting array
let array = [28, 43, -12, 30, 4, 0, -4];
let reverseArray = [];
// Write your solution below:

// Separate For loops
for (let i = array.length; i > 0; i--) {
    let num1 = array[i - 1];
    reverseArray.push(num1);
}  

for (let i = 0; i < array.length; i++) {
      let index = 0;
      if (array[i] + reverseArray[index] === 0) {
        console.log("True");
      } else {
        null
      }
    index++;
  }

  // Nested For loop
let result = "";
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

