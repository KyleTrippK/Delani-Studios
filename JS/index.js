$(document).ready(function(){
    $("section .header").addClass('text-center text-white');
    // $("#what-we-do").addClass('justify-content-center ml-5');
    $("#design").click(function(){$("#design-hide").toggle(500)});
    $("#design").click(function(){$("#hidden").toggle(100)});
    $("#development").click(function(){$("#development-hide").toggle(500)});
    $("#product").click(function(){$("#product-hide").toggle(500)});
    $("#contact-us").addClass("text-center");
    $("#icons").addClass("text-center mt-3");
    $("#contains").addClass("text-center");
    $(".submit-div").addClass("text-center");
    //hover on portfolio 1
    $("#bailey1, baileyword1").hover(function(){
        $("#baileyword1").css("display", "block").fadeIn();
    },
    function(){
        $("#baileyword1").fadeOut();
    })
    $("#bailey1")
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



    