$(document).ready(function() {


    $.getJSON("../assets/data/us.json", function(us) {
        createMap.init(us);

    });


});

var createMap = {
    init: function(us){

    // var width = 1200,
    //     height = 900;

    var margin = {top:50, right: 80, bottom: 30, left: 30},
      width = 1200 - margin.left - margin.right,
      height = 900 - margin.top - margin.bottom;

    var projection = d3.geoAlbersUsa() .scale(1100)
                   // .translate( [width / 2, height / 2]);
    var path = d3.geoPath()
        .projection(projection);

    var svg = d3.select("#search-map").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)

    svg.append("path")
          .attr("class", "states")
          .datum(topojson.feature(us, us.objects.states))
          .attr("d", path);


  


    }
}
