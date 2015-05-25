// Main.JS
// Author: Zac Maguire
// Project: Portfolio


$(document).ready(function(){

    

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        navText: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true   
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:5,
                nav:false,
                loop:false,
                dots: false

            }
        }
    });



    delayText();
   
	
	function delayText(){

		window.setTimeout(function(){
			$('#nameText').fadeIn(1000);
			$('#contactText').fadeIn(1000);
		}, 500);

		window.setTimeout(function(){
			$('#projectSlider').removeClass('opacity0');
		}, 3000);

	};

	

		

	



}); // Closing document ready










