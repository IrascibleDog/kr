/**
 * Created by freddy on 02.04.15.
 */
$(document).ready(function(){
    $('#slider').rhinoslider();
    $( "#datepicker" ).datepicker({
        inline: true
    });
    $( "#tabs" ).tabs();
    $(".menu-block > .left-menu > li").hover(
        function(){
            $("div", this).show(180);
        },
        function(){
            $("div", this).hide(180);
        }
    );
});