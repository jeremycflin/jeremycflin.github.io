$(document).ready(function() {

    $.getJSON("../assets/data/congress_info_115.json", function(data) {
        createTable.init(data);
        createCongressName.init(data);
        createSparkCharts.init(data);

    });

    // $.getJSON("../assets/data/us.json", function(us) {
    //     createMap.init(us);

    // });
    // var url = '../assets/data/congress_info_115.json';
    // var url_wind = '../assets/data/us.json';

    // $.when(
    //     $.getJSON(url),
    //     $.getJSON(url_wind)
    // ).done(function(data, us) {
    //     createTable.init(data);
    //     createCongressName.init(data);
    //     createMap.init(us);

    // });
    chamberFilter()
    var rowLimit = 20;
    showMore(rowLimit)

});

var sanitizeNames = function(string){
    var theString = string.replace(/\./g,'').replace(/\s/g,'').toLowerCase()

    return theString
}




var createTable = {
    init: function(data){
        var selection = d3.select("#congress-member-info").select("tbody")
            
        //buidling table
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


        //buidling hidable rows

        $('#congress-member-info > tbody > tr')
            .closest('tr')
            .after("<tr class='hideableRow'><td class='lowerRow'></td><td class='expandable lowerRow'></td></tr>")

        //passing in data
        d3.selectAll(".hideableRow")
            .data(data)
            .attr("class", function(d){
                  if(d["middle_name"] && d["district"]){
                    var string = d["first_name"] + d["middle_name"]+ d["last_name"]

                    return "hideableRow house-table contactInfo" + sanitizeNames(string)
                }else if (d["middle_name"] && d["district"] == "undefined"){
                    var string = d["first_name"] + d["middle_name"] +d ["last_name"]

                    return "hideableRow senate-table contactInfo" + sanitizeNames(string)

                }else if((d["middle_name"] == null &&  d["district"])||(d["middle_name"] == "" &&  d["district"])){
                    var string = d["first_name"] + d["last_name"]

                    return "hideableRow house-table contactInfo" + sanitizeNames(string)
                  
                }
                else if((d["middle_name"] == null &&  d["district"] == "undefined") || (d["middle_name"] == null &&  d["district"] == null)){
                    var string = d["first_name"] + d["last_name"]

                    return "hideableRow senate-table contactInfo" + sanitizeNames(string)
                  
                }

                else{
                    var string = d["first_name"]+ d["middle_name"]  + d["last_name"]
                    return "hideableRow senate-table contactInfo" + sanitizeNames(string)
                }
            })




        $(".expandable").closest('td').attr("colspan", 4)




        $(".expandable").append("<p class='web'><a class='weblink'>Website:</a></p><p class='phone'>Phone:</p>")


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


        expand();



    

   


       
        $('table > tbody > tr:gt(' + (19) + ')').addClass("hide")
        

        // $.fn.extend({
        //     toggleText: function(a, b){
        //         return this.text(this.text() == a ? b : a);
        //     }
        // });


        





    }
} 
var chamberFilter = function (){
            $(".filter-senate").click(function(){

                $(".senate-table").removeClass("hide")
                $(".house-table").addClass("hide")


          
                d3.selectAll(".filter-senate").classed('filter-enabled',true)
                d3.selectAll(".filter-house").classed('filter-enabled',false)
           
               
                $(".more-entries").addClass("hide")
                $(".reset-search").addClass("transparent")
                
                chosenSelectionReset()
                

                })

            $(".filter-house").click(function(){
       
                // $(".senate-table").addClass("hide")
                $(".house-table").removeClass("hide")
                $(".senate-table").addClass("hide")
                // d3.selectAll(".senate-table").classed('hide',true)
                // d3.selectAll(".house-table").classed('hide',false)


                d3.selectAll(".filter-senate").classed('filter-enabled',false)
                d3.selectAll(".filter-house").classed('filter-enabled',true)

                $(".more-entries").addClass("hide")

                $(".reset-search").addClass("transparent")

                chosenSelectionReset()
              
                // $(".filter-house").toggleClass("filter-enabled")
            })

        }

var chosenSelectionReset = function(){
    var theSelect = $("#name-search-dropdown").find('select')

    theSelect.val('').addClass("transparent")
    theSelect.trigger("chosen:updated")
}

var expand = function(){
    $(".tablelRow").click(function(event) {             
            $(this).next().find('p').slideToggle()
        });
    $(".expandable > p").addClass("hide")
}

var showMore = function (rowLimit){
        $('.more-entries').click(function() {
            $(this).addClass("hide")
            $('table > tbody > tr:gt(' + (rowLimit - 1) + ')').toggleClass("hide")

        }
     )}


var reset = function(){
    $("#congress-member-info > tbody > tr").removeClass("hide")
    $(".expandable > p").css("display", "none")
}

// reset()
$(".reset-search").click(function(event){
    $(this).addClass("transparent")
    chosenSelectionReset()
    reset()
})

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


            reset()
            $('.tablelRow').not("#"+selected).addClass("hide");
            $('.hideableRow').not(".contactInfo"+selected).addClass("hide");
            $(".contactInfo"+ selected + "> .expandable > p").css("display", "block");
            $(".chamber-filter").removeClass("filter-enabled")
            $(".reset-search").removeClass('transparent')

        })
    }
}



var createSparkCharts = {
    init: function(data){

    var sparksSenateContainer = d3.select("#g-senate-sparks");

    var senateSparks = sparksSenateContainer.selectAll(".spark-senate-charts")
        .data(data.filter(function(d){
            // console.log(d)
            return d["district"] == null
        }))
        .enter()
        .append("div")
        .attr("class", "small-multiple-sparks")

    senateSparks.append("p")
        .text(function(d) {  
                    if(d["middle_name"]){
                        return d["first_name"] + " " + d["middle_name"]+ " "+d["last_name"] 
                    }else{
                        return d["first_name"] + " " + d["last_name"] 
                    }
                    
                })
        .attr("class", "sparks-rep-names")

    var sparksSenateContainer = d3.select("#g-house-sparks");

    var senateSparks = sparksSenateContainer.selectAll(".spark-house-charts")
        .data(data.filter(function(d){
            // console.log(d)
            return d["district"] !== null
        }))
        .enter()
        .append("div")
        .attr("class", "small-multiple-sparks")

    senateSparks.append("p")
        .text(function(d) {  
                    if(d["middle_name"]){
                        return d["first_name"] + " " + d["middle_name"]+ " "+d["last_name"] 
                    }else{
                        return d["first_name"] + " " + d["last_name"] 
                    }
                    
                })
        .attr("class", "sparks-rep-names")

    }
}





