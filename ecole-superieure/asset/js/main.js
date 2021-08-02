/**
 * Created by nzazisunda on 02/08/2021.
 */


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
     delay: 3500,
     disableOnInteraction: true,
     },
    effect: "fade"
    /* pagination: {
     el: ".swiper-pagination",
     },*/
});

var swiper_slide = new Swiper(".swiperSlide", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    /* pagination: {
     el: ".swiper-pagination",
     clickable: true,
     },*/
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    }
});

$(function() {
    $('.height').matchHeight();
});