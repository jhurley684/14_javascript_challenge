// console.log("app.js loaded!")
// console.log(data);


// // *********  Make reference to required html areas ******

// Use d3 to select the table body
let tbody = d3.select("tbody");

// Activate the buildTable function thus fill the table with all data
buildTable(data);


// Get a reference to the input elements on the page with the id property
let inputField_dt = d3.select("#datetime");
let inputField_cty = d3.select("#city");
let inputField_st = d3.select("#state");
let inputField_ctry = d3.select("#country");
let inputField_shp = d3.select("#shape");

// Create event handlers for clicking button or pressing enter key
// button.on("click", runEnter);               
inputField_dt.on("change", runEnter_dt);   
inputField_cty.on("change", runEnter_cty);   
inputField_st.on("change", runEnter_st);   
inputField_ctry.on("change", runEnter_ctry);   
inputField_shp.on("change", runEnter_shp);   



// // buildTable function:  interate object by object, populate table
function buildTable(ufoSightings) {
    tbody.html("");
    
    ufoSightings.forEach(function(ufoSighting)  {

        // Append one table row "tr" to the table body
        let row = tbody.append("tr");

        // Create a tabledata item for each key value pair 
        Object.entries(ufoSighting).forEach(function([key, value]) {  
            let cell = row.append("td");
            cell.text(value);
        });

    });
}


// // INPUT BOX:  Complete the form event handler function, filter data
function runEnter_dt() {

    // Prevent the input box from refreshing
    d3.event.preventDefault();
    
    // Read the input box and get the raw HTML node
    let inputElement = d3.select("#datetime");

    // Get the value property of the input box
    let inputValue = inputElement.property("value");

    // Filter datetime data from ufoSightings and assign it to filteredData
    let filteredData = data.filter(obj => obj.datetime === inputValue);
   
    // Creat table with filtered data
    buildTable(filteredData);
};


function runEnter_cty() {

    // Prevent the input box from refreshing
    d3.event.preventDefault();
    
    // Read the input box and get the raw HTML node
    let inputElement = d3.select("#city");

    // Get the value property of the input box
    let inputValue = inputElement.property("value");

    // Filter datetime data from ufoSightings and assign it to filteredData
    let filteredData = data.filter(obj => obj.city === inputValue);
   
    // Creat table with filtered data
    buildTable(filteredData);
};


function runEnter_st() {

    // Prevent the input box from refreshing
    d3.event.preventDefault();
    
    // Read the input box and get the raw HTML node
    let inputElement = d3.select("#state");

    // Get the value property of the input box
    let inputValue = inputElement.property("value");

    // Filter datetime data from ufoSightings and assign it to filteredData
    let filteredData = data.filter(obj => obj.state === inputValue);
   
    // Creat table with filtered data
    buildTable(filteredData);
};

function runEnter_ctry() {

    // Prevent the input box from refreshing
    d3.event.preventDefault();
    
    // Read the input box and get the raw HTML node
    let inputElement = d3.select("#country");

    // Get the value property of the input box
    let inputValue = inputElement.property("value");

    // Filter datetime data from ufoSightings and assign it to filteredData
    let filteredData = data.filter(obj => obj.country === inputValue);
   
    // Creat table with filtered data
    buildTable(filteredData);
};

function runEnter_shp() {

    // Prevent the input box from refreshing
    d3.event.preventDefault();
    
    // Read the input box and get the raw HTML node
    let inputElement = d3.select("#shape");

    // Get the value property of the input box
    let inputValue = inputElement.property("value");

    // Filter datetime data from ufoSightings and assign it to filteredData
    let filteredData = data.filter(obj => obj.shape === inputValue);
   
    // Creat table with filtered data
    buildTable(filteredData);
};