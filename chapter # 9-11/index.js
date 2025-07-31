
    let city = prompt("Enter your city name:");
    if (city === "Karachi") {
        alert("Welcome to city of lights");
    } else {
        alert("Go back to your city, ghair muqami");
    }


    let gender = prompt("Enter your gender (male/female):");
    if (gender === "male") {
        alert("Good Morning Sir");
    } else if (gender === "female") {
        alert("Good Morning Ma'am");
    } else {
        alert("Enter correct gender");
    }


    let signal = prompt("Enter signal color (red, yellow, green):");
    if (signal === "red") {
        alert("Must Stop");
    } else if (signal === "yellow") {
        alert("Ready to move");
    } else if (signal === "green") {
        alert("Move now");
    }

    let fuel = parseFloat(prompt("Enter remaining fuel in litres:"));
    if (fuel < 0.25) {
        alert("Please refill the fuel in your car");
    }

    var a = 4;
    if (++a === 5) {
        alert("Condition for variable a is true");
    }

    var b = 82;
    if (b++ === 83) {
        alert("Condition for variable b is true");
    }

    var c = 12;
    if (c++ === 13) {
        alert("Condition 1 is true");
    }
    if (c === 13) {
        alert("Condition 2 is true");
    }
    if (++c < 14) {
        alert("Condition 3 is true");
    }
    if (c === 14) {
        alert("Condition 4 is true");
    }

    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === materialCost + laborCost) {
        alert("The cost equals");
    }

    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }

    if ("car" < "cat") {
        alert("car is smaller than cat");
    }


    let s1 = parseFloat(prompt("Enter marks for subject 1:"));
    let s2 = parseFloat(prompt("Enter marks for subject 2:"));
    let s3 = parseFloat(prompt("Enter marks for subject 3:"));

    let total = 300;
    let obtained = s1 + s2 + s3;
    let perc = (obtained / total) * 100;

    let grade = "";
    let remarks = "";

    if (perc >= 80) {
        grade = "A-one";
        remarks = "Excellent";
    } else if (perc >= 70) {
        grade = "A";
        remarks = "Good";
    } else if (perc >= 60) {
        grade = "B";
        remarks = "You need to improve";
    } else {
        grade = "Fail";
        remarks = "Sorry";
    }

    document.write("<h2>Marks Sheet</h2>");
    document.write("Total Marks: " + total + "<br>");
    document.write("Marks Obtained: " + obtained + "<br>");
    document.write("Percentage: " + perc.toFixed(2) + "%<br>");
    document.write("Grade: " + grade + "<br>");
    document.write("Remarks: " + remarks + "<hr>");

    let secret = 7;
    let guess = parseInt(prompt("Guess the secret number (1-10):"));
    if (guess === secret) {
        alert("Congratulations! You guessed the correct number.");
    } else if (guess === secret + 1 || guess === secret - 1) {
        alert("Close enough to the correct answer.");
    } else {
        alert("Wrong guess! Try again.");
    }

    let num = parseInt(prompt("Enter a number to check if divisible by 3:"));
    if (num % 3 === 0) {
        alert("The number is divisible by 3");
    }

  
    let check = parseInt(prompt("Enter a number to check even or odd:"));
    if (check % 2 === 0) {
        alert("The number is even");
    } else {
        alert("The number is odd");
    }


    let temp = parseFloat(prompt("Enter temperature:"));
    if (temp > 40) {
        alert("It is too hot outside.");
    } else if (temp > 30) {
        alert("The Weather today is Normal.");
    } else if (temp > 20) {
        alert("Today's Weather is cool.");
    } else {
        alert("OMG! Today's weather is so Cool.");
    }

    
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let op = prompt("Enter operation (+, -, *, /, %):");

    let result;
    if (op === "+") {
        result = num1 + num2;
    } else if (op === "-") {
        result = num1 - num2;
    } else if (op === "*") {
        result = num1 * num2;
    } else if (op === "/") {
        result = num1 / num2;
    } else if (op === "%") {
        result = num1 % num2;
    } else {
        result = "Invalid operator";
    }

    alert("Result: " + result);