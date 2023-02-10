// Using the inputted card number, create a new set of numbers by
// transforming each of the digits in the inputted credit card number.
// Let's use this number 4102 0808 8043 5620 as an example input.
// After following the steps below the inputted number becomes 4204 0707 8046 5320.
// Starting on the right and moving left, double every other digit.
// For example the digit 3 becomes 6.

// If the result of the doubled digit is a double digit number,
// add together each digit of the double digit number.
// For example, the digit 7 doubled becomes 14,
// adding those together becomes 1 + 4, which results in 5.

// Function ccValidator() initial operation Description:
// double every other number starting from the right
// if multiplication result = double digit: return sum

// Example
// input:     4102 0808 8043 5620
//             * *  * *  * *  * *
// expected:  4204 0707 8046 5320
// in reverse before sum of double digits: 0 2 12 5 6 4 0 8 16 0 16 0 4 0 2 4

// function findDoubleNumbers(array) {
//   let newArrays = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= 10 && array[i] < 100) {
//       newArrays.push([array[i]]);
//     }
//   }
//   return newArrays;
// }

function ccValidator(number) {
  let numNoSpace = number.replaceAll(" ", "");
  let numArray = numNoSpace.split("");
  let numArrayReverse = numArray.reverse();
  numArrayReverse.unshift("0", "0");
  let output = numArrayReverse.map(
    (num, index) => (index % 2 === 0 ? num * 2 : num)
    //                   condition   ?    true : false
  );
  output.splice(0, 2);
  for (let i = 0; i < output.length; i++) {
    if (typeof output[i] === "string") {
      output[i] = parseInt(output[i]);
    }
  }
  for (let i = 0; i < output.length; i++) {
    if (output[i] >= 10) {
      output[i] = output[i]
        .toString()
        .split("")
        .reduce((a, b) => a + parseInt(b), 0);
    }
  }
  let ccNumFoward = output.reverse();

  let sum = 0;
  for (let i = 0; i < ccNumFoward.length; i++) {
    sum += ccNumFoward[i];
  }

  let sumSplit = sum.toString().split("");
  console.log(sumSplit);

  for (let i = 0; i < sumSplit.length; i++) {
    if (sumSplit[1] === "0") {
      console.log("CREDIT CARD IS VALID");
    } else {
      console.log("CREDIT CARD IS NOT VALID");
    }
  }
}
// The reduce function is a method available on arrays in JavaScript
// that allows you to reduce an array of values to a single value.
// It does this by repeatedly applying a function to the elements in the array,
// which takes two arguments: an accumulator
// (which accumulates the result of the function as it is applied to each element),
// and the current element being processed.

// In this code, the reduce function is used to add the digits of
// a double-digit number together. Here's a step-by-step explanation of what happens:

// 1. The toString method is used to convert the double-digit number to a string.

// 2. The split method is used to split the string into an array of characters.
// For example, if the double-digit number is 16, the resulting array would be ['1', '6'].

// 3. The reduce function is called on the character array,
// with the callback function (a, b) => a + parseInt(b) passed as the argument.

// In the first iteration of the reduce function, a is set to
// the first character in the array ('1'), and b is set to the second character ('6').
// The parseInt function is used to convert the characters to numbers,
// and then they are added together, resulting in 7.

// In subsequent iterations of the reduce function, a is set to the result of
// the previous iteration (7), and b is set to the next character in the array.
// If there are no more characters in the array, the final value of a is returned
// as the result of the reduce function, which is the single-digit number
// representation of the double-digit number.

// So, in this code, the reduce function is used to add the digits of a
// double-digit number together, resulting in a single-digit number
// representation of the original double-digit number.

//   for (i = 0; i < output.length; i++) {
//     let newNum = Number(output[i]);
//     if (newNum > 9) {
//       display = newNum[0] + newNum[1];
//       console.log(i);
//       return display;
//     } else {
//       display = Number(newNum);
//       console.log(i);
//       return display;
//     }
//   }

// function handleNumStr(str) {
//   var input = "8102";
//   var firstDigit = Number(input[0]);
//   var secondDigit = Number(input[2]);
//   // var firstCalculated =  ?
//   // var firstDoubled = String(firstDigit * 2);
//   var secondDoubled = String(secondDigit * 2);

//   var firstDoubled = "16";
//   var firstCalculated =
//     firstDoubled.length > 1
//       ? Number(firstDoubled[0]) + Number(firstDoubled[1])
//       : Number(firstDoubled);

//   return firstCalculated;
// }

// let arr = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 10 && arr[i] < 100) {
//     sum += arr[i];
//   }
// }
