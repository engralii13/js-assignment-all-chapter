// var a = 10;

// console.log("Result:");
// console.log("The value of a is: " + a);

// console.log("The value of ++a is: " + ++a);
// console.log("Now the value of a is: " + a);

// console.log("The value of a++ is: " + a++);
// console.log("Now the value of a is: " + a);

// console.log("The value of --a is: " + --a);
// console.log("Now the value of a is: " + a);

// console.log("The value of a-- is: " + a--);
// console.log("Now the value of a is: " + a);
// console.log("\n");
// var a = 2;
// var b = 1;

// console.log("--a: " + --a);
// console.log("--a + --b: " + (--a + --b));
// console.log("--a + --b + ++b: " + (--a + --b + ++b));

// var result = --a + --b + ++b + b--;

// console.log("Result: " + result);
// console.log("Final value of a: " + a);
// console.log("Final value of b: " + b);

// let greet = prompt("Enter Your Name:")
// console.log("Hi!",greet ,"Welcome to Webpage");

// let num = prompt("Enter a Number:")
// if (num === "" || isNaN(num)){
//     num = 5;
// }
// console.log("Multiplication Table of: ",num);

// console.log(num+" X 1 = "+num*1);
// console.log(num+" X 2 = "+num*2);
// console.log(num+" X 3 = "+num*3);
// console.log(num+" X 4 = "+num*4);
// console.log(num+" X 5 = "+num*5);
// console.log(num+" X 6 = "+num*6);
// console.log(num+" X 7 = "+num*7);
// console.log(num+" X 8 = "+num*8);
// console.log(num+" X 9 = "+num*9);
// console.log(num+" X 10 = "+num*10);

var subject1 = prompt("Enter First Subject1 name: ");
var subject2 = prompt("Enter First Subject2 name: ");
var subject3 = prompt("Enter First Subject3 name: ");

var totalMarks = 100;

var obtainMark1 = prompt("Enter Obtain Marks in "+subject1+":");
var obtainMark2 = prompt("Enter Obtain Marks in "+subject2+":");
var obtainMark3 = prompt("Enter Obtain Marks in "+subject3+":");


var total = Number(obtainMark1) + Number(obtainMark2) + Number(obtainMark3);

// console.log("total obtain marks:"+total);


var totalMarksAll = totalMarks *3;




var percentage = ((total / totalMarksAll)*100);
// console.log("percent:"+percentage);

console.log("Subject\t\tTotal Marks \t Obtained Marks \t Percentage");

console.log(subject1 +"\t\t\t"+totalMarks+"\t\t\t\t"+obtainMark1+"\t\t\t\t\t"+(obtainMark1/100)*100+"%");

console.log(subject2 +"\t\t\t"+totalMarks+"\t\t\t\t"+obtainMark2+"\t\t\t\t\t"+(obtainMark2/100)*100+"%");

console.log(subject3 +"\t\t\t"+totalMarks+"\t\t\t\t"+obtainMark3+"\t\t\t\t\t"+(obtainMark3/100)*100+"%");

console.log("Total Marks:"+totalMarksAll);
console.log("Total Obtained Marks:"+ total);
console.log("Overall Percentage:"+percentage+"%");








