// console.log("app.js loaded!")
// console.log(data);


// *********  Make reference to required html areas ******

// Use d3 to select the table body
let tbody = d3.select("tbody");

// Get a reference to the button on the page
let button = d3.selectAll("#filter-btn");

// Get a reference to the input element on the page with the id property
let inputField = d3.select("#datetime");



//  ****** What user sees and does - see the table, make a search  **********

// Activate the buildTable function thus fill the table with all data
buildTable(data);

// Create event handlers for clicking button or pressing enter key
button.on("click", runEnter);
// inputField.on("change", runEnter);



// *****  Functions to fill the table and to filter data  ************

// buildTable function:  interate object by object, populate table
function buildTable(ufoSightings) {
    tbody.html("");
    
    ufoSightings.forEach(function(ufoSighting)  {
        // console.log(ufoSighting);

        // Append one table row "tr" to the table body
        let row = tbody.append("tr");

        // Create a tabledata item for each key value pair 
        Object.entries(ufoSighting).forEach(function([key, value]) {  //*****WHY IS "key" GRAYED
            // console.log('key = ${key}, value = ${value}');
            var cell = row.append("td");
            cell.text(value);
        });

    });
}


// INPUT BOX:  Complete the form event handler function, filter data
function runEnter() {

    // Prevent the input box from refreshing
    d3.event.preventDefault();
    
    // Read the input box and get the raw HTML node
    let inputElement = d3.select("#datetime");

    // Get the value property of the input box
    let inputValue = inputElement.property("value");

    // Filter datetime data from ufoSightings and assign it to filteredData
    let filteredData = data.filter(dt => dt.datetime === inputValue);
   
    // Creat table with filtered data
    buildTable(filteredData);
};

