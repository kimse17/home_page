$(function () {
    var item_width = $('.img_all>img').outerWidth(true);
    $('.img_all img:first').before($('.img_all img:last'));
    $('.img_all').css({
        'left': -item_width + 'px'
    });
    $('.prev').click(function () {
        var left_indent = parseInt($(".img_all").css('left')) + item_width;
        $('.img_all').animate({
            'left': left_indent + 'px'
        }, 700, function () {
            $('.img_all img:frist').before($('.img_all img:last'));
            $('.img_all').css({
                'left': -item_width + 'px'
            });
        });
    });
    $('.next').click(function () {
        var left_indent = parseInt($('.img_all').css('left')) - item_width;
        $('.img_all').animate({
            'left': left_indent + 'px'
        }, 700, function () {
            $('.img_all img:last').after($('.img_all img:first'));
            $('.img_all').css({
                'left': -item_width + 'px'
            });
        });
    });

    function slide_ani() {
        var left_indent = parseInt($('.img_all').css('left')) - item_width;
        $('.img_all').stop().animate({
            'left': left_indent + 'px'
        }, 700, function () {
            $('.img_all img:last').after($('.img_all img:first'));
            $('.img_all').css('left', -item_width + 'px');
        });
    }
    function stat_timer() {
        timer = setInterval(slide_ani, 2000);
    }
    function stop_timer() {
        clearInterval(timer);
    }

    //   $('.slide_img').hover(stop_timer, stat_timer);
    stat_timer()
})


//  메뉴 마우스 호버
$(function () {
    $("#header_02").on("mouseover", function () {
        $(".header_row_02_all").stop(true).animate({
            height: "250px"
        }, 200);
    })
    $("#header_02").on("mouseout", function () {
        $(".header_row_02_all").stop(true).animate({
            height: "0px"
        }, 200);
    })

    $(".header_row_02_all").on("mouseover", function () {
        $(".header_row_02_all").stop(true).animate({
            height: "250px"
        }, 200);
    })
    $(".header_row_02_all").on("mouseout", function () {
        $(".header_row_02_all").stop(true).animate({
            height: "0px"
        }, 200);
    })
})


function showText() {
    var textOverlay = document.getElementById("textOverlay");

    if (textOverlay.style.opacity === "1") {
        textOverlay.style.opacity = "0";
    } else {
        textOverlay.style.opacity = "1";
    }
}
function showText_01() {
    var textOverlay_01 = document.getElementById("textOverlay_01");

    if (textOverlay_01.style.opacity === "1") {
        textOverlay_01.style.opacity = "0";
    } else {
        textOverlay_01.style.opacity = "1";
    }
}