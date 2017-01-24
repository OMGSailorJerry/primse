$(document).ready(function() {
  
    $('[data-type=sendButton]').on('click', function(){ 
  
        $('.main__form').addClass('main__form_hide');
  
        $('.main__form__alert_hide').removeClass('main__form__alert_hide');
  
  });

    var rellax = new Rellax('.rellax', {

        // center: true

    });

});

function reloadPage() {

    location.reload();

}