const SLIDER = document.querySelector("#slider");

let sliderSection =  document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);

function next(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    SLIDER.style.marginLeft = "-200%";
    SLIDER.style.transition = "all .5s";

    setTimeout(function(){
        SLIDER.style.transition = "none";
        SLIDER.insertAdjacentElement('beforeend',sliderSectionFirst);
        SLIDER.style.marginLeft = "-100%";
    },500);
}

function prev(){
    let sliderSection =  document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    SLIDER.style.marginLeft = "0";
    SLIDER.style.transition = "all .5s";

    setTimeout(function(){
        SLIDER.style.transition = "none";
        SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
        SLIDER.style.marginLeft = "-100%";
    },500);
}

btnRight.addEventListener('click', function(){
    next();
} );

btnLeft.addEventListener('click', function(){
    prev();
} );

setInterval(function(){
    next();
},10000)