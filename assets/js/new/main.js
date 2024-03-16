/* =====================================
Template Name: 	Corpress
Author Name: Naimur Rahman
Author Url: www.themebazzar.com
Description: Corpress - Business and Corporate HTML5 Template.
Version:	1.1
========================================*/     
/*=======================================
[Start Activation Code]
=========================================
	* Mobile Menu JS
	* Search JS
	* Home Slider JS
	* Portfolio Single Slider JS
	* Testimonial Slider JS
	* Team Slider JS
	* Counter JS
	* Magnific Popup JS
	* Video Popup JS
	* Stellar JS
	* Wow JS JS
	* Scroll Up JS
	* Preloader JS
=========================================
[End Activation Code]
=========================================*/ 
(function($) {
    "use strict";
     $(document).on('ready', function() {
		
		jQuery(window).on('scroll', function() {
		if ($(this).scrollTop() > 100) {
			$('.header .main-menu').addClass("sticky");
		} else {
			$('.header .main-menu').removeClass("sticky");
		}
		});

		// Mobile Menu JS  //
		$('.mobile-menu').slicknav({
			prependTo:".mobile-nav",
		});

		// Search JS  //
		$('.top-search a').on( "click", function(){
			$('.search-top').toggleClass('active');
		});

		$('.right-barc .fa-bars').on( "click", function(){
		$('.sidebar-menu').addClass('active');
		});

		$('.cross').on( "click", function(){
			$('.sidebar-menu').removeClass('active');
		});

		// Home Slider JS  //
		$('.home-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		});

		
		// Portfolio Single Slider JS  //
		$('.single-p-slider').owlCarousel({
			autoplay:false,
			autoplayTimeout:4500,
			smartSpeed: 500,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				1170: {
					items:3,
				}
			}
		});
		
		// Testimonial Slider JS  //
		$('.testimonial-slider').owlCarousel({
			autoplay:false,
			autoplayTimeout:3500,
			smartSpeed:400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			margin:30,
			dots:true,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				1170: {
					items:1,
				}
			}
		});

		// Team Slider JS  //
		$('.team-slider').owlCarousel({
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:3,
				},
				1170: {
					items:3,
				}
			}
		});


		/*====================================
			Isotop
		======================================*/
		$(window).on('load', function() {

			if ($.fn.isotope) {
                $(".isotop-active").isotope({
                    filter: '*',
                });

					$('.works-menu ul li').on('click', function() {
                    $(".works-menu ul li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr('data-filter');
                    $(".isotop-active").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: true,
                        }
                    });
                    return false;
                });
            }
		});

		// Counter JS  //
		$('.counter').counterUp({
			delay: 15,
			time: 1000
		});

		// Magnific Popup JS  //
		$('.work-popup').magnificPopup({
			type: 'image',
			gallery:{
			enabled:true
			}
		});

		// Video Popup  //
		$('.video-popup').magnificPopup({
			type: 'video',
		});

		// stellar //
		$.stellar({
		  horizontalOffset: 0,
		  verticalOffset: 0
		});


		/*====================================
			Wow JS
		======================================*/
		var window_width = $(window).width();
			if(window_width > 767){
            new WOW().init();
		}

		// Scroll Up //
		$(function () {
		  $.scrollUp({
			scrollName: 'scrollUp', // Element ID
			topDistance: '300', // Distance from top before showing element (px)
			topSpeed: 800, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			easingType: 'easeInOutQuart',        // Scroll to top easing (see http://easings.net/)
			animationInSpeed: 900, // Animation in speed (ms)
			animationOutSpeed: 900, // Animation out speed (ms)
			scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 2147483647           // Z-Index for the overlay
		  });
		});

	});
	/*====================================
			Preloader JS
		======================================*/
		// $(window).load(function(){
		// 		$('.preloader').fadeOut('slow', function(){
		// 		$(this).remove();
		// 	});
		// });
})(jQuery);