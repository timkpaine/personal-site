$(document).ready(function(){
/*
   $(".maystreet").mouseenter(function() {
        $(this).fadeTo('fast',1);
    });
    $(".maystreet").mouseleave(function() {
        $(this).fadeTo('fast',0.3);
    });
*/


$("#courses div.hide ").hide();
$("#projects div.hide ").hide();
$("#awards div.hide ").hide();
$("#precollege div.hide ").hide();
$("#clubs div.hide ").hide();



$("h2#education").click(function(){
    $("#education div.hide ").toggle();
});
$("h2#experience").click(function(){
    $("#experience div.hide ").toggle();
});

$("h2#publications").click(function(){
    $("#publications div.hide ").toggle();
});

$("h2#skills").click(function(){
    $("#skills div.hide ").toggle();
});

$("h2#courses").click(function(){
    $("#courses div.hide ").toggle();
});

$("h2#projects").click(function(){
    $("#projects div.hide ").toggle();
});

$("h2#awards").click(function(){
    $("#awards div.hide ").toggle();
});

$("h2#precollege").click(function(){
    $("#precollege div.hide ").toggle();
});

$("h2#clubs").click(function(){
    $("#clubs div.hide ").toggle();
});


});
