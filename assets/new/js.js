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


$('.active-gallery-carousel').owlCarousel({
    items: 2,
    // autoplay: 2500,
    loop: true,
    margin: 30,
    nav: true,
    navText: [ "<img src='./assets/img/cprev.png'>", "<img src='./assets/img/cnext.png'>" ],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        420: {
            items: 1
        },
        575: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 2
        },
        1680: {
            items: 2
        }
    }
});