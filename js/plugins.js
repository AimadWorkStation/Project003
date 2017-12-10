/* global $, alert, console */
$(document).ready(function() {
	'use strict';
	//i use variable of element cause everytime i called one it create a cache for it
	var myHeader = $('.header');
	var mySlider = $('.bxslider');
	//set header automaticly to window height
	myHeader.css('height',$(window).height());
	

	//fuction for the click menu element and change active classe among theme
	//parent() to add active class for the li not a tag
	$('.links li a').click(function(){
	$(this).parent().addClass('active')
			.siblings().removeClass('active');
		});


	// ****** Slider *******
	//in the bxslider website ther is the way to install this slider
	 mySlider.bxSlider({
    	pager : false
  	 });

  	 //make slider item middle
  	 mySlider.each(function(){
    	$(this).css('paddingTop',($(window).height() - $('.bxslider li').height())/2);
  	 });
 

  	 //fuction execute at windows resize
	$(window).on('resize',function(){

			myHeader.css('height',$(window).height());

			mySlider.each(function(){
		    	$(this).css('paddingTop',($(window).height() - $('.bxslider li').height())/2);

		  	});
	});

	//smooth scroll betwin principale divs
	  //explication : if we click at the element who has .abt as class which in this case
	 //is the link About this will scrollTop by the size between the class of the second div position
	//and the top line of the body thats why offset fuction and animate fuction only to smooth it 1,2 second 
	 //>> but this code will take me only to the services only 
	// $('.abt').on('click',function(){
	// 	$('html,body').animate({
	// 		scrollTop : $('.services').offset().top
	// 	},1200);
	// });

	//to fix the previouse probleme we will work with data-libghiti='value'
	$('.links li a').click(function(){
		var a = $(this).data('value');
		$('html, body').animate({
			scrollTop : $('#' + $(this).data('value')).offset().top
		}, 1000);

	});	


	//fadeOut the overlay of images in Our Team contaier

	$('.ourTeam .box:not(:last-of-type)').mouseenter(function(){
		//var a = $(this).find(".overlay").data('value');
			// $(this).find(".overlay").css('display','block');
			// $(this).siblings().find(".overlay").css('display','none');
		$(this).find(".overlay").fadeIn(800);
		$(this).siblings().find(".overlay").fadeOut(400);

	});	
	$('.ourTeam .box:not(:last-of-type)').mouseout(function(){
		$(this).find(".overlay").delay(1000).fadeOut(400);
	});
	// $('.ourTeam .box:not(:last-of-type)').on('mouseenter',function(){
	// 	$('.ourTeam .box:not(:last-of-type) .overlay').fadeOut(1000);
	// });


	//auto slider code at about
	$(function autoSlider(){
		$('.slider .active').each(function(){
			if(!$(this).is(':last-child')){
 				$(this).delay(3000).fadeOut(1000,function(){
 					$(this).removeClass('active').next().addClass('active').fadeIn();
 					autoSlider();

 				});
 				
			}

			else{
				$(this).delay(3000).fadeOut(1000,function(){
 					$(this).removeClass('active');
 					$('.slider div').eq(0).addClass('active').fadeIn();
 					autoSlider();
 				});
			}
		});


	})

	//autoSlider();

});