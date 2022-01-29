/*
                            Note: This was a YouTube tutorial... i retyped in my way.                   
Author: Amr Elsagaei                                                               */

$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20) 
        $(".navbar").addClass("sticky");
      else
        $(".navbar").removeClass("sticky");
    });
  
    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });
  });

/*                                                finish first part                   */
/*                                                FINISH SECOND PART                  */