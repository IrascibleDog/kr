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

    $('#left-slider').rhinoslider({
        controlsMousewheel: false,
        controlsPlayPause: false,
        showBullets: 'always',
        changeBullets: 'before',
        showControls: 'never'
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

    $('.top-buttons>.login').hover(
        function(){
            $('#login-form').show(180);
        },
        function(){
            $('#login-form').hide(180);
        }
    );

    $('.video-block>.right').hover(
        function(){
            $('.video-block>.right>.slide-right').show(250);
            $('.video-block>.right>.play-button').show(250);
        },
        function(){
            $('.video-block>.right>.slide-right').hide(250);
            $('.video-block>.right>.play-button').hide(250);
        }
    );

    var count=1;
    $("#show-head-mid").click(function(){
        $('.show-head').slideToggle(300);
        if (count== 1){
            $('#page').css('margin-top','700px');
            count=0;
        }
        else{
            setTimeout(function(){
                $('#page').css('margin-top','15px');

                },400);
            count=1;
        }
    });

    $("#first-text-cut").dotdotdot({
        after: "a.readmore"
    });

    $("#second-text-cut").dotdotdot({
        after: "a.readmore"
    });

    $("#third-text-cut").dotdotdot({
        after: "a.readmore"
    });

    $('#login-password').focus(function(){
        $(this).val('');
    }).blur(function(){
        if ($(this).val().length<=5){
            $(this).css({border: '1px solid red'});
        }
        else
        {
            $(this).css({border: '1px solid green'});
        }
    });

    var entry = $('.required-entry');
    entry.blur(function(){
        if ($(this).val() != ""){
            $(this).css({border: '1px solid green'});
        }
        else
        {
            $(this).css({border: '1px solid red'});
        }
    });

    var login = $('.validate-email');
    login.blur(function () {
        var val = login.val();
        if (validateEmail(val) == true){
            $(this).css({border: '1px solid green'});
        }
        else{
            $(this).css({border: '1px solid red'});
        }
    });
});
function validateEmail(elementValue){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}