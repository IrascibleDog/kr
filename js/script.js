/**
 * Created by freddy on 02.04.15.
 */
$(document).ready(function(){
    $('#slider').rhinoslider({
        controlsMousewheel: false,
        controlsPlayPause: false,
        showBullets: 'always',
        changeBullets: 'before',
        showControls: 'always'
});
    $( "#datepicker" ).datepicker({
        inline: true
    });
    $( "#tabs" ).tabs();
    $(".menu-block > .left-menu > li").hover(
        function(){
            $("div", this).show(180);
            $(".social-block").css("margin-left","255px");
        },
        function(){
            $("div", this).hide(180);
            $(".social-block").css("margin-left","15px");
        }
    );
    $("#show-head-mid").click(function(){
            $('.show-head').slideToggle(300);
    });
});