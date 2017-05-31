$(document).ready(function () {
    $('.toggle a').click(function () {
        $('.menu').toggleClass('active');
    })
});
$(document).ready(function () {
    $('.sidebarBtn').click(function () {
        $('.sidebarB').toggleClass('active');
        $('.sidebarBtn').toggleClass('toggle');
    })
});

// $('.arrow').addClass('origin').clone().insertAfter('.arrow').addClass('cloned').css('position',
//     'fixed').css('top', '0').css('z-index', '20').removeClass('origin').hide();
//
// scrollIntervalID = setInterval(stickyNav, 10);
//
// function stickyNav() {
//     // debugger;
//     var originalElePos = $('.origin').offset();
//     var originElementTop = originalElePos.top;
//
//     if($(window).scrollTop() >= originElementTop){
//         originElement = $('.origin');
//         coordsOriginElement = originElement.offset();
//         leftOfElement = coordsOriginElement.left;
//         widthOfElement = originElement.css('width');
//         $('.cloned').css('left', leftOfElement + 'px').css('top', '0').css('width', widthOfElement).show();
//         $('.origin').css('visibility', 'hidden');
//
//     }else{
//         $('.clone').hide();
//         $('.origin').css('visibility', 'visible');
//     }
// }
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
$('form.ajax').on('submit', function () {
   console.log('trigger');
    var curAtt = $(this),
        url = curAtt.attr('action'),
        method = curAtt.attr('method'),
        data = {};
    curAtt.find(['name']).each(function (index, value) {
        console.log(value);
        var curAtt = $(this), name = curAtt.attr('name'), value = curAtt.val();
        data[name] = value;

    });
    $.ajax({
       url: url,
        type: type,
        data: data,
        success: function (response) {
            console.log(response)
        }
    });
    console.log(data);

    return false;
});

