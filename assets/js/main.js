mainHead = $("#header");
subHead = $(".subHead");


$(window).scroll(()=>{
    let y = $(window).scrollTop();
    if(y > subHead.height()){
        subHead.hide()
        mainHead.addClass("fixed-top")
    }else{
        subHead.show()
        mainHead.removeClass("fixed-top")
        
    }
})

$(document).ready(function(){
    $('.sale').slick({
        infinite: true,
        speed: 300,
        rtl: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    });
});