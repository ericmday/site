window.onload = function() {
//    alert('Page loaded');
    document.querySelector("a[href='/content']").remove();
    document.querySelector(".notion-navbar").remove();
  };

    var lastScrollTop = 0;
	$(window).scroll(function () {
		var st = $(this).scrollTop();
        var nav = $('.nav');
		if (st < 100) {
            nav.removeClass('hide');
		} else if (st > 0 && st < $(document).height() - $(window).height()) {
			if (st > lastScrollTop && !nav.hasClass('nav-mobile')) {
				nav.addClass('hide');
			} else {
				nav.removeClass('hide');
			}
			lastScrollTop = st;
		}
	}); 
