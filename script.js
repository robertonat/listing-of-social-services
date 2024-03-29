
/*This code was originally found at this tutorial https://levelup.gitconnected.com/building-a-simple-website-that-outputs-results-from-a-csv-using-users-input-bfcb782ced45
Small alterations were made for the creation of this website
*/
d3.csv("final.csv").then(function (data) {
var resources = data;
var button = d3.select("#button");
var form = d3.select("#form");
button.on("click", runEnter);
form.on("submit", runEnter);

// Defining the function
function runEnter() {

// This line of code selects the <tbody> from the html and clears it. If this is not used, then the results would appear on top of the previous result.
d3.select("tbody").html("")

// This code is needed to prevent the page from reloading.
d3.event.preventDefault();

// This code will get the user's input from what the user will type in the html <input> since we assigned it the "user-input" id. It will get the value and store it in our inputValue variable
var inputValue = d3.select("#user-input").property("value");

// This code will filter the movies looking at the actors column. It will store the values when there is a match from the text sequence the user entered and the text from our actors column from the CSV data.
var filteredResources = resources.filter(resources => resources.NTA.includes(inputValue));

// Once I had all the values in my output variable, all I needed was to loop through them and add them to the table one by one. This was done using d3, where I inserted the value for each one of the columns I wanted using the necessary html to fit each table row.
for (var i = 0; i < filteredResources.length; i++) {
d3.select("tbody").insert("tr").html(
  "<td>" + (filteredResources[i]['NTA'])+"</a>"+"</td>" +
  "<td>" + (filteredResources[i]['boro'])+"</td>" +
  "<td>" + (filteredResources[i]['zip'])+"</td>" +
  "<td>" + (filteredResources[i]['address'])+"</td>" +
  "<td>" + (filteredResources[i]['phone'])+"</td>" +
  "<td>" + (filteredResources[i]['Additional information'])+"</td>" +
  "<td>" + (filteredResources[i]['Tag'])+"</td>" +
  "<td>" + (filteredResources[i]['Source'])+"</td" ) }
};
});
