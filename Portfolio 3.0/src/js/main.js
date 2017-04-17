$(document).ready(function () {
    $('.toggle a').click(function () {
        $('.menu').toggleClass('active');
    })
});
window.sr = ScrollReveal();
sr.reveal('.read', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.icons', {
    duration: 2000,
    origin: 'left',
    delay: 1000
});
//Scroll function to section
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
