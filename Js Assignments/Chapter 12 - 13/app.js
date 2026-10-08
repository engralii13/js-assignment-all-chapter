// var num = prompt("Enter a Character:");

// var ascii = num.charCodeAt(0);
// if (ascii >= 48 && ascii <= 57){
//     console.log("the given input "+num+" "+"is a Number");   
// }
// else if (ascii >= 65 && ascii <= 90){
//     console.log("the given input "+num+" "+"is an upper case");   
// }
// else if (ascii >= 97 && ascii <= 122){
//     console.log("the given input "+num+" "+"is a lower case");   
// }
// else {
//     console.log("Invalid Input:");
    
// }

// var num1 =Number( prompt("Enter First Number:"));
// var num2 = Number(prompt("Enter Second Number:"));
// if (num1 > num2){
//     console.log("The Number are :"+ num1+" " +"and" + num2 +"\t"+"and lager number is "+num1);
    
// }
// else if (num2 > num1){
//     console.log("The Number are :"+ num1+ " "+"and" + num2 +" \t"+"and lager number is "+num2);
    
// }
// else if (num1 === num2){
//     console.log("The Number are :"+ num1+ " "+"and" + num2 +" "+"and the are equal ");
    
// }
// else {
//     console.log("invalid!");
    
// }

// var userNumber = Number( prompt("Enter any Number:"));
// if (userNumber > 0) {
//     console.log("Number is Positive.");
    
// }else if (userNumber < 0){
//     console.log("The Number is Negative.");
    
// }else {
//     console.log("The Number is Zero.");
    
// }

// var character = prompt("Enter a Character to check It os Vowel or not.");
// if (character == "a"|| character =="A"||character=="e"|| character =="E"||character=="i"||character=="I"||character=="o"||character=="O"||character=="u"||character=="U"){
//     console.log(character+"  "+"It is Vowel");
    
// }
// else if (character > 0 ){
//     console.log(character+"  "+"It is a Number");
    
// }else {
//     console.log(character+"  "+"Not Vowel");
    
// }

// var userPassowrd = prompt("Enter Your Password:")
// var storedPassword = "ahmed";
// if (userPassowrd == storedPassword){
//     console.log("Correct Password");
    
// }else if(userPassowrd = ""){
//     console.log("Retry Passowrd");
    
// }
// else {
//     console.log("Incorrect Password"+"Correct Password is"+"  "+ storedPassword);
    
// }

// let greeting;
// let hour = prompt("Enter timw now");

// if (hour < 12) {
//     greeting = "Good Morning";
// } else if (hour < 18) {
//     greeting = "Good Day";
// } else {
//     greeting = "Good Evening";
// }
// console.log(greeting);
var time = Number(prompt("Enter time in 24-hour format:"));

if (time >= 0 && time < 1200) {
    console.log("Good morning!");
}
else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
}
else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
}
else {
    console.log("Invalid time!");
}