


// Javacript of responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click",() =>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// Javacript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manul){
    btns.forEach((btn) => {
        btn.classList.remove("active")
    });

    slides.forEach((slider) => {
        slider.classList.remove("active")
    });

    contents.forEach((content) => {
        content.classList.remove("active")
    });

    btns[manul].classList.add("active");
    slides[manul].classList.add("active");
    contents[manul].classList.add("active");

}

btns.forEach((btn,i) => {
    btn.addEventListener("click",() => {
        sliderNav(i);
    });
});

$(window).load(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
});


(function($) {

    // Elements Animation
    if($('.wow').length){
        var wow = new WOW({
            mobile:       false
        });
        wow.init();
    }

})(window.jQuery);

var Mazo = function(){
    var handleheartBlast = function (){
        $(".heart").on("click", function() {
            $(this).toggleClass("heart-blast");
        });
    }


    var handleSupport = function(){
        var support = '<a href="https://github.com/lakshan-a" target="_blank" class="bt-buy-now theme-btn"><i class="fas fa-shopping-cart"></i><span>Buy Now</span></a><!-- Go to www.addthis.com/dashboard to customize your tools --><script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b221c5e31b4e54b"></script>';
        jQuery('body').append(support);
    }

    /* Function ============ */
    return {
        init:function(){
            handleheartBlast();
            handleSupport();
        },

        load:function(){
            handleRadialProgress();
        },

        resize:function(){
            handleFinalCountDown();
        }
    }

}();

/* Document.ready Start */
jQuery(document).ready(function() {
    'use strict';
    Mazo.init();

    $('a[data-toggle="tab"]').on('click', function(){
        // todo remove snippet on bootstrap v4
        $($(this).attr('href')).show().addClass('show active').siblings().hide();
    });

    jQuery('.navicon').on('click',function(){
        $(this).toggleClass('open');
    });

});