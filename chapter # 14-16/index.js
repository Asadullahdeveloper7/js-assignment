
    // 1. Empty array using []
    let studentNames1 = [];

    // 2. Empty array using new Array()
    let studentNames2 = new Array();

    // 3. Strings array
    let names = ["Ali", "Ahmed", "Sara"];

    // 4. Numbers array
    let numbers = [10, 20, 30];

    // 5. Boolean array
    let booleans = [true, false, true];

    // 6. Mixed array
    let mixed = ["Hello", 123, true];

    // 7. Qualifications
    let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
    document.write("<h3>Qualifications:</h3>");
    document.write("<ul>");
    for (let i = 0; i < qualifications.length; i++) {
      document.write("<li>" + qualifications[i] + "</li>");
    }
    document.write("</ul>");

    // 8. Student scores
    let students = ["Ali", "Ahmed", "Sara"];
    let scores = [450, 380, 400];
    let totalMarks = 500;

    document.write("<h3>Student Scores:</h3>");
    for (let i = 0; i < students.length; i++) {
      let percent = (scores[i] / totalMarks) * 100;
      document.write(students[i] + " scored " + scores[i] + " (" + percent + "%)<br>");
    }

    // 9. Color Array
    let colors = ["Red", "Green", "Blue"];
    document.write("<h3>Original Colors: </h3>" + colors.join(", ") + "<br>");

    // a. Add color to beginning
    let addStart = prompt("Enter color to add at start:");
    colors.unshift(addStart);
    document.write("After adding at start: " + colors.join(", ") + "<br>");

    // b. Add color to end
    let addEnd = prompt("Enter color to add at end:");
    colors.push(addEnd);
    document.write("After adding at end: " + colors.join(", ") + "<br>");

    // c. Add 2 colors at beginning
    colors.unshift("Purple", "Orange");
    document.write("After adding 2 at start: " + colors.join(", ") + "<br>");

    // d. Delete first color
    colors.shift();
    document.write("After removing first color: " + colors.join(", ") + "<br>");

    // e. Delete last color
    colors.pop();
    document.write("After removing last color: " + colors.join(", ") + "<br>");

    // f. Add color at user index
    let indexAdd = prompt("Enter index to add color:");
    let colorName = prompt("Enter color name:");
    colors.splice(indexAdd, 0, colorName);
    document.write("After adding at index: " + colors.join(", ") + "<br>");

    // g. Delete color(s) from user index
    let indexDel = prompt("Enter index to delete color(s):");
    let countDel = prompt("How many colors to delete?");
    colors.splice(indexDel, countDel);
    document.write("After deleting color(s): " + colors.join(", ") + "<br>");

    // 10. Sort scores
    let scoresList = [320, 230, 480, 120];
    scoresList.sort();
    document.write("<h3>Sorted Scores:</h3>" + scoresList.join(", ") + "<br>");

    // 11. City array
    let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    let selected = cities.slice(1, 4);
    document.write("<h3>Selected Cities:</h3>" + selected.join(", ") + "<br>");

    // 12. Join array
    let words = ["This", " is", " my", " cat"];
    let sentence = words.join("");
    document.write("<h3>Joined Sentence:</h3>" + sentence + "<br>");

    // 13. FIFO (First In First Out)
    let fifo = [];
    fifo.push("Keyboard");
    fifo.push("Mouse");
    fifo.push("Printer");
    fifo.push("Monitor");
    document.write("<h3>FIFO Output:</h3>");
    while (fifo.length > 0) {
      document.write(fifo.shift() + "<br>");
    }

    // 14. LIFO (Last In First Out)
    let lifo = [];
    lifo.push("Keyboard");
    lifo.push("Mouse");
    lifo.push("Printer");
    lifo.push("Monitor");
    document.write("<h3>LIFO Output:</h3>");
    while (lifo.length > 0) {
      document.write(lifo.pop() + "<br>");
    }

    // 15. Phone Manufacturers Dropdown
    let phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    document.write("<h3>Phone Brands:</h3>");
    document.write("<select>");
    for (let i = 0; i < phones.length; i++) {
      document.write("<option>" + phones[i] + "</option>");
    }
    document.write("</select>");
  