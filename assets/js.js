// Javacript of responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click",() =>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// Javacript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");

var sliderNav = function (manul){
    btns.forEach((btn) => {
        btn.classList.remove("active")
    });

    btns[manul].classList.add("active");
}

btns.forEach((btn,i) => {
    btn.addEventListener("click",() => {
        sliderNav(i);
    });
});