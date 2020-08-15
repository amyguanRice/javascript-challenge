// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

// use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

function buildTable(tableData){

    tbody.html("")

    // Iterate through each object in the list
    tableData.forEach(({datetime,city,state,country,shape,durationMinutes,comments}) => {
    // tableData.forEach((datarow) => {
        // console.log(datarow)
        // Append one table row per object
        var row = tbody.append("tr");
        row.append("td").text(datetime);
        row.append("td").text(city);
        row.append("td").text(state);
        row.append("td").text(country);
        row.append("td").text(shape);
        row.append("td").text(durationMinutes);
        row.append("td").text(comments);
    
        // append one cell for the student and one cell for the grade
        // row.append("td").text(datarow.datetime);
        // row.append("td").text(datarow.city);
        // row.append("td").text(datarow.state);
        // row.append("td").text(datarow.country);
        // row.append("td").text(datarow.shape);
        // row.append("td").text(datarow.durationMinutes);
        // row.append("td").text(datarow.comments);
      });
};

buildTable(tableData);

// get a handle of the button
let button = d3.selectAll("#filter-btn");

// get a handle of the input field
let dateInputField = d3.select('#datetime');
let cityInputField = d3.select('#city');
let stateInputField = d3.select('#state');
let countryInputField = d3.select('#country');
let shapeInputField = d3.select('#shape');

// // Event handlers are just normal functions that can do anything you want
button.on("click", function() {

    const datetime = dateInputField.property('value');
    const city = cityInputField.property('value');
    const state = stateInputField.property('value');
    const country = countryInputField.property('value');
    const shape = shapeInputField.property('value');

    // filter the data first
    var filteredData = tableData.filter(row => row.datetime === datetime || row.city === city 
      || row.state === state|| row.country === country|| row.shape === shape);

    // var filteredData = tableData.filter(row => row.datetime === datetime && row.city === city 
    //    && row.state === state && row.country === country && row.shape === shape);

    console.log(filteredData)

    // clear all other input
    

    buildTable(filteredData)

  });
  