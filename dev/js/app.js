$(document).ready(function() {
    $('.main__form').removeClass('main__form_hide');
    
    $('[data-type=sendButton]').on('click', function(e){ 
        $('.main__form__alert_hide').removeClass('main__form__alert_hide');
        $('.main__form').addClass('main__form_hide');
        
        e.preventDefault();
    });

    $('.md-closeDone').on('click', function(){
        $('.main__form').removeClass('main__form_hide');
        $('.main__form__alert').addClass('main__form__alert_hide');
        $('#contact-form').trigger( 'reset' );

    })

    $('.burger').on('click', function() {
        $( '#ha-header' ).css( "z-index", "65" );
        $('.nav__links').addClass('nav__links_mobile-open');
        $('#menu').css('visibility', 'hidden');
    });

    $('.nav__links__close, .nav__links__item').on('click', function(){
        
        $('.nav__links').removeClass('nav__links_mobile-open');
        $( '#ha-header' ).css( "z-index", "12" );
        $('#menu').css('visibility', 'visible');
    });

    var $head = $( '#ha-header' );

    $( '.ha-waypoint' ).each( function(i) {
        var $el = $( this ),
        
        animClassDown = $el.data( 'animateDown' ),
        
        animClassUp = $el.data( 'animateUp' );

        $el.waypoint( function( direction ) {
            if( direction === 'down' && animClassDown ) {
                $('.nav__links').removeClass('nav__links_mobile-open');
                $( '#ha-header' ).css( "z-index", "12" );
                $head.attr('class', 'ha-header ' + animClassDown);
            }
            else if( direction === 'up' && animClassUp ){
                $head.attr('class', 'ha-header ' + animClassUp);
            }
        }, { offset: '220px' } );
    });
    
    // console.log($('wrapper')['0'].clientHeight);
    // browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 1500,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        // offset_opacity = $('wrapper')['0'].clientHeight - 500,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible').removeClass('cd-fade-out') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        // debugger
        // console.log($('html')['0'].offsetHeight, $(this).scrollTop() + $('html')['0'].clientHeight )
		if( $(this).scrollTop() > $('html')['0'].offsetHeight - $('html')['0'].clientHeight - $('.wrapper-base__link')[0].clientHeight - $('footer')[0].clientHeight) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

    
    $('li[data-modal=modal-works]').on('click', function(){
        $('body, html').css('overflow', 'hidden');

        $('.md-close').on('click', function(){
            $('body, html').css('overflow', 'auto');
        })
    })

    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 700);

    var autoFade = function () {
        $(".fadeInAndScrollThis").each(function () {
            var $this = $(this);
            if (this.getBoundingClientRect().top < height * 0.90) {
                $this.css({"opacity": "1", "transition": "opacity 1s, transform 1s", "transform": "none"});
            }
        })
    };

    autoFade();

    var scrollFade = function () {
        $(".fadeInAndScrollThis").each(function () {
            var $this = $(this);
            if (this.getBoundingClientRect().top < height * 0.90) {
                $this.css({"opacity": "1", "transition": "opacity 1s, transform 1s", "transform": "none"});
            }
            else if (this.getBoundingClientRect().bottom > height * 0.90) {
                $this.css({
                    "opacity": "0",
                    "transition": "opacity 1s, transform 1s",
                    "transform": "translate(0px, 60px)"
                });
            }
        });
    };

    $(window).resize(function () {
        height = Math.max(document.documentElement.clientHeight, window.innerHeight || 700);
        scrollFade();
    });

    $(document).scroll(function (e) {
        scrollFade();
    });
});

function reloadPage() {
    location.reload();
}