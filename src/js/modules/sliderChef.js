document.addEventListener("DOMContentLoaded", function () {
    const sliderChef = document.querySelector(".js-sliderChef");
    if (sliderChef) {
        let swiperChef;

        function initSwiperChef() {
            if (!swiperChef) {
                swiperChef = new Swiper(sliderChef, {
                    slidesPerView: 'auto',
                    autoHeight: false,
                    spaceBetween: 16,
                    navigation: {
                        nextEl: '.swiper-button-next-chef',
                        prevEl: '.swiper-button-prev-chef',
                    },
                    pagination: {
                        el: '.swiper-pagination-chef',
                        clickable: true,
                    },
                    breakpoints: {
                      768: {
                        spaceBetween: 24
                      },
                      1024: {
                        spaceBetween: 48,
                        slidesPerView: 1,
                      },
                    }
                });
            }
        }

        window.addEventListener('resize', initSwiperChef);
        window.addEventListener('load', initSwiperChef);

    }
});
