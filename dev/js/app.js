$(document).ready(function() {
  
    $('[data-type=sendButton]').on('click', function(){ 
  
        $('.main__form').addClass('main__form_hide');
  
        $('.main__form__alert_hide').removeClass('main__form__alert_hide');
  
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
                // debugger
                $head.attr('class', 'ha-header ' + animClassDown);
            }
            else if( direction === 'up' && animClassUp ){
                $head.attr('class', 'ha-header ' + animClassUp);
            }
        }, { offset: '220px' } );
    } );
});

function reloadPage() {

    location.reload();

}