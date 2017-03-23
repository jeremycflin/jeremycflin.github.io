$(document).ready(function() {

    $.getJSON("../assets/data/congress_info_115.json", function(data) {
        createTable.init(data);
        createCongressName.init(data);

    });

    $.getJSON("../assets/data/us.json", function(us) {
        createMap.init(us);

    });

});

var sanitizeNames = function(string){
    var theString = string.replace(/\./g,'').replace(/\s/g,'').toLowerCase()

    return theString
}

var createTable = {
    init: function(data){
        var selection = d3.select("#congress-member-info").select("tbody")
            

        var tr = selection.selectAll("tr")
            .data(data)
            .enter()
            .append("tr")
            .attr("id", function(d){
                  if(d["middle_name"]){
                    var string = d["first_name"] + d["middle_name"]+d["last_name"]

                    return sanitizeNames(string)
                }else{
                    var string = d["first_name"] + d["last_name"]
                    return sanitizeNames(string)
                }
            })
            .attr("class",function(d){
                if(d["district"] ){
                    return "tablelRow house-table"
                }else{
                    return "tablelRow senate-table"
                }
            })
  

        var congress_photo = tr.append("td")
                                .classed("congress_photo_td",true)

        var congress_div = congress_photo.append("div")
            .attr("class", function(d){
                if(d["party"] == "R" ){
                    return "congress_photo_div" + " " + "r-img"
                }else{
                     return "congress_photo_div" + " " + "d-img"
                }
            })
            // .classed("congress_photo_div", true)

        congress_div.append("img")
            .attr("src",function(d) {  
                return 'https://theunitedstates.io/images/congress/225x275/' + d["id"] +'.jpg'
            })
            .attr("class", "g-congress-img")



        tr.append("td")
            .text(function(d) {  
                if(d["middle_name"]){
                    return d["first_name"] + " " + d["middle_name"]+ " "+d["last_name"] 
                }else{
                    return d["first_name"] + " " + d["last_name"] 
                }
                
            })
            .attr("class", "g-congress-name")


        tr.append("td")
            .text(function(d) {  
                return d["party"]
            })
            .attr("class", "g-congress-party")

        tr.append("td")
            .text(function(d){
                if(d["district"] ){
                    return d["state"] + ", District " + d["district"] 
                }else{
                    return d["state"]
                }

            })
            .attr("class", "g-congress-state")

        var social = tr.append("td").classed("social", true)



        var facebookLink = social.append("a")
          .classed("url",true)
          .attr("target","_blank")
          .style("margin", 20)
          .attr("href",function(d) { return "https://facebook.com/" + d["facebook_account"]; })
          // .style("margin", 20)
          // .attr("margin", 20)

        var twitterLink = social.append("a")
          .classed("url socialTwitter",true)
          .attr("target","_blank")
          .attr("href",function(d) { return "https://twitter.com/" + d["twitter_account"]; })


        facebookLink.append("i")
            .classed("fa fa-facebook-square",true)
            .style("color", "white")
            .attr("aria-hidden", true)
            .style("padding", 20)


        twitterLink.append("i")
            .classed("fa fa-twitter-square",true)
            .style("color", "white")
            .attr("aria-hidden", true)

 





        $('#congress-member-info > tbody > tr')
            .closest('tr')
            .after("<tr class='hideableRow'><td class='lowerRow'></td><td class='expandable lowerRow'></td></tr>")

        $(".expandable").closest('td').attr("colspan", 4)

 
       
   
        // function checkChamber(){

        //     if ($(this).closest("tr").hasClass("senate-table")){
        //         $(this).addClass("senate-table");
        //             }else{
        //                $(this).addClass("house-table");
        //         }
        //     console.log($(this).prevAll())
        // }
            
    
   
        // $(".hideableRow").each(checkChamber())



        $(".expandable").append("<p class='web'><a class='weblink'>Website:</a></p><p class='phone'>Phone:</p>")
        // $(".expandable > p").addClass("hide")

        $(".tablelRow").click(function(event) {
                  
                $(this).next().find('p').toggleClass("hide");
        
            });

        d3.selectAll(".phone")
            .data(data)
            .html(function(d){
                return "Phone: " + d["phone"]
            })

        d3.selectAll(".web")
            .data(data)
            .html(function(d){
                return "Website: " +  d["url"]
            })




        function expand() {
            var animation_height = $(window).innerHeight() * 0.8;
            var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

            $('.tablelRow').each(function() {
                
                var objectTop = $(this).offset().top;
                var windowBottom = $(window).scrollTop() + $(window).innerHeight();
                
                if ( objectTop < windowBottom ) {
                    if ( objectTop < windowBottom - animation_height ) {
                        $(this).next().find('p').removeClass("hide");
                     

                    } else {
                         $(this).next().find('p').addClass("hide")
                    }
                } else {
                    $(this).next().find('p').addClass("hide")
                }
            });
        }

        // expand();
        $(window).scroll(function() {expand();});


    

   


        var rowLimit = 20;
        $('table > tbody > tr:gt(' + (19) + ')').addClass("hide")
        

        $.fn.extend({
            toggleText: function(a, b){
                return this.text(this.text() == a ? b : a);
            }
        });


        function showMore(rowLimit){
            $('.more-entries').click(function() {
                $(".more-entries").toggleText('see less', 'see more').toggleClass("filter-enabled")

                // $(".more-entries").addClass("hide")

                // if has class selected 
                // if(){

                // }

                $('table > tbody > tr:gt(' + (rowLimit - 1) + ')').toggleClass("hide")

                // if not have class selected

                // $('.selected').toggleClass("hide")
                d3.selectAll(".selected").classed('hide',false)
            }
                )}


        showMore(rowLimit)

        function chamberFilter(){
            $(".filter-senate").click(function(){
                // $(".senate-table").addClass("selected")
                d3.selectAll(".senate-table").classed('hide',false)
                d3.selectAll(".house-table").classed('hide',true)
                // d3.selectAll(".house-table").classed('hide',true)
                d3.selectAll(".filter-senat").classed('filter-enabled"',true)
                d3.selectAll(".filter-house").classed('filter-enabled"',false)
                // $(".senate-table").css("display","unset")
                // $(".filter-senate").toggleClass("filter-enabled")
            })

            $(".filter-house").click(function(){
       
                // $(".senate-table").addClass("hide")
                d3.selectAll(".senate-table").classed('hide',true)
                d3.selectAll(".house-table").classed('hide',false)
                d3.selectAll(".filter-senat").classed('filter-enabled"',false)
                d3.selectAll(".filter-house").classed('filter-enabled"',true)
                // $(".filter-house").toggleClass("filter-enabled")
            })

        }

        chamberFilter()


        



    }
} 

var createCongressName ={
    init: function(data){
        var nameDropDown = d3.select("#name-search-dropdown")
        var selectMenu = $("#name-search-dropdown").find('select')

        nameDropDown.select("select")
            .selectAll("option")
            .data(data)
            .enter().append("option")
            .attr("value", function(d){
                  if(d["middle_name"]){
                    var string = d["first_name"] + d["middle_name"]+d["last_name"]

                    return sanitizeNames(string)
                }else{
                    var string = d["first_name"] + d["last_name"]
                    return sanitizeNames(string)
                }
            })
            .text(function(d) {  
                    if(d["middle_name"]){
                        return d["first_name"] + " " + d["middle_name"]+ " "+d["last_name"] 
                    }else{
                        return d["first_name"] + " " + d["last_name"] 
                    }
                    
                })
        selectMenu.chosen({
            // 'width' : 'auto'
        }).change(function(){
            var selected = $(this).val();
            $("#"+selected).siblings().addClass("hide");

            // $("#"+selected).css("background-color","blue")
        })
    }
}


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






