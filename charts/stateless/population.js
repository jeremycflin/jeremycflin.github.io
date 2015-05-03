
// Set tooltips
var tip2 = d3.tip()
            .attr('class', 'd3-tip-population')
            .offset([-10, 0])
            .html(function(d) {
              // return d.name + " has <br>" + d.value + " stateless people";
              return "<strong>Country: </strong><span class='details'>" + d.properties.formal_en + "<br></span>" + "<strong>Population: </strong><span class='details'>" + d.properties.pop_est +"</span>";
            })

// Set margin, with and height
var margin2 = {top: 20, right: 20, bottom: 30, left: 30},
            width = 100 - margin2.left - margin2.right,
            height = 600 - margin2.top - margin2.bottom; 

var color = d3.scale.threshold()
    .domain([10000,100000,500000,1000000,5000000,10000000,50000000,100000000,500000000,1500000000])
    .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)","rgb(3,19,43)"]); 

// Set projection 
var projection_pop = d3.geo.mercator()
                   .scale(1)
                   .translate( [width / 2, height / 1.5]);

// Set path
var path2 = d3.geo.path().projection(projection_pop);


// Setsvg and then give it a class called map
var svg2 = d3.select("#population")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append('g')
            .attr('class', 'map2');

svg2.call(tip2);


d3.json("jcountries.topojson", function(data){

      // Binding geodata
var map2 = svg2.selectAll('path')
         .data(topojson.feature(data, data.objects.countries).features)
         .enter()
         .append('path')
         .attr('d', path)
         .style('fill', function(d) { return color(d.properties.pop_est); })
         .style('opacity','0.8')
         .style('stroke', 'white')
         .style('stroke-width', 0.3)
         .on('mouseover',function(d){
          tip2.show(d);

          d3.select(this)
            .style("opacity", 1)
            .style("stroke","white")
            .style("stroke-width",3);
        })
        .on('mouseout', function(d){
          tip2.hide(d);

          d3.select(this)
            .style("opacity", 0.8)
            .style("stroke","white")
            .style("stroke-width",0.3);
        });

//  svg.append("path")
// .datum(topojson.mesh(topojson.features, function(a, b) { return a.id !== b.id; }))
// .attr("class", "names")
// .attr("d", path);                     
});



 