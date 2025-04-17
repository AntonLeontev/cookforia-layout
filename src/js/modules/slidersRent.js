document.addEventListener('DOMContentLoaded', function () {
    let swiperInstances = [];
    const sliders = document.querySelectorAll('.js-sliderRent');

    function initSwipers() {
        swiperInstances.forEach(swiper => swiper.destroy && swiper.destroy(true, true));
        swiperInstances = [];

        sliders.forEach(function (slider) {
            let slides = slider.querySelectorAll('.swiper-slide');
            
            let next = slider.querySelector('.swiper-button-next');
            let prev = slider.querySelector('.swiper-button-prev');
            let pagination = slider.querySelector('.swiper-pagination');
    
            let swiper = new Swiper(slider, {
                loop: false,
                slidesPerView: 1,
                spaceBetween: 16,
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 'auto',
                    },
                    1280: {
                        slidesPerView: 1,
                    },
                }
            });
            swiperInstances.push(swiper);
        });
    }

    initSwipers();

    let resizeTimeout = null;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            initSwipers();
        }, 200);
    });
});