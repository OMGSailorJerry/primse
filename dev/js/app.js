$(document).ready(function() {
  
    $('[data-type=sendButton]').on('click', function(){ 
  
        $('.main__form').addClass('main__form_hide');
  
        $('.main__form__alert_hide').removeClass('main__form__alert_hide');
  
    });

    $('.burger').on('click', function() {
        $( '#ha-header' ).css( "z-index", "65" );
        $('.nav__links').addClass('nav__links_mobile-open');
        
    
    });

    $('.nav__links__close, .nav__links__item').on('click', function(){
        
        $('.nav__links').removeClass('nav__links_mobile-open');
        $( '#ha-header' ).css( "z-index", "12" );
    });

    var rellax = new Rellax('.rellax', {

        // center: true

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
		if( $(this).scrollTop() > $('wrapper')['0'].clientHeight - 1000 ) { 
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

});

function reloadPage() {

    location.reload();

}