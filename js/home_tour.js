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
function showText_02() {
    var textOverlay_02 = document.getElementById("textOverlay_02");

    if (textOverlay_02.style.opacity === "1") {
        textOverlay_02.style.opacity = "0";
    } else {
        textOverlay_02.style.opacity = "1";
    }
}
function showText_03() {
    var textOverlay_03 = document.getElementById("textOverlay_03");

    if (textOverlay_03.style.opacity === "1") {
        textOverlay_03.style.opacity = "0";
    } else {
        textOverlay_03.style.opacity = "1";
    }
}
function showText_04() {
    var textOverlay_04 = document.getElementById("textOverlay_04");

    if (textOverlay_04.style.opacity === "1") {
        textOverlay_04.style.opacity = "0";
    } else {
        textOverlay_04.style.opacity = "1";
    }
}
function showText_05() {
    var textOverlay_05 = document.getElementById("textOverlay_05");

    if (textOverlay_05.style.opacity === "1") {
        textOverlay_05.style.opacity = "0";
    } else {
        textOverlay_05.style.opacity = "1";
    }
}
function showText_06() {
    var textOverlay_06 = document.getElementById("textOverlay_06");

    if (textOverlay_06.style.opacity === "1") {
        textOverlay_06.style.opacity = "0";
    } else {
        textOverlay_06.style.opacity = "1";
    }
}
function showText_07() {
    var textOverlay_07= document.getElementById("textOverlay_07");

    if (textOverlay_07.style.opacity === "1") {
        textOverlay_07.style.opacity = "0";
    } else {
        textOverlay_07.style.opacity = "1";
    }
}
function showText_08() {
    var textOverlay_08 = document.getElementById("textOverlay_08");

    if (textOverlay_08.style.opacity === "1") {
        textOverlay_08.style.opacity = "0";
    } else {
        textOverlay_08.style.opacity = "1";
    }
}
function showText_09() {
    var textOverlay_09 = document.getElementById("textOverlay_09");

    if (textOverlay_09.style.opacity === "1") {
        textOverlay_09.style.opacity = "0";
    } else {
        textOverlay_09.style.opacity = "1";
    }
}
function showText_10() {
    var textOverlay_10 = document.getElementById("textOverlay_10");

    if (textOverlay_10.style.opacity === "1") {
        textOverlay_10.style.opacity = "0";
    } else {
        textOverlay_10.style.opacity = "1";
    }
}
function showText_11() {
    var textOverlay_11 = document.getElementById("textOverlay_11");

    if (textOverlay_11.style.opacity === "1") {
        textOverlay_11.style.opacity = "0";
    } else {
        textOverlay_11.style.opacity = "1";
    }
}
function showText_12() {
    var textOverlay_12 = document.getElementById("textOverlay_12");

    if (textOverlay_12.style.opacity === "1") {
        textOverlay_12.style.opacity = "0";
    } else {
        textOverlay_12.style.opacity = "1";
    }
}
function showText_13() {
    var textOverlay_13 = document.getElementById("textOverlay_13");

    if (textOverlay_13.style.opacity === "1") {
        textOverlay_13.style.opacity = "0";
    } else {
        textOverlay_13.style.opacity = "1";
    }
}
