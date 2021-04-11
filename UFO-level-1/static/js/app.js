// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");
var reset = d3.select("#reset-btn")

// Select the form
var form = d3.select("#datetime");

// Populate the table using UFO dataset
function createTable() {
  tableData.forEach(date =>{
  console.log(date)
  var tr = tbody.append("tr");
  Object.entries(date).forEach(([key,value])=> {
      console.log(`key = ${key} value=${value}`)
      tr.append("td").text(value)
  });
     
});
d3.select("table").attr("class"," table table-striped")
};

// Create event handlers 
button.on("click", runEnter);
reset.on("click", resetSearch);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

// Prevent the page from refreshing
    d3.event.preventDefault();


// Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
//   console.log(tableData );

// use input to filter data by date

  var filteredData = tableData .filter(date => date.datetime === inputValue);

//   console.log(filteredData);

 // clear table before appending filtered data
 tbody.html("");

// Appending filtered data to table 

filteredData.forEach(ufoSighting =>{
    console.log(ufoSighting)
    var tr = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key,value])=> {
        console.log(`key = ${key} value=${value}`)
        tr.append("td").text(value)
    });
       
});

};

// Create the function to reset search values and table
function resetSearch() {
  document.getElementById("myForm").reset();  
  // render table
  createTable();
};
// Render UFO table for the first time on page load
createTable();