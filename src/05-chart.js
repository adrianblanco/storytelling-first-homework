import * as d3 from 'd3'
(function() {

  var height = 200, width = 400;

  // This is weird compared to what we did 
  // in class, but just know that 'svg'
  // is the svg element and you can
  // do all the normal stuff with it
  var svg = d3.select("#chart5")
    .select("svg")
    .attr("height", height + 100)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(50, 25)")

  const xPositionScale = d3.scaleLinear().domain([0,20]).range([0, width]);
  const yPositionScale = d3.scaleLinear().domain([0,20]).range([height, 0]); //always turn it in the opposite direction
  const colorScale = d3.scaleOrdinal().range(["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae"]);

  var datapoints = [
    {"hotdogs":10,"hamburgers":10,"animal":"dog","name":"Stevie"},
    {"hotdogs":3,"hamburgers":3,"animal":"cat","name":"Nicholas"},
    {"hotdogs":2,"hamburgers":2,"animal":"cat","name":"Bubbletree"},
    {"hotdogs":10,"hamburgers":3,"animal":"cow","name":"Particle"},
    {"hotdogs":7,"hamburgers":5,"animal":"dog","name":"Jumpup"},
    {"hotdogs":4,"hamburgers":9,"animal":"dog","name":"Parlay"},
    {"hotdogs":3,"hamburgers":1,"animal":"cat","name":"Hio"}
  ]

  // Build your scales here
  const pointScale = d3.scalePoint()
    .domain(['Panda', 'Cat', 'Horse', 'Pig'])
    .range([0, width])

  const radiusScale = d3
    .scaleSqrt()
    .domain([0, 1000])
    .range([0, 500])

  // Add your circles and style them here
  
  svg.selectAll("circle")
    .data(datapoints)
    .enter().append("circle")
    .attr('cx', (d) => { // it is almost the same thing
      return xPositionScale(d.hamburgers)
    })
    .attr('cy', (height + 50) / 2)
    .attr('r', (d) => { // it is almost the same thing
      return radiusScale(d.hotdogs)
    })
    .attr('fill', (d) => {
      return colorScale(d.animal)
    })
    .attr('fill-opacity', (d) => {
      return 0.5
    })

})()