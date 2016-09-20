
jQuery(document).ready(function($){
    $('.lazy').laziestloader();
    
    $("#header-container").width($(window).width()); 
    
    $("#header-container").height($(window).height()); 
    
    $('.audio').jabradoodle();
    
    $(window).on("load resize", function(){ 
        $("#header-container").height($(window).height());
        $("#header-container").width($(window).width()); 
        var s = skrollr.init();
});  
    
$(function(){
      $("#second_quote").typed({
        strings: ['“I finally felt like I wasn’t poor anymore”'],
        typeSpeed: 10,
        loop: true
      });
  });

$(function(){
      $("#first_quote").typed({
        strings: ['“I’m renting. But my dream is to own a home for my kids.”'],
        typeSpeed: 10,
        loop: true
      });
  });
$(function(){
      $("#thrid_quote").typed({
        strings: ['“If we leave now, we will lose everything.”'],
        typeSpeed: 10,
        loop: true
      });
  });



// ugliest hack in history right here.
  window.setTimeout(function(){
    $("body").removeAttr("style");
  }, 500);
});
