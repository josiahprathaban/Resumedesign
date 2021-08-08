$(".menu").click(function(){
    if($(".nav").css("display") == "none") { 
        $(".nav").css("display", "block");
    }
    else{
        $(".nav").css("display", "none");
    }
});

$( window ).resize(function() {
    if ($( window ).width() > 1000) {
        $(".nav").css("display", "block");
    }
    else{
        $(".nav").css("display", "none");
    }
});