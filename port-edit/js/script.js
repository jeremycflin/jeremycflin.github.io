
function promptPass(){
  var pass = prompt("Sorry! We are currently embargoing this story.");
  if(pass!="USAToday"){
    alert('Sorry mom, you cannot see this!');
    promptPass();
  }else{
    alert('Good password!');
  }
}


jQuery(document).ready(function($){
    $('.lazy').laziestloader();
    
    $("#header-container").width($(window).width()); 
    
    $("#header-container-two").height($(window).width()); 

    $("#header-container-three").width($(window).width()); 
    
    // $('.audio').jabradoodle();
    
    $(window).on("load resize", function(){ 
        $("#header-container").height($(window).height());
        $("#header-container").width($(window).width()); 
        // $("#header-container-two").height($(window).height());
        $("#header-container-two").width($(window).width()); 
         // $("#header-container-three").height($(window).height());
        $("#header-container-three").width($(window).width()); 
        var s = skrollr.init();
});  


promptPass();
    
// $(function(){
//       $("#second_quote").typed({
//         strings: ['“I finally felt like I wasn’t poor anymore”'],
//         typeSpeed: 10,
//         loop: true
//       });
//   });

// $(function(){
//       $("#first_quote").typed({
//         strings: ['“I’m renting. But my dream is to own a home for my kids.”'],
//         typeSpeed: 10,
//         loop: true
//       });
//   });
// $(function(){
//       $("#thrid_quote").typed({
//         strings: ['“If we leave now, we will lose everything.”'],
//         typeSpeed: 10,
//         loop: true
//       });
//   });



// ugliest hack in history right here.
  window.setTimeout(function(){
    $("body").removeAttr("style");
  }, 500);
});
