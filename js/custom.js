/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Main Slider
5. Init Progress Bars
6. Init Testimonials Slider
7. Init Clients Slider
8. Init Parallax


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var ctrl = new ScrollMagic.Controller();
	var controller = new ScrollMagic.Controller();
    var menuActive = false;
	var header = $('.header');
	var img = $('.logo_img ');
	var navbarTitle = $('.logo_title');
    var navbarTitleSpan = $('.logo_title_span');
	var hamb = $('.hamburger_container');
	var menu = $('.fs_menu_container');
	var hambIcon = $('.hamburger_icon');
	var menubuttonsphone = $('.button_on_phone');
    var menubuttonscomputer = $('.button_on_computer');

    var windowSize = $(window);

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initMainSlider();
	initProgressBars();
	initTestimonialsSlider();
	initClientsSlider();
	initParallax();
	buttonmovement();

	/*
	2. Set Header

	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 59)
			{
				header.css({'height':"90px"});
				img.css({'height':"75px", 'width':"75px"});
				navbarTitle.css({'font-size':"55px", 'margin-left':"-45px" });
                navbarTitleSpan.css({'font-size':"20px",'margin-left':"1px", 'margin-top':"10px"});
			}
			else
			{
				header.css({'height':"125px"});
                img.css({'height':"100px", 'width':"100px"});
                navbarTitle.css({'font-size':"40px", 'margin-left':"-15px"});
                navbarTitleSpan.css({'font-size':"25px",'margin-left': "-28px", 'margin-top':"3px"});

            }
		}
		else
		{
			if($(window).scrollTop() > 59)
			{
				header.css({'height':"90px"});
                img.css({'height':"75px", 'width':"75px"});
                navbarTitle.css({'font-size':"55px", 'margin-left':"-45px" });
                navbarTitleSpan.css({'font-size':"20px",'margin-left':"1px", 'margin-top':"10px"});


            }
			else
			{
				header.css({'height':"125px"});
                img.css({'height':"100px", 'width':"100px"});
                navbarTitle.css({'font-size':"40px", 'margin-left':"-15px"});
                navbarTitleSpan.css({'font-size':"25px",'margin-left': "-28px", 'margin-top':"3px"});

            }
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger_container').length)
		{
			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		setTimeout(function()
		{
			hambIcon.addClass('active');
		},500);
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		setTimeout(function()
		{
			hambIcon.removeClass('active');
		},500);
		menuActive = false;
	}

	/* 

	4. Init Main Slider

	*/

	function initMainSlider()
	{
		if($('.hero_slider').length)
		{
			var heroSlider = $('.hero_slider');

			heroSlider.owlCarousel({
				items: 1,
				loop: true,
				autoplay:true,
				autoplayTimeout:5000,
				autoplaySpeed:800,
				smartSpeed:800,
				dotsContainer:'main_slider_custom_dots'
			});

			/* Custom dots events */
			if($('.main_slider_custom_dot').length)
			{
				$('.main_slider_custom_dot').on('click', function()
				{
					$('.main_slider_custom_dot').removeClass('active');
					$(this).addClass('active');
					heroSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
				});
			}

			/* Change active class for dots when slide changes by nav or touch */
			heroSlider.on('changed.owl.carousel', function(event)
			{
				$('.main_slider_custom_dot').removeClass('active');
				$('.main_slider_custom_dots li').eq(event.page.index).addClass('active');
			});	

			/* Custom navigation */
			if($('.main_slider_nav').length)
			{
				$('.main_slider_nav_left').on('click', function()
				{
					heroSlider.trigger('prev.owl.carousel');
				});

				$('.main_slider_nav_right').on('click', function()
				{
					heroSlider.trigger('next.owl.carousel');
				});
			}

		}
	}

	/* 

	5. Init Progress Bars

	*/

	function initProgressBars()
	{
		if($('.skill_bars').length)
		{
			var bars = $('.skill_bars');

			bars.each(function()
			{
				var ele = $(this);
	    		var elePerc = ele.data('perc');
	    		var eleName = '#'+ele.data('name');

	    		var statsScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var pbar = new ProgressBar.Line(eleName, 
		    		{
		    			strokeWidth: 0.5,
						easing: 'easeInOut',
						duration: 1400,
						color: '#ff4200',
						trailColor: 'rgba(255,255,255,1)',
						trailWidth: 1,
						svgStyle: {display: 'block', width: '100%', height: '100%'},
						text: {
							style: {
								// Text color.
								// Default: same as stroke color (options.color)
								color: '#FFFFFF',
								position: 'absolute',
								left: 'calc' + '(' + (elePerc * 100) + '% - 48px' + ')',
								top: '17px',
								padding: 0,
								margin: 0,
								transform: null
								},
								autoStyleContainer: false
						},
						from: {color: '#00bcd5'},
						to: {color: '#00bcd5'},
						step: function(state, bar) {
						bar.setText(Math.round(bar.value() * 100) + ' %');
						}
		    		});
		    		pbar.animate(elePerc);
		    	})
		    	.addTo(ctrl);
			})
		}
	}

	/* 

	6. Init Testimonials Slider

	*/

	function initTestimonialsSlider()
	{
		if($('.testimonials_slider').length)
		{
			var testSlider = $('.testimonials_slider');

			testSlider.owlCarousel(
			{
				items:1,
				loop:true,
				dots:false
			});

			if($('.test_slider_nav').length)
			{
				var navLeft = $('.test_slider_nav_left');
				var navRight = $('.test_slider_nav_right');

				navLeft.on('click', function()
				{
					testSlider.trigger('prev.owl.carousel');
				});

				navRight.on('click', function()
				{
					testSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	7. Init Clients Slider

	*/

	function initClientsSlider()
	{
		if($('.clients_slider').length)
		{
			var clientsSlider = $('.clients_slider');

			clientsSlider.owlCarousel(
			{
				loop: true,
				dots: false,
				responsive:
				{
					0:{items:1},
					575:{items:2},
					768:{items:3},
					992:{items:4},
					1199:{items:5}
					
				}
			});
		}
	}

	/* 

	8. Init Parallax

	*/

	function initParallax()
	{
		// Add parallax effect to home slider
		if($('.slider_prlx').length)
		{
			var homeBcg = $('.slider_prlx');

			var homeBcgScene = new ScrollMagic.Scene({
		        triggerElement: homeBcg,
		        triggerHook: 1,
		        duration: "100%"
		    })
		    .setTween(TweenMax.to(homeBcg, 1, {y: '15%', ease:Power0.easeNone}))
		    .addTo(ctrl);
		}

		// Add parallax effect to every element with class prlx
		// Add class prlx_parent to the parent of the element
		if($('.prlx_parent').length && $('.prlx').length)
		{
			var elements = $('.prlx_parent');

			elements.each(function()
			{
				var ele = this;
				var bcg = $(ele).find('.prlx');

				var slideParallaxScene = new ScrollMagic.Scene({
			        triggerElement: ele,
			        triggerHook: 1,
			        duration: "200%"
			    })
			    .setTween(TweenMax.from(bcg, 1, {y: '0', ease:Power0.easeNone}))
			    .addTo(ctrl);
			});
		}



	}

    /*

    9. Move button from bottom to right on index

    */
	
	function buttonmovement() {

        menubuttonsphone.toggle(windowSize.width() < 992);
        menubuttonscomputer.toggle(windowSize.width() > 992);

    }
    buttonmovement();
    windowSize.resize(buttonmovement);
	
});