$(document).ready(function(){
    $("section .header").addClass('text-center text-white');
    $("#what-we-do").addClass('justify-content-center ml-5');
    $("#design").click(function(){$("#design-hide").toggle(500)});
    $("#development").click(function(){$("#development-hide").toggle(500)});
    $("#product").click(function(){$("#product-hide").toggle(500)});
    $("#icons").addClass("text-center");
})
