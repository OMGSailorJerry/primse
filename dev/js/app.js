$(document).ready(function() {
    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        menu: '#menu',
        anchors: ['page0', 'page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['#000', '#bd9663', '#9c2856', '#1e272b', '#479c38', '#633978'],
        navigation: true,
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });
});