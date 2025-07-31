
let char = prompt("Enter a character:");
let charCode = char.charCodeAt(0);
if (charCode >= 48 && charCode <= 57) {
    alert("The input is a number");
} else if (charCode >= 65 && charCode <= 90) {
    alert("The input is an uppercase letter");
} else if (charCode >= 97 && charCode <= 122) {
    alert("The input is a lowercase letter");
} else {
    alert("The input is not a number or letter");
}


let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));
if (num1 > num2) {
    alert(`${num1} is larger than ${num2}`);
} else if (num2 > num1) {
    alert(`${num2} is larger than ${num1}`);
} else {
    alert("Both numbers are equal");
}


let number = parseFloat(prompt("Enter a number:"));
if (number > 0) {
    alert("The number is positive");
} else if (number < 0) {
    alert("The number is negative");
} else {
    alert("The number is zero");
}


let vowel = prompt("Enter a single character:").toLowerCase();
if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
    alert(true);
} else {
    alert(false);
}


let correctPassword = "Secure123";
let userPassword = prompt("Enter your password:");
if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);


let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):"));
let message;
if (time >= 0 && time < 1200) {
    message = "Good morning!";
} else if (time >= 1200 && time < 1700) {
    message = "Good afternoon!";
} else if (time >= 1700 && time < 2100) {
    message = "Good evening!";
} else if (time >= 2100 && time <= 2359) {
    message = "Good night!";
} else {
    message = "Invalid time entered";
}
alert(message);