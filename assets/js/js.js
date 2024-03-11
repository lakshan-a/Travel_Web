/*/!*=============== SHOW MENU ===============*!/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/!* Menu show *!/
navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
})

/!* Menu hidden *!/
navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
})

/!*=============== SEARCH ===============*!/
const search = document.getElementById('search'),
    searchBtn = document.getElementById('search-btn'),
    searchClose = document.getElementById('search-close')

/!* Search show *!/
searchBtn.addEventListener('click', () =>{
    search.classList.add('show-search')
})

/!* Search hidden *!/
searchClose.addEventListener('click', () =>{
    search.classList.remove('show-search')
})

/!*=============== LOGIN ===============*!/
const login = document.getElementById('login'),
    loginBtn = document.getElementById('login-btn'),
    loginClose = document.getElementById('login-close')

/!* Login show *!/
loginBtn.addEventListener('click', () =>{
    login.classList.add('show-login')
})

/!* Login hidden *!/
loginClose.addEventListener('click', () =>{
    login.classList.remove('show-login')
})*/

const  header =document.querySelector("header");

window.addEventListener("scroll",function (){
    header.classList.toggle("sticky",window.scrollY > 60)
});



/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
    searchBtn = document.getElementById('search-btn'),
    searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
    search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
    search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
    loginBtn = document.getElementById('login-btn'),
    loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
    login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
    login.classList.remove('show-login')
})


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

/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});


(function($) {
    function onHoverthreeDmovement() {
        var tiltBlock = $('.js-tilt');
        if(tiltBlock.length) {
            $('.js-tilt').tilt({
                maxTilt: 20,
                perspective:700,
                glare: true,
                maxGlare: 0
            })
        }
    }


    /*	=========================================================================
    When document is Scrollig, do
    ========================================================================== */

    jQuery(document).on('ready', function () {
        (function ($) {
            onHoverthreeDmovement();
        })(jQuery);
    });

})(window.jQuery);




