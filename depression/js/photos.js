 jQuery(document).ready(function($){
        
//        $(".one").hover(
//  function () {
//    $(this).toggleClass("one_active")      
//  }
//);
     
        $(".one").click (
  function () {
    $(this).addClass("one_active")
    $(".one").addClass("one_active")
    $(".two").removeClass("two_active")
    $(".three").removeClass("three_active")
    $(".four").removeClass("four_active")
    $(".five").removeClass("five_active")
    $(".six").removeClass("six_active")
    $(".seven").removeClass("seven_active")
    $(".eight").removeClass("eight_active")
  }
);
        
//         $(".two").hover(
//  function () {
//    $(this).toggleClass("two_active")      
//  }
//);
        $(".two").click(
  function () {
    $(this).addClass("two_active")
    $(".two").addClass("two_active")
    $(".one").removeClass("one_active")
    $(".three").removeClass("three_active")
    $(".four").removeClass("four_active")
    $(".five").removeClass("five_active")
    $(".six").removeClass("six_active")
    $(".seven").removeClass("seven_active")
    $(".eight").removeClass("eight_active")
  }
);
     
//        $(".three").hover(
//  function () {
//    $(this).toggleClass("three_active")      
//  }
//);
     
        $(".three").click(
  function () {
    $(this).addClass("three_active")
    $(".three").addClass("three_active")
    $(".one").removeClass("one_active")
    $(".two").removeClass("two_active")
    $(".four").removeClass("four_active")
    $(".five").removeClass("five_active")
    $(".six").removeClass("six_active")
    $(".seven").removeClass("seven_active")
    $(".eight").removeClass("eight_active")
  }
);
     
        
//        $(".four").hover(
//  function () {
//    $(this).toggleClass("four_active")      
//  }
//);
        $(".four").click(
  function () {
    $(this).addClass("four_active")
    $(".four").addClass("four_active")
    $(".one").removeClass("one_active")
    $(".two").removeClass("two_active")
    $(".three").removeClass("three_active")
    $(".five").removeClass("five_active")
    $(".six").removeClass("six_active")
    $(".seven").removeClass("seven_active")
    $(".eight").removeClass("eight_active")
  }
);
     
//        $(".five").hover(
//  function () {
//    $(this).toggleClass("five_active")      
//  }
//);
     
        $(".five").click(
  function () {
    $(this).addClass("five_active")
    $(".five").addClass("five_active")
    $(".one").removeClass("one_active")
    $(".two").removeClass("two_active")
    $(".three").removeClass("three_active")
    $(".four").removeClass("four_active")
    $(".six").removeClass("six_active")
    $(".seven").removeClass("seven_active")
    $(".eight").removeClass("eight_active")
  }
);
//        $(".six").hover(
//  function () {
//    $(this).toggleClass("six_actvie")      
//  }
//);
     
        $(".six").click(
  function () {
    $(this).addClass("six_actvie")
    $(".six").addClass("six_active")
    $(".one").removeClass("one_active")
    $(".two").removeClass("two_active")
    $(".three").removeClass("three_active")
    $(".four").removeClass("four_active")
    $(".five").removeClass("five_active")
    $(".seven").removeClass("seven_active")
    $(".eight").removeClass("eight_active")
  }
);
    
//        $(".seven").hover(
//  function () {
//    $(this).toggleClass("seven_active")      
//  }
//);
        $(".seven").click(
  function () {
    $(this).addClass("seven_active")
    $(".seven").addClass("seven_active")
    $(".one").removeClass("one_active")
    $(".two").removeClass("two_active")
    $(".three").removeClass("three_active")
    $(".four").removeClass("four_active")
    $(".five").removeClass("five_active")
    $(".six").removeClass("six_active")
    $(".eight").removeClass("eight_active")
  }
);
//        $(".eight").hover(
//  function () {
//    $(this).toggleClass("eight_active")      
//  }
//);
     
        $(".eight").click(
  function () {
    $(this).addClass("eight_active")
    $(".eight").addClass("eight_active")
    $(".one").removeClass("one_active")
    $(".two").removeClass("two_active")
    $(".three").removeClass("three_active")
    $(".four").removeClass("four_active")
    $(".five").removeClass("five_active")
    $(".six").removeClass("six_active")
    $(".seven").removeClass("seven_active")
  }
);
     
      $("#img-one").on("click",function(){
                     $("#culture").css("display", "block");
                     $("#language").css("display", "block");
        }); 
        
        $("#img-one").on("click",function(){
                     $("#visa").css("display", "none");
                     $("#marriage").css("display", "none");
                     $("#finance").css("display", "none");
                     $("#education").css("display", "none");
        }); 
        
        $("#img-small-one").on("click",function(){
                     $("#culture").css("display", "block");
                     $("#language").css("display", "block");
        }); 
        
        $("#img-small-one").on("click",function(){
                     $("#visa").css("display", "none");
                     $("#marriage").css("display", "none");
                     $("#finance").css("display", "none");
                     $("#education").css("display", "none");
        }); 
        
        $("#img-two").on("click",function(){
                     $("#culture").css("display", "block");
                     $("#language").css("display", "block");
                     $("#education").css("display", "block");
        }); 
        
        $("#img-two").on("click",function(){
                     $("#visa").css("display", "none");
                     $("#marriage").css("display", "none");
                     $("#finance").css("display", "none");
        });
        
        $("#img-small-two").on("click",function(){
                     $("#culture").css("display", "block");
                     $("#language").css("display", "block");
                     $("#education").css("display", "block");
        });
        
        $("#img-small-two").on("click",function(){
                     $("#visa").css("display", "none");
                     $("#marriage").css("display", "none");
                     $("#finance").css("display", "none");
        });
        
        $("#img-three").on("click",function(){
                     $("#culture").css("display", "block");
                     $("#education").css("display", "block");
                     $("#finance").css("display", "block");
                     $("#marriage").css("display", "block");
        });
        
       $("#img-small-three").on("click",function(){
                     $("#culture").css("display", "block");
                     $("#education").css("display", "block");
                     $("#finance").css("display", "block");
                     $("#marriage").css("display", "block");
        });
        
        $("#img-three").on("click",function(){
                     $("#culture").css("display", "none");
                     $("#education").css("display", "none");
                    
        });
        
        $("#img-small-three").on("click",function(){
                     $("#culture").css("display", "none");
                     $("#education").css("display", "none");
                    
        });
        
        $("#img-five").on("click",function(){
                     $("#culture").css("display", "block");
                     $("#education").css("display", "block");
                     $("#visa").css("display", "block");
        });
        
        $("#img-small-five").on("click",function(){
                     $("#culture").css("display", "block");
                     $("#education").css("display", "block");
                     $("#visa").css("display", "block");
        });
        
        $("#img-five").on("click",function(){
                     $("#marriage").css("display", "none");
                     $("#finance").css("display", "none");
                     $("#language").css("display", "none");
        });
        
        $("#img-small-five").on("click",function(){
                     $("#marriage").css("display", "none");
                     $("#finance").css("display", "none");
                     $("#language").css("display", "none");
        });
       
        $("#img-four").on("click",function(){
                     $("#language").css("display", "block");
                     $("#finance").css("display", "block");
        });
        
        $("#img-small-four").on("click",function(){
                     $("#language").css("display", "block");
                     $("#finance").css("display", "block");
        });
        
        $("#img-four").on("click",function(){
                     $("#marriage").css("display", "none");
                     $("#visa").css("display", "none");
                     $("#education").css("display", "none");
                     $("#culture").css("display", "none");
        });
        
        $("#img-small-four").on("click",function(){
                     $("#marriage").css("display", "none");
                     $("#visa").css("display", "none");
                     $("#education").css("display", "none");
                     $("#culture").css("display", "none");
        });
        
        $("#img-seven").on("click",function(){
                     $("#language").css("display", "block");
                     $("#visa").css("display", "block");
                     $("#culture").css("display", "block");
                     $("#education").css("display", "block");
        });
        
        $("#img-small-seven").on("click",function(){
                     $("#language").css("display", "block");
                     $("#visa").css("display", "block");
                     $("#culture").css("display", "block");
                     $("#education").css("display", "block");
        });
        
        $("#img-seven").on("click",function(){
                     $("#finance").css("display", "none");
                     $("#marriage").css("display", "none");
        });
        
        $("#img-small-seven").on("click",function(){
                     $("#finance").css("display", "none");
                     $("#marriage").css("display", "none");
        });
        
        $("#img-eight").on("click",function(){
                     $("#language").css("display", "block");
                     $("#visa").css("display", "block");
                     $("#culture").css("display", "block");
                     $("#education").css("display", "block");
                     $("#finance").css("display", "block");
                     $("#marriage").css("display", "block");
        });
        
         $("#img-small-eight").on("click",function(){
                     $("#language").css("display", "block");
                     $("#visa").css("display", "block");
                     $("#culture").css("display", "block");
                     $("#education").css("display", "block");
                     $("#finance").css("display", "block");
                     $("#marriage").css("display", "block");
        });
        
        $("#img-six").on("click",function(){
                     $("#culture").css("display", "block");
                     $("#marriage").css("display", "block");
        });
        
        $("#img-small-six").on("click",function(){
                     $("#culture").css("display", "block");
                     $("#marriage").css("display", "block");
        });
        
        $("#img-six").on("click",function(){
                     $("#language").css("display", "none");
                     $("#visa").css("display", "none");
                     $("#education").css("display", "none");
                     $("#finance").css("display", "none");
        });
        
        $("#img-small-six").on("click",function(){
                     $("#language").css("display", "none");
                     $("#visa").css("display", "none");
                     $("#education").css("display", "none");
                     $("#finance").css("display", "none");
        });
     
                
    });