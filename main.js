$(document).ready(function(){ 
    $('.hamburger').click(function () {
      //  $('.hovedmeny').slideToggle();
        
        if($(".hovedmeny").hasClass("closed")){
            $(".hovedmeny").removeClass("closed");
        }
        else{
            $(".hovedmeny").addClass("closed");
        }
    });
});
$(window).resize(function(){
    $(".hovedmeny").addClass("closed");
});
    
    
    