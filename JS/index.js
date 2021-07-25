$(document).ready(function(){
    $("section .header").addClass('text-center text-white');
    // $("#what-we-do").addClass('justify-content-center ml-5');
    $("#design").click(function(){$("#design-hide").toggle(500)});
    $("#development").click(function(){$("#development-hide").toggle(500)});
    $("#product").click(function(){$("#product-hide").toggle(500)});
    $("#contact-us").addClass("text-center");
    $("#icons").addClass("text-center mt-3");
    $("#contains").addClass("text-center");
})

// Form verification
function verification(){
    var nameInput = document.getElementById("name-input").value;
    var mailInput = document.getElementById("mail-input").value;
    if(nameInput==""){
        alert("Please fill out the Name input");
        return false
    }
    if(mailInput==""){
        alert("Please fill out your email")
        return false
    }
    alert("Welcome "+ nameInput);
}
