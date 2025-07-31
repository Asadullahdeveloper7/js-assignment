 // 1. Addition
    let num1 = 9;
    let num2 = 3;
    let sum = num1 + num2;
    document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><hr>");

    // 2. Subtraction, Multiplication, Division, Modulus
    let subtract = num1 - num2;
    let multiply = num1 * num2;
    let divide = num1 / num2;
    let modulus = num1 % num2;

    document.write("Subtraction: " + subtract + "<br>");
    document.write("Multiplication: " + multiply + "<br>");
    document.write("Division: " + divide + "<br>");
    document.write("Modulus: " + modulus + "<br><hr>");

    // 3. Variable and increment/decrement
    let a;
    document.write("Value after variable declaration is: " + a + "<br>");

    a = 8;
    document.write("Initial value: " + a + "<br>");

    a++; // increment
    document.write("Value after increment is: " + a + "<br>");

    a = a + 10;
    document.write("Value after addition is: " + a + "<br>");

    a--; // decrement
    document.write("Value after decrement is: " + a + "<br>");

    let remainder = a % 3;
    document.write("The remainder is: " + remainder + "<br><hr>");

    // 4. Movie ticket price
    let ticketPrice = 500;
    let tickets = 4;
    let totalCost = ticketPrice * tickets;
    document.write("Total cost to buy " + tickets + " tickets is " + totalCost + " PKR<br><hr>");

    // 5. Table of 6
    let table = 6;
    document.write("<h3>Table of " + table + "</h3>");
    for (let i = 1; i <= 10; i++) {
        document.write(table + " x " + i + " = " + (table * i) + "<br>");
    }
    document.write("<hr>");

    // 6. Temperature conversion
    let celsius = 30;
    let fahrenheit = (celsius * 9/5) + 32;
    document.write(celsius + "°C is " + fahrenheit + "°F<br>");

    fahrenheit = 60;
    celsius = (fahrenheit - 32) * 5/9;
    document.write(fahrenheit + "°F is " + celsius + "°C<br><hr>");

    // 7. Shopping cart
    let item1Price = 300;
    let item2Price = 100;
    let item1Qty = 6;
    let item2Qty = 7;
    let shipping = 100;

    let cartTotal = (item1Price * item1Qty) + (item2Price * item2Qty) + shipping;

    document.write("Price of item 1 is " + item1Price + "<br>");
    document.write("Quantity of item 1 is " + item1Qty + "<br>");
    document.write("Price of item 2 is " + item2Price + "<br>");
    document.write("Quantity of item 2 is " + item2Qty + "<br>");
    document.write("Shipping Charges " + shipping + "<br><br>");
    document.write("Total cost of your order is " + cartTotal + "<br><hr>");

    // 8. Percentage calculator
    let totalMarks = 900;
    let marksObtained = 789;
    let percentage = (marksObtained / totalMarks) * 100;

    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + marksObtained + "<br>");
    document.write("Percentage: " + percentage + "%<br><hr>");

    // 9. Currency in PKR
    let dollars = 10;
    let riyals = 25;
    let totalPKR = (dollars * 275.60) + (riyals * 42);

    document.write("Total Currency in PKR: " + totalPKR + "<br><hr>");

    // 10. One expression
    let result = ((3 + 3) * 10) / 2;
    document.write("Result: " + result + "<br><hr>");

    // 11. Age calculator
    let currentYear = 2025;
    let birthYear = 2004;
    let age1 = currentYear - birthYear;
    let age2 = age1 - 1;

    document.write("They are either " + age2 + " or " + age1 + " years old.<br><hr>");

    // 12. Circle calculations
    let radius = 10;
    let pi = 3.142;
    let circumference = 2 * pi * radius;
    let area = pi * radius * radius;

    document.write("Radius: " + radius + "<br>");
    document.write("The circumference is " + circumference + "<br>");
    document.write("The area is " + area + "<br><hr>");

    // 13. Lifetime supply calculator
    let snack = "Wavy";
    let currentAge = 2;
    let maxAge = 55;
    let perDay = 3;
    let totalSnacks = (maxAge - currentAge) * 365 * perDay;

    document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge + ".<br><hr>");