// var arr = [[],[],[],[],[]];
// console.log(arr);

// var matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1]
// ];
// console.log("Matrix Array:", matrix);

// for (var i = 1; i <= 10; i++) {
//     console.log(i);

// }

// var userNumber = Number(prompt("Enter any Number to show its Table"));
// var userLength = Number(prompt("Enter Length of Table"));
// for (i = 1; i <= userLength; i++) {
//   console.log("Table of:"+userNumber+"\n"+userNumber + "X" + i + "=" + userNumber * i);
// }

// var fruits = ["apple","banana","mango","orange","strawberry"];
// console.log("Fruits are:",fruits);
// for (let i = 0; i < fruits.length; i++) {
//   console.log("Element at",i ,"index is:",fruits[i]);
  
     
// }
// console.log("Element at index 0 is",(fruits[0]));
// console.log("Element at index 1 is",(fruits[1]));
// console.log("Element at index 2 is",(fruits[2]));
// console.log("Element at index 3 is",(fruits[3]));
// console.log("Element at index 4 is",(fruits[4]));
// console.log("Counting from 1 to 15");
// for (var i = 1; i <= 15; i++){
  
  
//   console.log(i);
  
// }
// console.log("Reverse Counting from 15 to 1");
// for (var j = 15; j>=1; j--){
//   console.log(j);
  
// }

// for (var i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log("Even Numbers are:",i);
//     }
// }

// for (var j = 1; j <= 20; j++) {
//     if (j % 2 !== 0) {
//         console.log("Odd Numbers are:",j);
//     }
// }

// for(var a=2; a<=20; a=a+2){
//     console.log(a+"k");
    
// }

// var num = [12, 45, 7, 89, 23, 56];

// var largest = num[0];

// for (var i = 1; i < num.length; i++) {
//     if (num[i] > largest) {
//         largest = num[i];
//     }
// }

// console.log("Original Array is",num,"\n","Largest number is: " + largest);

// var smallNumber = [12, 45, 7, 89, 23, 56];

// var smallest = smallNumber[0];

// for (var i = 1; i < smallNumber.length; i++) {
//     if (smallNumber[i] < smallest) {
//         smallest = smallNumber[i];
//     }
// }

// console.log("Orignal Array is",smallNumber,"\n","Smallest number is: " + smallest);

// var myNum = 5;
// for (var i = 5; i<=100; i=i+5){
//     console.log(i);
    
// }

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
console.log("Original Array is:",A);

let item = prompt("Welcome to ALI Bakery. What do you want to order sir/ma'am?");

let index = A.indexOf(item);

if (index !== -1) {
    console.log(item + " is available at index " + index + " in our bakery");
} else {
    console.log("We are sorry. " + item + " is not available in our bakery");
}