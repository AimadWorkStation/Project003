/* global $, alert, console */
$(document).ready(function() {
	'use strict';
	//i use variable of element cause everytime i called one it create a cache for it
	var myHeader = $('.header');
	var mySlider = $('.bxslider');
	//set header automaticly to window height
	myHeader.css('height',$(document).height());
	

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

			$('.myheader').css('height',$(document).height());

			mySlider.each(function(){
		    	$(this).css('paddingTop',($(window).height() - $('.bxslider li').height())/2);

		  	});
	});


});