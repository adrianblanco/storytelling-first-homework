import * as d3 from 'd3'
(function() {

/* global d3 */
//var width = 700,
//  height = 600;

// Create the SVG
//var svg = d3.select('#chart')
//  .append('svg')
//  .attr('width', width)
//  .attr('height', height)

// Replace the code above with this in order to see the axis

var margin = { top: 20, right: 10, bottom: 20, left: 30 }

var width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom

// You'll probably need to edit this one
var svg = d3.select("#chart10").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

// -------------

// Here are some scales for you // const because we are not going to change it
const xPositionScale = d3.scaleLinear().domain([0,20]).range([0, width]);
const yPositionScale = d3.scaleLinear().domain([0,20]).range([height, 0]); //always turn it in the opposite direction
const colorScale = d3.scaleOrdinal().range(["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae"]);

// Read in some external data. When we're done, run the function 'ready'
// the big difference between de v4 and d3 v5 is the way they read data. V4 .queue()
// change for d3.csv(require("./countries.csv"))
d3.csv(require("./eating-data.csv"))
  .then(ready)
  .catch(function(err) {
     console.log("Failed with", err)
  })


// This is 'ready':
// it receives datapoints, our newly-read-in data
function ready(datapoints) {
  console.log("Data is", datapoints);
  // d3 code goes here
      svg.selectAll('circle')
        .data(datapoints)
        .enter().append('circle')
        .attr('r', 10)
        //.attr('cx', function(d) {
        //  return xPositionScale(d.gdp_per_capita)
        //})
        .attr('cx', (d) => { // it is almost the same thing
          return xPositionScale(d.hamburgers)
        })
        .attr('cy', (d) => { // it is almost the same thing
          return yPositionScale(d.hotdogs)
        })
        .attr('fill', (d) => {
          return '#FFB6C1'
        })


  // Always cut and paste the code for the axes!

  var yAxis = d3.axisLeft(yPositionScale);
    svg.append("g")
      .attr("class", "axis y-axis")
      .call(yAxis)

  var xAxis = d3.axisBottom(xPositionScale)
    svg.append("g")
      .attr("class", "axis x-axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

}


})()

