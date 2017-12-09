/* global $, alert, console */
$(document).ready(function() {
	'use strict';
	//i use variable of element cause everytime i called one it create a cache for it
	var myHeader = $('.header');
	var mySlider = $('.bxslider');
	//set header automaticly to window height
	myHeader.css('height',$(window).height());
	

	//fuction for the click menu element and change active classe among theme
	$('.links li').click(function(){
	$(this).addClass('active')
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









});