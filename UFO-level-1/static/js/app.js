// console.log("app.js loaded!")
// console.log(data);

// Assign the data from data.js to a descriptive variable
// var ufoSightings = data;


// MAKE TABLE FROM LIST OF OBJECTS
// ************************************************

// Use d3 to select the table body
var tbody = d3.select("tbody");

// INPUT FORM AND FILTER BUTTON
// *****************************************************

// Get a reference to the button on the page
var button = d3.selectAll("#filter-btn");

// Get a reference to the input element on the page with the id property
var inputField = d3.select("#datetime");


// Create event handlers for clicking button or pressing enter key
button.on("click", runEnter);
inputField.on("change", runEnter);

buildTable(data);

// interate object by object
function buildTable(ufoSightings) {
    tbody.html("");
    
    ufoSightings.forEach(function(ufoSighting)  {
        // console.log(ufoSighting);

        // Append one table row "tr" to the table body
        var row = tbody.append("tr");

        // Create a tabledata item for each key value pair 
        Object.entries(ufoSighting).forEach(function([key, value]) {
            // console.log('key = ${key}, value = ${value}');
            var cell = row.append("td");
            cell.text(value);
        });

    });
}


// Complete the event handler function for the form
function runEnter() {

    // Prevent the input box from refreshing
    d3.event.preventDefault();
    
    // Read the input box and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input box
    var inputValue = inputElement.property("value");

    // console.log(inputValue);
    // console.log(ufoSightings);

    // Filter datetime data from ufoSightings and assign it to filteredData
    var filteredData = data.filter(dt => dt.datetime === inputValue);
    console.log(filteredData);
    buildTable(filteredData);
};

