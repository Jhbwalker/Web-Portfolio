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
sr.reveal('.skills', {
    duration: 2000,
    origin: 'left',
    easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',
    delay: 1000
});
sr.reveal('#ds1', {
    duration: 1000,
    origin: 'right',
    easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',
    delay: 1000
});
sr.reveal('#ds2', {
    duration: 2000,
    origin: 'right',
    easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',
    delay: 1000
});
sr.reveal('#ds3', {
    duration: 3000,
    origin: 'right',
    easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',
    delay: 1000
});

sr.reveal('.outerCircle', {
    duration: 2000,
    origin: 'top',
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    distance: '100px',
    delay: 1000
});
sr.reveal('.imgBox',
    {
        duration: 2000,
        origin:'top',
       distance: '400px'
    }, 250);
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

(function($, win) {
    $.fn.inViewport = function(cb) {
        return this.each(function(i,el) {
            function visPx(){
                var elH = $(el).outerHeight(),
                    H = $(win).height(),
                    r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
                return cb.call(el, Math.max(0, t>0? Math.min(elH, H-t) : (b<H?b:H)));
            }
            visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));
$(".barGrowth").inViewport(function(px){
    if(px) $(this).addClass("trigger") ;
});

