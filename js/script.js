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

    var error = true;
    var entry = $('.required-entry');
    $(entry).focus(function(){
        $(this).val('');
        $(this).css("color","#000");
    });
    entry.blur(function(){
        if ($(this).val() != ""){
            $(this).css({border: '1px solid green'});
            error = false;
        }
        else
        {
            $(this).css({border: '1px solid red'});
            error = true;
            $(this).tooltip({
                items: "[title]",
                content: function() {
                    var element = $( entry );
                    if ( element.is( "[title]" ) ) {
                        return element.attr( "title" );
                    }
                },
                position: {
                    my: "center bottom-20",
                    at: "center top",
                    using: function( position, feedback ) {
                        $( this ).css( position );
                        $( "<div>" )
                            .addClass( "tool-tip-show" )
                            .appendTo( this );
                    }
                }
            });
        }
    });

    var login = $('.validate-email');
    $(login).focus(function(){
        $(this).val('');
        $(this).css("color","#000");
    });
    login.blur(function () {
        login = $(this);
        var val = login.val();
        if (validateEmail(val) == true){
            $(login).css({border: '1px solid green'});
            error = false;
        }
        else{
            $(login).css({border: '1px solid red'});
            error = true;
            $(this).tooltip({
                items: "[title]",
                content: function() {
                    var element = $( login );
                    if ( element.is( "[title]" ) ) {
                        return element.attr( "title" );
                    }
                },
                position: {
                    my: "center bottom-20",
                    at: "center top",
                    using: function( position, feedback ) {
                        $( this ).css( position );
                        $( "<div>" )
                            .addClass( "tool-tip-show" )
                            .appendTo( this );
                    }
                }
            });
        }
    });

    $('#registration-submit').click(function(){
        if (error != true){
            alert( "Login correct!" );
        }
    });

    $('spam-sign').click(function(){
        if (error != true){
            alert( "You joined Newsletter!!" );
        }
    });

    $('#question-send').click(function(){
        if (error != true){
            alert( "We soon will have your question!!!" );
        }
    });

    $('#first-text-cut>.readmore').click(function(){
        $('#popupwrapper').show();
        changeModalText($("#first-text-cut"),$(".video-block .left h1"));
    });

    $('#second-text-cut>.readmore').click(function(){
       $('#popupwrapper').show();
        changeModalText($("#second-text-cut"),$(".second .left h1"));
    });

    $('#third-text-cut>.readmore').click(function(){
        $('#popupwrapper').show();
        changeModalText($("#third-text-cut"),$(".big-info .second-info h1"));
    });

    $('#closeclick').click(function(){
        $('#popupwrapper').hide();
        $('#popup-title').empty();
        $('#popup-text').empty();
    });
});
function validateEmail(elementValue){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}
function changeModalText(Val1, Val2){
    var addtext = Val1.triggerHandler("originalContent");
    $('#popup-text').append(addtext);
    $('#popup-text .readmore').hide();
    addtext = Val2.text();
    $('#popup-title').append(addtext);
}