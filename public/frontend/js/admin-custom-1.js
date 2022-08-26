(function () {
	"use strict";


	// ______________ Global Loader
	$(window).on("load", function (e) {
		$("#global-loader").fadeOut("slow");
	})

	// ______________Full screen
	$("#fullscreen-button").on("click", function toggleFullScreen() {
		if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			}
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	})
	// ______________Loader
	$(window).on("load", function (e) {
		$("#loading").fadeOut("slow");
	})

	// ______________Cover Image
	$(".cover-image").each(function () {
		var attr = $(this).attr('data-bs-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});

	// ______________ Back to Top
	$(window).on("scroll", function (e) {
		if ($(this).scrollTop() > 0) {
			$('#back-to-top').fadeIn('slow');
		} else {
			$('#back-to-top').fadeOut('slow');
		}
	});
	$("#back-to-top").on("click", function (e) {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});


	// ______________Global Search
	$(document).on("click", "[data-bs-toggle='search']", function (e) {
		var body = $("body");

		if (body.hasClass('search-gone')) {
			body.addClass('search-gone');
			body.removeClass('search-show');
		} else {
			body.removeClass('search-gone');
			body.addClass('search-show');
		}
	});
	var toggleSidebar = function () {
		var w = $(window);
		if (w.outerWidth() <= 1024) {
			$("body").addClass("sidebar-gone");
			$(document).off("click", "body").on("click", "body", function (e) {
				if ($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
					$("body").removeClass("sidebar-show");
					$("body").addClass("sidebar-gone");
					$("body").removeClass("search-show");
				}
			});
		} else {
			$("body").removeClass("sidebar-gone");
		}
	}
	toggleSidebar();
	$(window).resize(toggleSidebar);

	// ______________Chart-circle
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function () {
			let $this = $(this);
			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: '#e7e9f1',
				lineCap: ''
			});
		});
	}

	const DIV_CARD = 'div.card';


	// ___________TOOLTIP
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	// __________POPOVER
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl)
	})
	// By default, Bootstrap doesn't auto close popover after appearing in the page
	$(document).on('click', function (e) {
		$('[data-bs-toggle="popover"]').each(function () {
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				(($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false  // fix for BS 3.3.6
			}

		});
	});

	// ______________Remove Card
	$(document).on('click', '[data-bs-toggle="card-remove"]', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});

	// ______________Card Collapse
	$(document).on('click', '[data-bs-toggle="card-collapse"]', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	// ______________Card Fullscreen
	$(document).on('click', '[data-bs-toggle="card-fullscreen"]', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	let bodyRtl = $('body').hasClass('rtl');
	if (bodyRtl) {
		$('body').addClass('rtl');
		$('body').removeClass('ltr');
		$("html[lang=en]").attr("dir", "rtl");
		$(".horizontalMenu-list span").attr("dir", "rtl");
		$(".top-bar li a .fe").attr("dir", "rtl");
		localStorage.setItem('bizdirertl', true)
        localStorage.removeItem('bizdireltr')
		$("head link#style").attr("href", $(this));
		(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
		var carousel = $('.owl-carousel');
		$.each(carousel, function (index, element) {
			// element == this
			var carouselData = $(element).data('owl.carousel');
			carouselData.settings.rtl = true; //don't know if both are necessary
			carouselData.options.rtl = true;
			$(element).trigger('refresh.owl.carousel');
		});
	}


})();

/*-----------Start layout-setting  js--------------*/

$('.layout-setting').on("click", function (e) {
	if (!(document.querySelector('body').classList.contains('dark-mode'))) {
		$('body').addClass('dark-mode');
		$('body').removeClass('transparent-mode');

		localStorage.setItem('bizdiredarkMode', true);
		localStorage.removeItem('bizdirelightMode');
		localStorage.removeItem('bizdiretransparentMode');

		$('#myonoffswitch2').prop('checked', true);

	} else {
		$('body').removeClass('dark-mode');
		$('body').addClass('light-mode');
		$('body').removeClass('transparent-mode');

		localStorage.setItem('bizdirelightMode', true);
		localStorage.removeItem('bizdiredarkMode');
		localStorage.removeItem('bizdiretransparentMode');

		$('#myonoffswitch1').prop('checked', true);
	}
});

/*-----------End layout-setting  js--------------*/

/*-----------Start Switcher js--------------*/

// ---------------Start LTR-----------------//
$('#myonoffswitch23').click(function () {
	if (this.checked) {
		$("#global-loader").fadeOut("slow");
		// checkDir();
		$('body').addClass('ltr');
		$("html[lang=en]").attr("dir", "ltr");
		$('body').removeClass('rtl');
		localStorage.setItem('bizdireltr', true)
        localStorage.removeItem('bizdirertl')
		$("head link#style").attr("href", $(this));
		(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
		var carousel = $('.owl-carousel');
		$.each(carousel, function (index, element) {
			// element == this
			var carouselData = $(element).data('owl.carousel');
			carouselData.settings.rtl = false; //don't know if both are necessary
			carouselData.options.rtl = false;
			$(element).trigger('refresh.owl.carousel');
			// directionCheck('ltr');
		});
	}
});
// ---------------End LTR-----------------//

// ---------------Start RTL-----------------//
$('#myonoffswitch24').click(function () {
	if (this.checked) {
		$("#global-loader").fadeOut("slow");
		$('body').addClass('rtl');
		$("html[lang=en]").attr("dir", "rtl");
		$('body').removeClass('ltr');
		localStorage.setItem('bizdirertl', true)
        localStorage.removeItem('bizdireltr')
		$("head link#style").attr("href", $(this));
		(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
		var carousel = $('.owl-carousel');
		$.each(carousel, function (index, element) {
			// element == this
			var carouselData = $(element).data('owl.carousel');
			carouselData.settings.rtl = true; //don't know if both are necessary
			carouselData.options.rtl = true;
			$(element).trigger('refresh.owl.carousel');
		}); 
	}
});
// ---------------End RTL-----------------//



// ---------------Start Light-mode-----------------//
$(document).on("click", '#myonoffswitch1', function () {
	if (this.checked) {
		$('body').addClass('light-mode');
		$('body').removeClass('dark-mode');
		$('body').removeClass('transparent-mode');

		// remove dark theme properties	
		localStorage.removeItem('bizdiredarkPrimary')
		localStorage.removeItem('bizdiredarksecondary')
		// remove transparent theme properties	
		localStorage.removeItem('bizdiretransparentPrimary')
		localStorage.removeItem('bizdiretransparentsecondary')

		// remove light theme properties
		localStorage.removeItem('bizdireprimaryColor')
		localStorage.removeItem('bizdireprimaryHoverColor')
		localStorage.removeItem('bizdireprimaryBorderColor')
		localStorage.removeItem('bizdireprimaryTransparent')
		localStorage.removeItem('bizdiresecondaryColor')
		localStorage.removeItem('bizdiresecondaryHoverColor')
		localStorage.removeItem('bizdiresecondaryTransparentColor')
		localStorage.removeItem('bizdiretransparentcolor')
		localStorage.removeItem('bizdiretransparentcolor2')

		localStorage.setItem('bizdirelightMode', true);
        localStorage.removeItem('bizdiredarkMode');
        localStorage.removeItem('bizdiretransparentMode');


		// $('#myonoffswitch1').prop('checked', true);
		// $('#myonoffswitch2').prop('checked', false);
		// $('#myonoffswitch3').prop('checked', false);

		const root = document.querySelector(':root');
		root.style = "";
		names()
	} else {
		$('body').removeClass('light-mode');
		localStorage.removeItem("light-mode");
	}
	localStorageBackup();
});
// ---------------End Light-mode-----------------//

// ---------------Start Dark-mode-----------------//
$(document).on("click", '#myonoffswitch2', function () {
	if (this.checked) {
		$('body').addClass('dark-mode');
		$('body').removeClass('light-mode');
		$('body').removeClass('transparent-mode');

		// remove dark theme properties	
		localStorage.removeItem('bizdiredarkPrimary')
		localStorage.removeItem('bizdiredarksecondary')
		// remove transparent theme properties	
		localStorage.removeItem('bizdiretransparentPrimary')
		localStorage.removeItem('bizdiretransparentsecondary')

		// remove light theme properties
		localStorage.removeItem('bizdireprimaryColor')
		localStorage.removeItem('bizdireprimaryHoverColor')
		localStorage.removeItem('bizdireprimaryBorderColor')
		localStorage.removeItem('bizdireprimaryTransparent')
		localStorage.removeItem('bizdiresecondaryColor')
		localStorage.removeItem('bizdiresecondaryHoverColor')
		localStorage.removeItem('bizdiresecondaryTransparentColor')
		localStorage.removeItem('bizdiretransparentcolor')
		localStorage.removeItem('bizdiretransparentcolor2')

		localStorage.setItem('bizdiredarkMode', true);
        localStorage.removeItem('bizdirelightMode');
        localStorage.removeItem('bizdiretransparentMode');


		// $('#myonoffswitch1').prop('checked', false);
		// $('#myonoffswitch2').prop('checked', true);
		// $('#myonoffswitch3').prop('checked', false);
		const root = document.querySelector(':root');
		root.style = "";
		names()
	} else {
		$('body').removeClass('dark-mode');
		localStorage.removeItem("dark-mode");
	}
	localStorageBackup()
});
// ---------------End Dark-mode-----------------//

// ---------------Start Transparent -mode-----------------//
$(document).on("click", '#myonoffswitch3', function () {
	if (this.checked) {
		$('body').addClass('transparent-mode');
		$('body').removeClass('dark-mode');
		$('body').removeClass('light-mode');

		// remove dark theme properties	
		localStorage.removeItem('bizdiredarkPrimary')
		localStorage.removeItem('bizdiredarksecondary')
		// remove transparent theme properties	
		localStorage.removeItem('bizdiretransparentPrimary')
		localStorage.removeItem('bizdiretransparentsecondary')

		// remove light theme properties
		localStorage.removeItem('bizdireprimaryColor')
		localStorage.removeItem('bizdireprimaryHoverColor')
		localStorage.removeItem('bizdireprimaryBorderColor')
		localStorage.removeItem('bizdireprimaryTransparent')
		localStorage.removeItem('bizdiresecondaryColor')
		localStorage.removeItem('bizdiresecondaryHoverColor')
		localStorage.removeItem('bizdiresecondaryTransparentColor')
		localStorage.removeItem('bizdiretransparentcolor')
		localStorage.removeItem('bizdiretransparentcolor2')

		localStorage.setItem('bizdiretransparentMode', true);
        localStorage.removeItem('bizdirelightMode');
        localStorage.removeItem('bizdiredarkMode');


		// $('#myonoffswitch1').prop('checked', false);
		// $('#myonoffswitch2').prop('checked', false);
		// $('#myonoffswitch3').prop('checked', true);
		const root = document.querySelector(':root');
		root.style = "";
		names()
	} else {
		$('body').removeClass('transparent-mode');
		localStorage.removeItem("transparent-mode");
	}
	localStorageBackup()
});
// ---------------End Transparent-mode-----------------//

/*-----------End Switcher js--------------*/
// $('body').addClass('rtl');

function resetData() {
	$('#myonoffswitch1').prop('checked', true);
	$('#myonoffswitch23').prop('checked', true);
	$('#myonoffswitch2').prop('checked', false);
	$('#myonoffswitch3').prop('checked', false);
	names();
	$('body')?.removeClass('light-mode');
	$('body')?.removeClass('dark-mode');
	$('body')?.removeClass('transparent-mode');
	names();

	$('body').addClass('ltr');
	$("html[lang=en]").attr("dir", "ltr");
	$('body').removeClass('rtl');
	localStorage.setItem('bizdireltr', true)
	localStorage.removeItem('bizdirertl')
	$("head link#style").attr("href", $(this));
	(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
	var carousel = $('.owl-carousel');
	$.each(carousel, function (index, element) {
		// element == this
		var carouselData = $(element).data('owl.carousel');
		carouselData.settings.rtl = false; //don't know if both are necessary
		carouselData.options.rtl = false;
		$(element).trigger('refresh.owl.carousel');
		// directionCheck('ltr');
	});
}