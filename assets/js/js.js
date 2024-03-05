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