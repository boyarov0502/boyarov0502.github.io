$(document).ready(function() {

	function loadSvg() {
		$('#brand img[src$=".svg"]').each(function() {
			var $img = jQuery(this);
			var imgURL = $img.attr('src');
			var attributes = $img.prop("attributes");

			$.get(imgURL, function(data) {
					var $svg = jQuery(data).find('svg');

					$svg = $svg.removeAttr('xmlns:a');

					$.each(attributes, function() {
							$svg.attr(this.name, this.value);
					});

					$img.replaceWith($svg);
			}, 'xml');
		});
	}

	function changeSvgColor() {
		$( ".partner__image" ).hover(
			function() {
				$( this ).removeClass( "image_grey" );
			}, function() {
				$( this ).addClass( "image_grey" );
			}
		);
	}

	function showPopup() {
		var item  = $('div.partner__item'),
				image = $('div.partner__image'),
				text  = $('div.partner__text'),
				cerf 	= $('input.partner__cerf'),
				popup = $('div.popup'),
				close = $('div.popup__close');

		item.each(function(index) {
			$(this).children(image).click(function() {
				popup.fadeIn(300);
				popup.find('.popup__image').html( image.eq(index).html() );
				popup.find('.popup__text').text( text.eq(index).text() );
				popup.find('.popup__link.link_cerf').attr( 'href', cerf.eq(index).val() );
			})
		});

		close.click(function() {
			popup.fadeOut(300);
		});
	}

	function hideNavbar() {
		var prevScrollposs = window.pageYOffset;

		window.onscroll = function() {
			var currentScrollpos = window.pageYOffset;

			(prevScrollposs > currentScrollpos) ?
			$('.header').css('top', '0') :
			$('.header').css('top', '-100px')

			prevScrollposs = currentScrollpos;
		}
	}

	function scrollSmooth() {
		$('nav a[href*=#], .slider a[href*=#], .popup__link[href=#dealer]').bind('click', function(e) {
			e.preventDefault();

			var target = $(this).attr("href");

			$('html, body').stop().animate({
				scrollTop: $(target).offset().top
			}, 600, function() {
				location.hash = target;
			});

			return false;
		});
	}

	function scrollToTop() {
    $(window).scroll(function () {
			if ($(this).scrollTop() > 400) {
				$('.scroll-to-top').fadeIn();
			} else {
				$('.scroll-to-top').fadeOut();
			}
		});

		$('.scroll-to-top, .logo__image').click(function () {
			$('html, body').stop().animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	}

	function scrollNavigate() {
		var currentScrollPos = $(document).scrollTop();

		$('.nav ul li a').each(function () {
			var curLink = $(this),
					refElem = $(curLink.attr('href'));

			if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
				$('.nav ul li a').removeClass("current");
				curLink.addClass("current");
			} else {
				curLink.removeClass("current");
			}
		});
	}

	function initForm() {
		$form = $('.dealer__form');
		$form.validate({
			rules: {
				name: "required",
				fio: "required",
				year: "required",
				phone: "required",
				site: "required",
				email: {
					required: true,
					email: true
				},
				field: "required",
				subject: "required",
				city: "required",
				message: {
					required: true,
					minlength: 10
				},
				checkbox: "required"
			},
			messages: {
				name: " ",
				fio: " ",
				year: " ",
				phone: " ",
				site: " ",
				email: {
					required: " ",
					email: "Введите правильный email"
				},
				field: " ",
				subject: " ",
				city: " ",
				message: {
					required: " ",
					minlength: "Должно содержать хотя бы 10 символов"
				},
				checkbox: " "
			},
			errorElement: "div",
			highlight: function(element, errorClass) {
				$(element).addClass(errorClass);
			},
			unhighlight: function(element, errorClass) {
				$(element).removeClass(errorClass);
			},
			submitHandler: function (form) {
				$.ajax({
					url: 'phpmailer/mail.php',
					type: 'POST',
					contentType: false,
					processData: false,
					data: new FormData( form ),
					success: function(){
						$form.append('<div class="okey">Всё окей!</div>')
					}
				})
			},
			showErrors: function(errorMap, errorList) {
				if (this.numberOfInvalids() == 0) {
					$('.form__error span').text('');
				}
				else if (this.numberOfInvalids() == 1) {
					$('.form__error span').text('Это поле обязательно для заполнения');
				}
				else if (this.numberOfInvalids() >= 5) {
					$('.form__error span').text('Эти ' + this.numberOfInvalids() + ' полей обязательны для заполнения');
				}
				else {
					$('.form__error span').text("Эти " + this.numberOfInvalids() + " поля обязательны для заполнения")
				}
				this.defaultShowErrors();
			}
		});
	}

	function addMask() {
		$("#year").mask("9999 год");
		$("#phone").mask("+9(999) 999-9999");
	}

	function creatCheckbox() {
		$('.switcher').each(function switcherCheck(index) {
			if ($('.switcher').eq(index).find('input').is(":checked")) {
				$(this).addClass('checked');
			}
			else {
				$(this).removeClass('checked');
			}
		});
		$('.switcher input').click(function () {
			$(this).parent('.switcher').toggleClass('checked');
		});
	}

	function creatCustomScroll() {
		$('html').niceScroll({
			cursorborder:"0",
			cursorborderradius:"1px",
			cursorcolor:"#FF6600",
			cursorwidth:"10px",
			scrollspeed:"100",
			zindex:"99999"
		});
	}

	function creatSlider() {
		$('.slider').slick({
			arrows: false
		});
	}

	function hidePreloader() {
		$('.preloader').fadeOut('slow');
	}

	function initWow() {
		new WOW().init();
	}

	loadSvg();
	changeSvgColor();
	showPopup();
	hideNavbar();
	scrollSmooth();
	scrollToTop();
	$(document).on("scroll", scrollNavigate);
	initForm();
	addMask();
	creatCheckbox();
	creatCustomScroll();
	creatSlider();
	initWow();
	$("html").getNiceScroll().resize();
	$(window).on("load", hidePreloader);
})