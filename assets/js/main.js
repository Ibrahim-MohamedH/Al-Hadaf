mainHead = $("#header");
subHead = $(".subHead");


$(window).scroll(()=>{
    let y = $(window).scrollTop();
    if(y > subHead.height() + 2){
        subHead.hide()
        mainHead.addClass("fixed-top")
    }else{
        subHead.show()
        mainHead.removeClass("fixed-top")
        
    }
})

