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

	function creatNavigation() {
		var mainNavLinks = document.querySelectorAll("nav ul li a");

		window.addEventListener("scroll", event => {
			var fromTop = window.scrollY;

			mainNavLinks.forEach(link => {
				var section = document.querySelector(link.hash);

				if (
					section.offsetTop - 61 <= fromTop &&
					section.offsetTop + section.offsetHeight > fromTop
				) {
					link.classList.add("current");
				} else {
					link.classList.remove("current");
				}
			})
		});
	}

	function scrollSmooth() {
		$("nav a").click(function() {
			var elementClick = $(this).attr("href"),
					destination = $(elementClick).offset().top;

			$('html,body').animate(	{ scrollTop: destination }, 800 );
			return false;
		});
	}

	showPopup();
	hideNavbar();
	creatNavigation();
	scrollSmooth();
})