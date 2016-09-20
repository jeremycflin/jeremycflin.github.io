function drawFirstCompare(){


  var data = {name : 'LONG BEACH LEGAL',type : 'SETTLEMENTS AND JUDGMENTS', totalOwed: 36285628 ,collected:2706856};

  var container = d3.select('#g-firstCompare');

  var margin = {top:80, right: 0, bottom: 0, left: 40},
  width = 400 - margin.left - margin.right,
  height = 350 - margin.top - margin.bottom;

  var smallLength = Math.sqrt(data.collected)/18;
  var bigLength = Math.sqrt(smallLength*smallLength*7.5)

  var g = container
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append('g')
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  g.append('defs')
    .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "-10 -10 20 20")
      .attr("refX", 0)
      .attr("refY", 0)
      .attr("markerWidth", 20)
      .attr("markerHeight", 20)
      .attr("stroke-width", 1)
      .attr("orient", "auto")
    .append("polyline")
      .attr("stroke-linejoin", "bevel")
      .attr("points", "-6.75,-6.75 0,0 -6.75,6.75");

  var bigSquaredotted= g.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",bigLength)
    .attr("height",bigLength)
    .style("fill","none")
    .style("stroke-dasharray","5, 5")
    .style("stroke","black")
    .style("stroke-width",1.5)

  var swoopy = swoopyArrow()
  .angle(Math.PI/4)
  .x(function(d) { return d[0]; })
  .y(function(d) { return d[1]; });

  g.append("path")
    .attr('marker-end', 'url(#arrowhead)')
    .datum([[250,50],[270,70]])
    .attr("d", swoopy);

  g.append("path")
    .attr("class","paid")
    .attr('marker-end', 'url(#arrowhead)')
    .datum([[10,5],[30,-30]])
    .attr("d", swoopy)
    .attr("class","paid")
    // .style("stroke","#FF0076")
    .style("opacity",0)

  g.append("text")
    .attr("x",width/1.4)
    .attr("y",height/2.8)
    .text("Total owed")
    .style("font-family","roboto")
    .style("font-size","13px")
    .attr("class","smallChartLabel")

  g.append("text")
    .attr("x",width/1.4)
    .attr("y",height/2.3)
    .text("$36285628")
    .style("font-family","roboto")
    .style("font-size","13px")
    .attr("class","smallChartLabel")

  

  g.append("text")
    .attr("x",0)
    .attr("y",-60)
    .text("Total paid")
    .style("font-family","roboto")
    .style("font-size","13px")
    .attr("class","paid")
    .style("opacity",0)

  g.append("text")
    .attr("x",0)
    .attr("y",-40)
    .text("$2706856")
    .style("font-family","roboto")
    .style("font-size","13px")
    .attr("class","paid")
    .style("opacity",0)

  var mySquare= g.append("rect")
    .attr("x",0)
    .attr("y",0)

  mySquare
    .attr("width",bigLength)
    .attr("height",bigLength)
    .attr("id","lbLegal")
    .style("fill","#D3D3D3")

  g.append("text")
    .attr("x",width*0.17)
    .attr("y",height/2.15)
    .text("TAP TO REVEAL")
    .style("font-family","roboto")
    .attr("class","smallChartLabel")
    .attr("id","reveal")

  g.append("text")
    .attr("x",width*0.03)
    .attr("y",height/2.18)
    .text("That's 7.5% of total payment")
    .style("font-family","roboto")
    .attr("class","paid")
    .style("opacity",0)

  g.append("rect")
    .attr({"class": "overlay" , "width": width + margin.left + margin.right  , "height": height + margin.top + margin.bottom})
    .style("opacity",0)
    .on("click",update)

  function update(){
    d3.select("#lbLegal").transition()
    .duration(2000).ease("linear")
    .attr({
      'width': smallLength,
      'height': smallLength
    })
    .style("fill","#FF0076")

    d3.selectAll(".paid")
      .transition()
      .duration(500)
      .delay(300)
      .style("opacity",1)

    d3.select("#touchOne")
      .transition()
      .duration(500)
      .style("opacity",0)

    d3.select("#reveal")
      .transition()
      .duration(500)
      .style("opacity",0)

  }
    



// function update(){ 

//     var mySquare= g.append("rect")
//       .attr("x",0)
//       .attr("y",0)

//     repeat();
    
//     function repeat() {
//     mySquare
//       .attr("width",bigLength)
//       .attr("height",bigLength)
//       .attr("id","lbLegal")
//       .style("fill","#D3D3D3")
//     .transition()
//     .duration(8000)
//     .ease("linear")
//     .attr({
//         'width': smallLength,
//         'height': smallLength
//     })
//     .style("fill","#FF0076")
//     // .each("end", repeat);
//   };

//   // var smallSquaredotted= g.append("rect")
//   // .attr("x",0)
//   // .attr("y",0)
//   // .attr("width",smallLength)
//   // .attr("height",smallLength)
//   // .style("fill","none")
//   // .style("stroke-dasharray","5, 5")
//   // .style("stroke","black")
//   // .style("stroke-width",1.5)
// };



// update();


}

function drawSecondCompare(){


  // var data = {name : 'LONG BEACH LEGAL',type : 'SETTLEMENTS AND JUDGMENTS', totalOwed: [30.1500,-97.7500],collected:2442213};

  var container = d3.select('#g-secondCompare');

  var margin = {top:80, right: 0, bottom: 0, left: 40},
  width = 400 - margin.left - margin.right,
  height = 350 - margin.top - margin.bottom;

  var total = 250;
  var hispanic = Math.sqrt(total*total*0.94);
  var foreign = Math.sqrt(total*total*0.89);
  var highschool = Math.sqrt(total*total*0.7);

  var g = container
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append('g')
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  g.append('defs')
    .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "-10 -10 20 20")
      .attr("refX", 0)
      .attr("refY", 0)
      .attr("markerWidth", 20)
      .attr("markerHeight", 20)
      .attr("stroke-width", 1)
      .attr("orient", "auto")
    .append("polyline")
      .attr("stroke-linejoin", "bevel")
      .attr("points", "-6.75,-6.75 0,0 -6.75,6.75");

  var bigSquaredotted= g.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",total)
    .attr("height",total)
    .style("fill","none")
    .style("stroke-dasharray","5, 5")
    .style("stroke","black")
    .style("stroke-width",1.5)

  var hispanicdotted= g.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",hispanic)
    .attr("height",hispanic)
    .style("fill","rgba(255,0,118,.3)")
    // .style("stroke-dasharray","5, 5")
    // .style("stroke","black")
    // .style("stroke-width",1.5)

  var foreigndotted= g.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",foreign)
    .attr("height",foreign)
    .style("fill","rgba(255,0,118,.6)")
    // .style("stroke-dasharray","5, 5")
    // .style("stroke","black")
    // .style("stroke-width",1.5)





  var swoopy = swoopyArrow()
  .angle(Math.PI/4)
  .x(function(d) { return d[0]; })
  .y(function(d) { return d[1]; });

  g.append("path")
    .attr('marker-end', 'url(#arrowhead)')
    .datum([[250,50],[270,70]])
    .attr("d", swoopy);

  g.append("path")
    .attr("class","paid")
    .attr('marker-end', 'url(#arrowhead)')
    .datum([[10,5],[30,-30]])
    .attr("d", swoopy)
    .attr("class","highschoolLabel")
    .style("opacity",0)
    
  g.append("path")
    .attr("class","paid")
    .attr('marker-end', 'url(#arrowhead)')
    .datum([[220,0],[215,-30]])
    .attr("d", swoopy)
    .attr("class","foreignLabel")
    .style("opacity",0)

  g.append("path")
    .attr("class","paid")
    .attr('marker-end', 'url(#arrowhead)')
    .datum([[239,0],[250,-40]])
    .attr("d", swoopy)
    .attr("class","hispanicLabel")
    .style("opacity",0)


  g.append("text")
    .attr("x",width/1.4)
    .attr("y",height/2.8)
    .text("Total drivers")
    .style("font-family","roboto")
    .style("font-size","13px")
    .attr("class","smallChartLabel")

  g.append("text")
    .attr("x",width/1.4)
    .attr("y",-60)
    .text("Hispanic")
    .style("font-family","roboto")
    .style("font-size","13px")
    .attr("class","hispanicLabel")
    .style("opacity",0)

  g.append("text")
    .attr("x",width/1.4)
    .attr("y",-40)
    .text("94%")
    .style("font-family","roboto")
    .style("font-size","13px")
    .attr("class","hispanicLabel")
    .style("opacity",0)

  g.append("text")
    .attr("x",width/1.9)
    .attr("y",-60)
    .text("Foreign")
    .style("font-family","roboto")
    .style("font-size","13px")
    .attr("class","foreignLabel")
    .style("opacity",0)

  g.append("text")
    .attr("x",width/1.9)
    .attr("y",-40)
    .text("89%")
    .style("font-family","roboto")
    .style("font-size","13px")
    .attr("class","foreignLabel")
    .style("opacity",0)

  g.append("text")
    .attr("x",0)
    .attr("y",-60)
    .text("Have only high school degree")
    .style("font-family","roboto")
    .style("font-size","13px")
    .attr("class","highschoolLabel")
    .style("opacity",0)

  g.append("text")
    .attr("x",0)
    .attr("y",-40)
    .text("70%")
    .style("font-family","roboto")
    .style("font-size","13px")
    .attr("class","highschoolLabel")
    .style("opacity",0)

  // g.append("text")
  //   .attr("x",width/1.4)
  //   .attr("y",height/2.3)
  //   .text("$tktktk")
  //   .style("font-family","roboto")
  //   .style("font-size","13px")
  //   .attr("class","smallChartLabel")

  

  // g.append("text")
  //   .attr("x",0)
  //   .attr("y",-60)
  //   .text("Total paid")
  //   .style("font-family","roboto")
  //   .style("font-size","13px")
  //   .attr("class","paid")
  //   .style("opacity",0)

  // g.append("text")
  //   .attr("x",0)
  //   .attr("y",-40)
  //   .text("$2442213")
  //   .style("font-family","roboto")
  //   .style("font-size","13px")
  //   .attr("class","paid")
  //   .style("opacity",0)

  var mySquare= g.append("rect")
    .attr("x",0)
    .attr("y",0)

  mySquare
    .attr("width",total)
    .attr("height",total)
    .attr("id","Alldrivers")
    .style("fill","#D3D3D3")

  g.append("text")
    .attr("x",width*0.17)
    .attr("y",height/2.15)
    .text("TAP TO REVEAL")
    .style("font-family","roboto")
    .attr("class","smallChartLabel")
    .attr("id","revealTwo")

  // g.append("text")
  //   .attr("x",width*0.03)
  //   .attr("y",height/2.18)
  //   .text("That's 10% of total payment")
  //   .style("font-family","roboto")
  //   .attr("class","paid")
  //   .style("opacity",0)

  g.append("rect")
    .attr({"class": "overlay" , "width": width + margin.left + margin.right  , "height": height + margin.top + margin.bottom})
    .style("opacity",0)
    .on("click",update)

  function update(){

      d3.select("#Alldrivers").transition()
        .duration(2000).ease("linear")
        .attr({
          'width': highschool,
          'height': highschool
        })
        .style("fill","#FF0076")

   


    d3.selectAll(".hispanicLabel")
      .transition()
      .duration(500)
      .delay(300)
      .style("opacity",1)

    d3.selectAll(".foreignLabel")
      .transition()
      .duration(1000)
      .delay(300)
      .style("opacity",1)

    d3.selectAll(".highschoolLabel")
      .transition()
      .duration(2500)
      .delay(300)
      .style("opacity",1)

    d3.select("#touchTwo")
      .transition()
      .duration(500)
      .style("opacity",0)

    d3.select("#revealTwo")
      .transition()
      .duration(500)
      .style("opacity",0)



  }

}


function drawMultiLine(){

  var container = d3.select('#g-multiline');

  var margin = {top:10, right: 80, bottom: 30, left: 30},
  width = 300 - margin.left - margin.right,
  height = 550 - margin.top - margin.bottom;

  var parseYear = d3.time.format("%Y").parse;

  var x = d3.time.scale().range([0, width]);
  var y = d3.scale.linear().range([height, 0]);

  var xAxis = d3.svg.axis().scale(x)
      .orient("bottom")
      .ticks(2)

  var yAxis = d3.svg.axis().scale(y)
      .orient("right").ticks(4)

  var valueline = d3.svg.line()
    .interpolate("step-before")
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Value); });

  var g = container
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append('g')
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  function make_x_axis() { return d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(5)
  }
  function make_y_axis() { return d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10)
  }

  var voronoi = d3.geom.voronoi()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Value); })
    .clipExtent([[-margin.left, -margin.top], [width + margin.right, height + margin.bottom]]);

  d3.csv("../../data/container_data.csv", function(error,data){
    if (error) throw error; 

    data.forEach(function(d) {
      d.Year = parseYear(d.Year);
      d.Value = +d.Value;
    });

    x.domain(d3.extent(data, function(d) { return d.Year; }));
    y.domain([0, d3.max(data, function(d) { return d.Value; })]); 

    g.append("g")
      .attr("class", "xgrid")
      .attr("transform", "translate(0," + height + ")")
      .call(make_x_axis()
          .tickSize(-height, 0, 0)
          
      )
    g.append("g")
      .attr("class", "ygrid")
      .call(make_y_axis()
          .tickSize(-width, 0, 0)
          .ticks(5)
          .tickFormat(d3.format("s"))
      )

    g.append("g")         // Add the X Axis
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    g.append("g")         // Add the Y Axis
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("y", 80)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Tons");


     // Nest the entries by port name
    var dataNest = d3.nest()
        .key(function(d){return d["U.S. Custom Ports"]})
        .entries(data);
    
    // g.append("rect")
    //       .attr("x", 110)
    //       .attr("y", 0)
    //       .attr("width", "5%")
    //       .attr("height", height)
    //       .attr("class","recession")

    var barWidth = x(new Date("2007")) - x(new Date("2006"));

    g.append("rect")
      .attr("x", x(new Date("2006")))
      .attr("y", 0)
      .attr("width", barWidth)
      .attr("height", height)
      .attr("class", "recession")

    g.append("text")
      .attr("x",width/1.5)
      .attr("y",height/2.1)
      .text("Great Recession")
      .attr("class","ports")

    g.append("line")
      .style("stroke", "black")  // colour the line
      .attr("x1", 125)     // x position of the first end of the line
      .attr("y1", 238)      // y position of the first end of the line
      .attr("x2", 115)     // x position of the second end of the line
      .attr("y2", 238);   

    dataNest
      .filter(function(d){return d.key!=="Los Angeles, CA" || d.key!=="Long Beach, CA"})
      .forEach(function(d) {
        g.append("path")
          .attr("class", "line")
          .attr("d", valueline(d.values))
          .attr("id", d.key.replace(/, /,''));
    });

    // var focus = g.append("g")
    //   .attr("class", "focus")
    //   .attr("transform", "translate(-100,-100)");
 
    // focus.append("circle")
    //   .attr("r", 4);

    var voronoiGroup = g.append("g")
      .attr("class", "voronoi");

    var flatData = [];

    dataNest.filter(function(d){return d.key!=="New York, NY"})
    .forEach(function(d){
      flatData = flatData.concat(d.values);
    });
      
    voronoiGroup.selectAll("path")
      .data(voronoi(flatData))
      .enter().append("path")
      .attr("d", function(d) { if (d) return "M" + d.join("L") + "Z";})
      .datum(function(d) { if (d) return d.point;})
       .on("mouseover", function(d){
            var key = d["U.S. Custom Ports"].replace(/, /,'');
            d3.select('#' + key)
              .style("stroke", "black")
              .style("stroke-width",2)
          })
          .on("mouseout", function(d){
            var key = d["U.S. Custom Ports"].replace(/, /,'');
            d3.select('#' + key)
              .style("stroke", "#ccc")
              .style("stroke-width",.8)
          })
          
    dataNest
      .filter(function(d){return d.key=="New York, NY"})
      .forEach(function(d) {
        g.append("path")
          .attr("class", "nonLA")
          .attr("d", valueline(d.values))

        g.append("circle")
          .attr("r",3.5)
          .attr("class", "nonLAcir")
          .attr("cx",x(d.values[17].Year))
          .attr("cy",y(d.values[17].Value))

        var name = d.key.split(",")

         g.append("text")
          .attr("x",x(d.values[17].Year))
          .attr("y",y(d.values[17].Value - 1500000))
          .text(name[0])
          .attr("class","ports")
    });


    dataNest
      .filter(function(d){return d.key=="Long Beach, CA" || d.key=="Los Angeles, CA"})
      .forEach(function(d) {
        g.append("path")
          .attr("class", "LA line")
          .attr("d", valueline(d.values))

        g.append("circle")
          .attr("r",3.5)
          .style("fill","#FF0076")
          .attr("cx",x(d.values[17].Year))
          .attr("cy",y(d.values[17].Value))


        var name = d.key.split(",")

         g.append("text")
          .attr("x",x(d.values[17].Year))
          .attr("y",y(d.values[17].Value + 600000))
          .text(name[0])
          .attr("class","ports LAports")


      });  

  })
}

function drawSmallMultiple(){

  var container = d3.select('#g-smallMultiple');

  var margin = {top:40, right: 10, bottom: 20, left: 30},
  width = 110 - margin.left - margin.right,
  height = 150 - margin.top - margin.bottom;

 

  var parseYear = d3.time.format("%Y").parse;


  var x = d3.time.scale().range([0, width]);
  var y = d3.scale.linear().range([height, 0]);

  var xAxis = d3.svg.axis().scale(x)
      .orient("bottom")
      .ticks(2)

  var yAxis = d3.svg.axis().scale(y)
      .orient("right").ticks(4)

  var valueline = d3.svg.line()
    .interpolate("step-before")
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Value); });


  function make_x_axis() { return d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(2)
  }
  function make_y_axis() { return d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(2)
  }

  d3.csv("../../data/container_data.csv", function(error,data){
    if (error) throw error; 

    data.forEach(function(d) {
      d.Year = parseYear(d.Year);
      d.Value = +d.Value;

    });

    var dataNest = d3.nest()
        .key(function(d){return d["U.S. Custom Ports"]})
        .entries(data);

    x.domain(d3.extent(data, function(d) { return d.Year; }));
    y.domain([0, d3.max(data, function(d) { return d.Value; })]);

    var dataMapped = dataNest.map(function(d){return d.key});

   container
      .selectAll(".g-all-maps")
      .data(dataMapped)
      .enter()
      .append('div')
      .attr('class', 'g-container')
      .each(render);


    function render(x){
      var container = d3.select(this);

      var g = container
        .append('div').attr('class', 'small-container')
        .append("svg")
        // .style("background-color","grey")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append('g')
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      g.append("g")
      .attr("class", "xgrid")
      .attr("transform", "translate(0," + height + ")")
      .call(make_x_axis()
          .tickSize(-height, 0, 0)     
      )


    // g.append("g")
    //   .attr("class", "ygrid")
    //   .call(make_y_axis()
    //       .tickSize(-width, 0, 0)
    //       .ticks(2)
    //       .tickFormat(d3.format("s"))
    //   )

    // g.append("g")         // Add the X Axis
    //   .attr("class", "x axis")
    //   .attr("transform", "translate(0," + height + ")")
    //   .call(xAxis);

    // g.append("g")         // Add the Y Axis
    //   .attr("class", "y axis")
    //   .call(yAxis)
    //   .append("text")
    //   .attr("y", 25)
    //   .attr("dy", ".71em")
    //   .style("text-anchor", "end")
    //   .text("Tons");
     
          // console.log(x)
          // console.log(data)

      g.append("path")
        .attr("class", "line")
        .attr("d", function(d){return valueline(data.filter(function(d){
          if(d["U.S. Custom Ports"] == "Los Angeles, CA"){return d;}
              }))})

      g.append("path")
        .attr("class", "highlightLine")
        .attr("d", function(d){return valueline(data.filter(function(d){
          if(d["U.S. Custom Ports"] == x){return console.log(x),d;}
              }))})

      // data.filter(function(d){
      //     if(d["U.S. Custom Ports"] == x){return d;}
      //         })

  
  
    }



  })
}




// drawSmallMultiple();
drawFirstCompare();
drawSecondCompare();
drawMultiLine();

