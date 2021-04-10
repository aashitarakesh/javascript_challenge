// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
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

// Get a reference to the table body
var tbody = d3.select("tbody");

 // clear table before appending filtered data
 tbody.html("");

// Appending filtered data to table 

filteredData.forEach(date =>{
    console.log(date)
    var tr = tbody.append("tr")
    Object.entries(date).forEach(([key,value])=> {
        console.log(`key = ${key} value=${value}`)
        tr.append("td").text(value)
    })
       
})
d3.select("table").attr("class"," table table-striped")

};