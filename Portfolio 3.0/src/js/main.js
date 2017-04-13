$(window).scroll(function () {
    var wScroll = $(window).scrollTop();
    var speed = 0.5;
    $('.title').each(function () {
        var $this = $(this);
        var $parent = this.parent().css("background");
        var topOffset = $parent.offset().top;
        var height = $parent.outerHeight(true);
        var parallaxSize = (scroll - topOffset) * speed;

        //Preventing parallax when not in view
        if(scroll > topOffset + height){
            return;
        }
        $this.css({
            'transform': scroll >= topOffset ? ('translateY(' + parallaxSize + 'px)') : ''
        });

    });

});
