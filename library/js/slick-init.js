/**
 * @author Asaf
 */

console.log('script file are loaded from slick-init');

jQuery(document).ready(function($){
	$('.single-item').slick({
		autoplay:true,
		dots: true
		
	});
/*
 $('.slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({
 slidesToShow: 2,
 slidesToScroll: 1,
 asNavFor: '.slider-for',
 dots: true,
 centerMode: true,
 focusOnSelect: true,
 arrows: true,
 autoplay: false
 });*/
});