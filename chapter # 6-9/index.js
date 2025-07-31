 // Question 1: Understanding increment/decrement
    let a = 11;

    document.write("The value of a++ is: " + a++ + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of --a is: " + --a + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of a-- is: " + a-- + "<br>");
    document.write("Now the value of a is: " + a + "<br><hr><br>");

    // Question 2: Explain result
    let A = 2;
    let b = 1;

    let result = --A - --b + ++b + b--;

    document.write("Value of a = " + A + "<br>");
    document.write("Value of b = " + b + "<br>");
    document.write("Result = " + result + "<br>");
    document.write("<hr><br>");

    // Question 3: Greet user
    let userName = prompt("Enter your name:");
    if (userName) {
        alert("Hello, " + userName + "! Welcome to our website.");
    } else {
        alert("Hello! Welcome to our website.");
    }

    document.write("<hr><br>");

    // Question 5: Multiplication Table
    let number = prompt("Enter a number for multiplication table:");
    if (!number) {
        number = 5; // default
    }
    number = parseInt(number);

    document.write("<h3>Multiplication Table of " + number + "</h3>");
    for (let i = 1; i <= 10; i++) {
        document.write(number + " x " + i + " = " + (number * i) + "<br>");
    }

    document.write("<hr><br>");

    // Question 6: Subject Marks Table
    let subject1 = prompt("Enter name of Subject 1:");
    let subject2 = prompt("Enter name of Subject 2:");
    let subject3 = prompt("Enter name of Subject 3:");

    let totalMarks = 100;

    let marks1 = parseInt(prompt("Enter marks obtained in " + subject1 + ":")) || 0;
    let marks2 = parseInt(prompt("Enter marks obtained in " + subject2 + ":")) || 0;
    let marks3 = parseInt(prompt("Enter marks obtained in " + subject3 + ":")) || 0;

    let totalObtained = marks1 + marks2 + marks3;
    let percentage = (totalObtained / (totalMarks * 3)) * 100;

    document.write("<h3>Marks Sheet</h3>");
    document.write("<table border='1' cellpadding='5'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarks) * 100).toFixed(0) + "%</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarks) * 100).toFixed(0) + "%</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarks) * 100).toFixed(0) + "%</td></tr>");
    document.write("<tr><th>Total</th><th>300</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(0) + "%</th></tr>");
    document.write("</table>");