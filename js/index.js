/*
Name: Rohan Mallu
Date Created: November 13th 2024
File: index.html
GUI Assignment: Using the jQuery Plugin/UI with Your Dynamic Table
Description: JS file for HW4 Part 2. This is where the code for generating the
table is implemented.
*/

/**
 * Resources:
 * In-class notes on JavaScript (for general reference)
 * 
 * Traversing an HTML table with JavaScript and DOM interfaces 
 * (reference for generateTable() function): 
 * https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces 
 * 
 * isNaN() function (for generateTable() function): 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 * 
 * parseInt() function (for generateTable() function):
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt 
 * 
 * Information on tables in HTML (for general reference): 
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 * 
 * createThead() function (for generateTable() function):
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTHead 
 *  
 * createTbody() function (for generateTable() function):
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTBody 
 * 
 * Boolean variables (for checkBounds() and checkErrors() functions):
 * https://www.w3schools.com/js/js_booleans.asp 
 * 
 */

/**
 * Generates the table based on user inputs
 * @returns A dynamically generated table with a header, rows, columns, and values
 * inside a div container.
 */
function createTable() {
    // Get the user's inputs from the form and convert the inputs to integers
    var minCol = parseInt(document.getElementById("minCol").value);
    var maxCol = parseInt(document.getElementById("maxCol").value);
    var minRow = parseInt(document.getElementById("minRow").value);
    var maxRow = parseInt(document.getElementById("maxRow").value);

    // Check if the inputs are numbers or inside the value range [-50, 50]
    
  
    // retrieve the id of the div container where the table will be placed in
    const container = document.getElementById("table-container");

    // clear any previous table before submitting new inputs
    container.innerHTML = "";

    // create table, table head, and table body
    const makeTable = document.createElement("table");
    const makeHead = makeTable.createTHead();
    const makeTableBody = makeTable.createTBody();

    // create the header row, which includes an empty header at the start of the row
    const makeColumns = document.createElement("tr");
    const emptyCol = document.createElement("th");
    emptyCol.id = "empty-box"; // format the empty header column in CSS
    makeColumns.appendChild(emptyCol); // append empty header column to header row 

    // create a column number, then append each column number to header row 
    for(let i = minCol; i <= maxCol; i++) {
        const colNum = document.createElement("th");
        colNum.textContent = i;
        makeColumns.appendChild(colNum);
    }

    // append the header row to the table head, then append table head to table
    makeHead.appendChild(makeColumns);
    makeTable.appendChild(makeHead);

    // create rows and elements
    for(let j = minRow; j <= maxRow; j++) {
        // create rows
        const makeRows = document.createElement("tr");
        const rowNum = document.createElement("th");
        rowNum.textContent = j;
        makeRows.appendChild(rowNum);

        // create elements for the table: each element is the product
        // of a table row and a table column
        for(let k = minCol; k <= maxCol; k++) {
            const element = document.createElement("td");
            element.textContent = j * k;
            makeRows.appendChild(element);
        }
        // append rows and table elements to the table body
        makeTableBody.appendChild(makeRows);
    }

    // append table body to the table
    makeTable.appendChild(makeTableBody);
   
    // append table to container, then append container to the page
    container.appendChild(makeTable)
    document.body.appendChild(container);
}
