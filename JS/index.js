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
    $("#bailey1, #baileyword1").hover(function(){
        $("#baileyword1").css("display", "block").fadeIn();
    },
    function(){
        $("#baileyword1").css("display", "block").fadeOut();
    });
// ...alert.
    $("#bailey2, #baileyword2").hover(function(){
        $("#baileyword2").css("display", "block").fadeIn();
    },
    function(){
        $("#baileyword2").css("display", "block").fadeOut();
    });


    //;;;';L.;J
    $("#bailey3, #baileyword3").hover(function(){
        $("#baileyword3").css("display", "block").fadeIn();
    },
    function(){
        $("#baileyword3").css("display", "block").fadeOut();
    });
    //9
    $("#bailey4, #baileyword4").hover(function(){
        $("#baileyword4").css("display", "block").fadeIn();
    },
    function(){
        $("#baileyword4").css("display", "block").fadeOut();
    });


    $("#bailey5, #baileyword5").hover(function(){
        $("#baileyword5").css("display", "block").fadeIn();
    },
    function(){
        $("#baileyword5").css("display", "block").fadeOut();
    });

    $("#bailey6, #baileyword6").hover(function(){
        $("#baileyword6").css("display", "block").fadeIn();
    },
    function(){
        $("#baileyword6").css("display", "block").fadeOut();
    });

    $("#bailey7, #baileyword7").hover(function(){
        $("#baileyword7").css("display", "block").fadeIn();
    },
    function(){
        $("#baileyword7").css("display", "block").fadeOut();
    });

    $("#bailey8, #baileyword8").hover(function(){
        $("#baileyword8").css("display", "block").fadeIn();
    },
    function(){
        $("#baileyword8").css("display", "block").fadeOut();
    });
    
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



    