// var studentNames = [];
// studentNames.push("Ahmed");
// studentNames.push("Ali");
// console.log("Added Name is:"+studentNames);

// var studentNames = new Array();
// studentNames.push("Ahmed");
// studentNames.push("Ali");
// console.log("Added Name is:"+studentNames);

// var studentName = ["Ahmed","Ali","Fareed"];
// console.log("Student Name are",studentName);
// var numArray = [12,14,15]
// console.log("Roll number is",numArray);
// var booleanArray = [true,false];
// console.log("Boolean Array",booleanArray);

// var mixedArray = ["Ahmed",1234,true,2.34];
// console.log("Mixed Array:",mixedArray);

// console.log("Qualifications:");
// var qualificationsArray = ["SSC","HSC","BSC","BS","BCOM","BE","MS","ME","M.Phil","PhD"];
// console.log(qualificationsArray);

// var studentNames = ["Ahmed","Ali","Usman"];
// var scores = [320,230,480];
// var totalMarks = 500;

// console.log("Score Of",studentNames[0],"is",scores[0],".Percentage:",(scores[0]/totalMarks)*100);
// console.log("Score Of",studentNames[1],"is",scores[1],".Percentage:",(scores[1]/totalMarks)*100+"%");
// console.log("Score Of",studentNames[2],"is",scores[2],".Percentage:",(scores[2]/totalMarks)*100+"%");

// var colors = ["Red", "Green", "Blue", "Yellow"];

// console.log("Original Array:");
// console.log(colors);

// // a. Beginning mein color add
// var color = prompt("Which color do you want to add at beginning?");
// colors.unshift(color);

// console.log("After adding color at beginning:");
// console.log(colors);

// // b. End mein color add
// color = prompt("Which color do you want to add at end?");
// colors.push(color);

// console.log("After adding color at end:");
// console.log(colors);

// // c. Beginning mein 2 more colors
// colors.unshift("Black", "White");

// console.log("After adding two colors at beginning:");
// console.log(colors);

// // d. First color delete
// colors.shift();

// console.log("After deleting first color:");
// console.log(colors);

// // e. Last color delete
// colors.pop();

// console.log("After deleting last color:");
// console.log(colors);

// // f. User se index aur color lena
// var index = Number(prompt("At which index do you want to add a color?"));
// color = prompt("Enter color name:");

// colors.splice(index, 0, color);

// console.log("After adding color at desired index:");
// console.log(colors);

// // g. User se index aur kitne colors delete karne hain
// index = Number(prompt("At which index do you want to delete color(s)?"));
// var deleteCount = Number(prompt("How many colors do you want to delete?"));

// colors.splice(index, deleteCount);

// console.log("Final Array:");
// console.log(colors);

// var scores = [320, 230, 480, 120];

// console.log("Scores of Students:");
// console.log(scores);

// scores.sort(function(a, b) {
//     return a - b;
// });

// console.log("Ordered Scores of Students:");
// console.log(scores);

// var cities = ["Karachi","Hyderabad","Sukkur","Lahore","Islamabad","Rawalpindi","Quetta","Peshawar"];
// console.log("Cities List:",cities);
// var selectedCities = cities.splice(0,3);
// console.log("Selected Cities List:",selectedCities);

// var arr = ["this","is","my","cat"];
// console.log("Original Array:",arr);
// var result = arr.join(" ");
// console.log("Result String",result);

// var queue = [];

// queue.push("Apple");
// queue.push("Banana");
// queue.push("Mango");
// queue.push("Orange");

// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue.shift());

// var stack = [];

// stack.push("Apple");
// stack.push("Banana");
// stack.push("Mango");
// stack.push("Orange");

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Oppo"];

console.log(manufacturers);