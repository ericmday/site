window.onload = function() {
    //    alert('Page loaded');
    document.querySelector("a[href='/content']").remove();
    document.querySelector(".notion-navbar").remove();
};

// $(document).ready(function() {
//    $('.nav-toggle').click(function() {
//     $(this).toggleClass('nav-toggled');
//     $('.nav-links').toggleClass('nav-links-show');
//     var width = $(window).width();
//     if (width <= 480) {
//         $('.nav').toggleClass('nav-mobile');
//     } else {

//     }
// });

// $(document).keydown(function(e) {
//     if (e.key === 'Escape') {
//         $('.nav-toggle').removeClass('nav-toggled');
//         $('.nav-links').removeClass('nav-links-show');
//         var width = $(window).width();
//         if (width <= 480) {
//             $('.nav').removeClass('nav-mobile');
//         } else {

//         }
//     }
// });
// });

$(document).ready(function() {
    var lastScrollTop = 0;
$(window).scroll(function() {
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
});
