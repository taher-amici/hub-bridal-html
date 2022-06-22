var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$(document).ready(function () {
	//do jQuery stuff when DOM is ready

	// $('.dropdown-menu-link').click(function(){
	// 	$(this).parent().siblings().find('.dropdown-menu').removeClass('active-dropdown')
	// 	$(this).next().toggleClass('active-dropdown');
	// 	$('.dropdown-menu').parent('.dropdown-menu.active-dropdown .single-menu > ul > li').hover(function(){
	// 		$('.dropdown-menu.active-dropdown .single-menu > ul > li');
	// 	})
	// });

	/* Responsive Jquery Navigation */
	$('.hamburger').click(function (event) {
		$('#mobilenav').toggleClass('is-open');
		$('header').toggleClass('is-open');
		$('.hamburger').toggleClass('is-active');
	});
	$('#mobilenav .nav-backdrop').click(function () {
		$('#mobilenav').removeClass('is-open');
		$('header').removeClass('is-open');
	});

	$('body').on('keyup', function (evt) {
		if (evt.keyCode == 27) {
			$('.hamburger.is-active').removeClass('is-active');
			$('#mobilenav.is-show').removeClass('is-show');
		}
	});

	var clickable = $('.menu').attr('link-clickable');
	$('.mobilenav li:has(ul)').addClass('has-sub');
	$('.mobilenav .has-sub>a').after('<em class="caret">');
	if (clickable == 'true') {
		$('.mobilenav .has-sub>a').addClass('trigger-caret').attr('href', 'javascript:;');
	} else {
		$('.mobilenav .has-sub>.caret').addClass('trigger-caret');
	}

	/* menu open and close on single click */
	$(document).on('click', '.mobilenav .has-sub>.trigger-caret', function (event) {
		var element = $(this).parent('li');
		if (element.hasClass('is-open')) {
			element.removeClass('is-open');
			element.find('li').removeClass('is-open');
			element.find('ul').slideUp(200);
		} else {
			element.addClass('is-open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('is-open');
			element.siblings('li').find('li').removeClass('is-open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

	/* search-block-toggle */
	$(".search-block a").click(function () {
		$(".search-inner").stop().slideToggle();
		$(".all-language").slideUp();
		event.stopPropagation();
	});
	$('.search-inner').click(function (e) {
		e.stopPropagation();
	});

	$(document).on('click', ".cart-block a.cart-clicker, .cart-inner .close", function(event) {
		$(".cart-inner").stop().slideToggle();
		event.stopPropagation();
	});
	$(document).on('click', ".cart-inner", function(event) {
		event.stopPropagation();
	});
	$(window).click(function () {
		$(".search-inner").slideUp();
		$(".all-language").slideUp();
	});

	$(".language-section a").click(function () {
		$(".all-language").stop().slideToggle();
		$(".search-inner").slideUp();
		event.stopPropagation();
	});
	$('.all-language').click(function (e) {
		e.stopPropagation();
	});

	$('.forgot-link').click(function (e) {
		$('#login-modal').modal('hide');
	});

	/* toggle read-more */
	$(".read-more").click(function () {
		//$(".read-more-block").stop().slideToggle();
		$(".read-more-block").stop().toggleClass("active", 1000);
	});
	$(".read-more").click(function () {
		$(".read-more").stop().toggleClass("active");
	});

	/* toggle-collection */
	$('.collection-items ul li:has(".category-selection")').addClass('has-sub');
	$('.collection-items ul li.has-sub>.list-opener').after('<em class="caret">');
	$('.collection-items ul li .list-opener').click(function (e) {
		if ($(this).parent("li").hasClass('active')) {
			$(this).parent("li").removeClass('active');
			$(this).parent("li").find(".category-selection").stop(true, false).slideUp();
		} else {
			$('.collection-items ul li').removeClass('active');
			$(this).parent("li").addClass('active');
			$(".collection-items li .category-selection").slideUp();
			$(this).parent("li").find(".category-selection").stop(true, false).slideDown();
		}
	});

	/* toggle-collection1 */
	$('.favourite-dress-content .collection-items ul:first-child li:first-child:has(".category-selection")').addClass('active');
	$('.favourite-dress-content .collection-items ul:first-child li:first-child .category-selection').show();
	$('.category-selection ul li:has(".category-selection1")').addClass('has-sub1');
	$('.category-selection ul li.has-sub1>.list-opener1').after('<em class="caret1">');
	$('.category-selection ul li .list-opener1').click(function (e) {
		if ($(this).parent("li").hasClass('active')) {
			$(this).parent("li").removeClass('active');
			$(this).parent("li").find(".category-selection1").stop(true, false).slideUp();
		} else {
			$('.category-selection ul li').removeClass('active');
			$(this).parent("li").addClass('active');
			$(".category-selection li .category-selection1").slideUp();
			$(this).parent("li").find(".category-selection1").stop(true, false).slideDown();
		}
	});

	/* sliders */
	if ($('.feature-wrapper').length > 0) {
		var $slider = $('.feature-wrapper');
		var $bgScroll = $('.feature-block-img');

		$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

			$bgScroll
				.css('background-position', calc + '% center');
		});
		$slider.slick({
			dots: false,
			arrows: true,
			infinite: false,
			slidesToShow: 1,
			swipeToSlide: true,
			mobileFirst: true,
			responsive: [{
				breakpoint: 767,
				settings: 'unslick',
			}],
		});
	}

	if ($('.insta-slider').length > 0) {
		$('.insta-slider').slick({
			dots: false,
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			swipeToSlide: true,
			responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}
	if ($('.store-insta-slider').length > 0) {
		$('.store-insta-slider').slick({
			dots: false,
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			variableWidth: true,
			swipeToSlide: true
		});
	}
	if ($('.product-gallery-slider').length > 0) {
		$('.product-gallery-slider').slick({
			dots: false,
			arrows: false,
			infinite: true,
			slidesToShow: 1,
			fade: true,
			asNavFor: '.product-gallery-thumb'
		});
		$('.product-gallery-thumb').slick({
			dots: false,
			arrows: false,
			infinite: true,
			focusOnSelect: true,
			vertical: true,
			slidesToShow: 4,
			asNavFor: '.product-gallery-slider',
			responsive: [{
					breakpoint: 640,
					settings: {
						vertical: false,
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 580,
					settings: {
						vertical: false,
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 480,
					settings: {
						vertical: false,
						slidesToShow: 2,
					}
				},
			]
		});

		manageIndexesOfProductSlider();

		$(document).on('click', '.slick-slide', function(event) {
			_this = $(this);

			if(! _this.hasClass('video-icon'))
			{
				i = $(this).data('slick-index');
				$('.product-gallery-slider').slick('slickGoTo', i);
			}

			setTimeout(function() {
				if(! _this.hasClass('video-icon'))
				{
					$('.slick-slide').removeClass('slick-active slick-current')
					_this.addClass('slick-active slick-current');
				}
			}, 50);
		});
	}

	if ($('.inner-banner-slider').length > 0) {
		$('.inner-banner-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			fade: true,
			swipe: false,
			prevArrow: $('.inner-banner-slider .custom-prev'),
			nextArrow: $('.inner-banner-slider .custom-next'),
			responsive: [{
				breakpoint: 640,
				settings: {
					dots: false,
				}
			}]
		});
	}

	//----- matchheight script ----- //
	if ($('.single-card').length > 0) {
		// $('.single-card .card-text').matchHeight({
		// 	byRow: true,
		// 	property: 'height',
		// 	target: null,
		// 	remove: false
		// });
	}

	$('.search-clicker').click(function () {
		$('.search-header').focus();
	});

	$(".apply-filters").click(function () {
		$(".collection-block .sidebar").addClass("open");
	});
	$(".close-btn a").click(function () {
		$(".collection-block .sidebar").removeClass("open");
	});

	$('.product-detail-block .collection-name').clone().prependTo('.product-detail-block');

	$('.select-blogs ul li:has("ul")').addClass('has-sub');
	$('.select-blogs ul li.has-sub>a').after('<em class="caret">');
	$('.select-blogs ul li .caret').click(function (e) {
		var element = $(this).parent('li');
		if (element.hasClass('is-open')) {
			element.removeClass('is-open');
			element.find('li').removeClass('is-open');
			element.find('ul').slideUp(200);
		} else {
			element.addClass('is-open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('is-open');
			element.siblings('li').find('li').removeClass('is-open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

	$('.faq-block ul li:has("ul")').addClass('has-sub');
	$('.faq-block ul li.has-sub>h6 , .faq-block ul li.has-sub>a').after('<em class="caret">');
	$('.faq-block ul li h6 , .faq-block ul li a').click(function (e) {
		var element = $(this).parent('li');
		if (element.hasClass('is-open')) {
			element.removeClass('is-open');
			element.find('li').removeClass('is-open');
			element.find('ul').slideUp(200);
		} else {
			element.addClass('is-open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('is-open');
			element.siblings('li').find('li').removeClass('is-open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

	if ($(document).scrollTop() > 50) {
		$('header').addClass('shrink');
	} else {
		$('header').removeClass('shrink');
	}

	var Select_blog = $('.select-blogs > ul');
	$('.insider').click(function () {
		/*$(Select_blog).stop().slideUp()*/
		$(this).next().stop().slideToggle();
		$(this).toggleClass("active");
	})
	$(".select-blogs").click(function (e) {
		e.stopPropagation();
	});
	/*$('body').click(function () {
		$(Select_blog).slideUp();
		$('.insider').removeClass("active");
	})
	$('.select-blogs li a').click(function () {
		$(this).parent().parent().prev('.insider').html($(this).html());
		$(this).parent().parent().stop().slideUp()
	});*/

	/* Jump to next section
	$('.contact-store-btn').on('click', function (e) {
		var that = $(this);
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#contact_store').offset().top - 30
		}, 800);
	});

	/* Select box text color change */
	$(".form-content1 form select").change(function () {
		this.style.color = '#000';
	})

	if ($('.read-temp').length) {

		var status = false;
		$('.read-temp').each(function (index, el) {
			_this = $(this);

			if (_this.find('p').length < 2) {
				_this.removeClass('read-more-block');
			} else {
				_this.find('p:hidden').each(function (index, el) {
					$(this).appendTo('.read-toggle');
					status = true;
				});
			}

			_this.removeClass('read-more-block');
		});

		if (status) {
			_this.find('span.read-more').show();
		}
	}

	$('.item-count').each(function (index, el) {
		var _this = $(this);
		if (typeof (_this.parents('li:first').find('.category-selection')) !== "undefined") {
			var total = _this.parents('li:first').find('.category-selection').find('input[type="checkbox"]:checked').length;
			if (total != 0) {
				_this.html('( ' + total + ' )');
				$('.clear-all').removeClass('d-none');
			}
		}
	});

	$('.tag.cats.d-none').each(function (index, el) {
		$(this).removeClass('d-none');
	});

	$('.tag.items.d-none').each(function (index, el) {
		$(this).html($('input[value="' + $(this).attr('id') + '"]:first').attr('title')).removeClass('d-none');
	});

	if ($("#login_myModal").find("div.error-inner").length > 0) {
		$("#login_myModal").modal("show");
	}

	$(document).on('submit', 'form.popup_form', function (event) {
		if (!$(this).valid()) {
			return false;
		}
	});

	collection_rollover_images();

	$(document).on('click', '.reset_filters', function(){
	    $('form#search_events').find('input[type="text"]').removeAttr('value')
	    $('form#search_events').find('select').each(function(index, el) {
	        $(this).find('option:selected').removeAttr('selected')
	        $(this).trigger('change')
	    });
	});

	$(document).on('change', '.collection-cat', function(event) {
		event.preventDefault();
		/* Act on the event */
		var _val = $(this).val();
		$(".collection-style").prop('disabled', true);
		var load = "<option>Loading...</option>"
		$(".collection-style").html(load);

		$.ajax({
			url: '/test-set-feedback/feed/' + _val,
			success: function(result){
				$(".collection-style").prop('disabled', false);
			    $(".collection-style").html(result);
			    if (result == '') {
			    	result = '<option value="">--</option>'
			    	$(".collection-style").html(result);
			    }
				// console.log("success");
			}
		});
	});

	$(document).on('change', '.sales-outcome', function(event) {
		event.preventDefault();
		/* Act on the event */
		var _val = $('.sales-outcome').children('option:selected').data('class');

		$("."+ _val).siblings().hide();
		$("."+ _val).show();
	});

	$(document).on('change', 'input[name="closed_sales_outcome"]', function(event) {
		// event.preventDefault();
		if($(this).val() == "Other")
		{
			if($(this).prop('checked'))
			{
				$('.closed-sales-other-option').show();
			}
			else
			{
				$('.closed-sales-other-option').hide();
			}
		}
	});

	$(document).on('change', 'input[name="no_sales_outcome"]', function(event) {
		// event.preventDefault();
		if($(this).val() == "Other")
		{
			if($(this).prop('checked'))
			{
				$('.no-sales-other-option').show();
			}
			else
			{
				$('.no-sales-other-option').hide();
			}
		}
		else if($(this).val() == "Alternate Designer & Style Order")
		{
			if($(this).prop('checked'))
			{
				$('.no-sales-alternate-designer-style-order').show();
			}
			else
			{
				$('.no-sales-alternate-designer-style-order').hide();
			}
		}
	});

	var option = [];
	$(document).on('change', 'input[name=closed_sales_outcome], input[name=no_sales_outcome]', function(event) {
		var index = option.indexOf($(this).val());
		if (index !== -1) {
		  option.splice(index, 1);
		}
		else{
			option.push($(this).val());
		}
		$('input[name=sales_outcome_options]').val(option);
	});
});

/* Script on scroll
------------------------------------------------------------------------------*/
$(window).scroll(function () {
	if ($(document).scrollTop() > 50) {
		$('header').addClass('shrink');
	} else {
		$('header').removeClass('shrink');
	}
});

$(window).resize(function(){
	manageIndexesOfProductSlider();
});

$(function () {
	$(".archive-drop li").on('mouseenter mouseleave', function (e) {
		if ($('ul', this).length) {
			var elm = $('ul:first', this);
			var off = elm.offset();
			var l = off.left;
			var w = elm.width();
			var docH = $(".container").height();
			var docW = $(".blog-selection").width();

			var isEntirelyVisible = (l + w <= docW);

			if (!isEntirelyVisible) {
				$(this).addClass('edge');
			} else {
				$(this).removeClass('edge');
			}
		}
	});
});

function collection_rollover_images(){
	if($('.rollover-wrapper').length > 0 )
	{
		$('.rollover-wrapper').find('.card').each(function(index, element) {
			if($(this).children('img').length == 1){
				$(this).children('img:first').after($(this).children('img:first').clone())
				$(this).children('img:last').addClass('rollover-img')
			}
		});
	}
}

function manageIndexesOfProductSlider() {
	setTimeout(function() {
		if($('.product-gallery-thumb').find('.slick-slide.video-icon:first').attr('aria-hidden') == "yes") {
			return false;
		}

		count = 0;
		$('.product-gallery-thumb').find('.slick-slide').each(function(index, el) {
			if($(this).hasClass('video-icon')) {

				$(this).attr('aria-hidden', 'yes');
				if($(this).attr('data-slick-index') >= 0)
				{
					count++;
				}

				$(this).attr('data-slick-index', 0);
			}

			if( ! $(this).hasClass('video-icon')) {
				// console.log(count);
				$(this).attr('data-slick-index', $(this).attr('data-slick-index') - count);
			}
		});
	}, 100);
}