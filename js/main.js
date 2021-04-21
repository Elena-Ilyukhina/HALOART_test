//activate/deactivate menu punct
$(".menu-navigation").hover(
    function() {
        let imgSrc = $(this).find('img').attr('src');
        let srcFullName = imgSrc.split('.');
        let srcName = srcFullName[0];
        let srcExt = srcFullName[1];

        $(this).find('img').attr('src', srcName + '_hover.' + srcExt);

        // console.log(srcName + '_hover.' + srcExt);
      
    }, function() {
        let imgSrc = $(this).find('img').attr('src');
        let srcFullName = imgSrc.split('_hover.');
        let srcName = srcFullName[0];
        let srcExt = srcFullName[1];

        $(this).find('img').attr('src', srcName + '.' + srcExt);
    }
);

//feedback
$("#feedback-form").hide();
$("#feedback-btn").click(function() {
        $("#feedback-form").toggle();
    }
);

$(window).resize(function(){
    if ($(window).width() <= 600){ 
        $(".hidden-form").hide();
    } else {
        $(".hidden-form").show();
    }
});

//menu
$(window).scroll(function() {
    if ($(window).scrollTop() > 100 && $(window).width() >= 768)  {                  
        $("#navigation").css('display', 'flex');
    } else {
        $("#navigation").css('display', 'none');
    }
});

//popup
$("#popup").hide();
$(".btn").click(function(e) {
        // e.preventDefault();
        $("#popup").show();
        return false;
    }
);

$("#btn-send-popup").click(function() {
        $("#popup").hide();
    }
);

//media request scroll
$(window).resize(function(){
    if ($(window).width() <= 768){ 
        $('.scroll-hand-one').attr('src', 'img/touch_icon_one.png');
        $('.scroll-hand-two').attr('src', 'img/touch_icon_two.png');
        $('#list-down').text('Листай вниз');
    } else {
        $('.scroll-hand-one').attr('src', 'img/scroll.png');
        $('.scroll-hand-two').attr('src', 'img/scroll-down.png');
        $('#list-down').text('Крути вниз');
    } 
});

//hamburger menu
$('#nav-icon1').click(function(){
    $(this).toggleClass('open');
    if (($(".menu__box").css('display')) == 'none'){
        $(".menu__box").css('display', 'flex');
    } else {
        $(".menu__box").css('display', 'none');
    }
$('.control-nav').toggleClass('control-nav-bg');
});

$(window).scroll(function() {
    if ($(window).width() < 768)  {                  
        $(".hamburger-menu").show();
    } else {
        $(".hamburger-menu").hide();
    }
});

//activate/deactivate menu punct hamburger
$(".menu__item").hover(
    function() {
        let imgSrc = $(this).find('img').attr('src');
        let srcFullName = imgSrc.split('.');
        let srcName = srcFullName[0];
        let srcExt = srcFullName[1];

        $(this).find('img').attr('src', srcName + '_hover.' + srcExt);
      
    }, function() {
        let imgSrc = $(this).find('img').attr('src');
        let srcFullName = imgSrc.split('_hover.');
        let srcName = srcFullName[0];
        let srcExt = srcFullName[1];

        $(this).find('img').attr('src', srcName + '.' + srcExt);
    }
);