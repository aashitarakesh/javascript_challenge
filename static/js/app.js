
// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");
var reset = d3.select("#reset-btn")

// Select the form
var dateField = d3.select("#datetime");
var cityField = d3.select("#city");
var stateField = d3.select("#state");
var countryField = d3.select("#country");
var shapeField = d3.select("#shape");

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
dateField.on("submit",runEnter);
cityField.on("submit",runEnter);
stateField.on("submit",runEnter);
countryField.on("submit",runEnter);
shapeField.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

// Prevent the page from refreshing
    d3.event.preventDefault();

// Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");

  // Get the value property of the input element
  var dateValue = inputDate.property("value");
  var cityValue = inputCity.property("value").toLowerCase();
  var stateValue = inputState.property("value").toLowerCase();
  var countryValue = inputCountry.property("value").toLowerCase();
  var shapeValue = inputShape.property("value").toLowerCase();

  // console.log(dateValue);
  // console.log(cityValue);
//   console.log(tableData );

// use input to filter data by date

var filteredData = tableData .filter(info => (info.datetime === dateValue || !dateValue) && 
                                             (info.city === cityValue || !cityValue) &&
                                             (info.state === stateValue || !stateValue)&&
                                             (info.country === countryValue || !countryValue)&&
                                             (info.shape === shapeValue || !shapeValue));

  
  console.log(filteredData);

 // clear table before appending filtered data
 tbody.html("");

// Appending filtered data to table 

filteredData.forEach(ufoSighting =>{
    console.log(ufoSighting)
    var tr = tbody.append("tr")
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

createTable();

