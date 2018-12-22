$(document).ready(function() {

	function showPopup() {
		var item  = $('div.partner__item'),
				image = $('div.partner__image'),
				text  = $('div.partner__text'),
				popup = $('div.popup'),
				close = $('div.popup__close');

		item.each(function(index) {
			$(this).children(image).click(function() {
				popup.fadeIn(300);
				popup.children('.popup__image').html( image.eq(index).html() );
				popup.children('.popup__text').text( text.eq(index).text() );
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
		$('nav a[href*=#], .slider a[href*=#]').bind('click', function(e) {
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

		$('.scroll-to-top').click(function () {
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

	showPopup();
	hideNavbar();
	scrollSmooth();
	scrollToTop();
	$(document).on("scroll", scrollNavigate);


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
			}
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
			}
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

	jQuery(function($){
		$("#year").mask("9999 год");
		$("#phone").mask("+9(999) 999-9999");
	});

	// Checkbox switcher
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
})