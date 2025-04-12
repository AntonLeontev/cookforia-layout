document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.js-sliderContent').forEach(function (slider) {
        let slides = slider.querySelectorAll('.swiper-slide');
        
        if (window.innerWidth > 1600 && slides.length < 3) {
            return;
        }
        
        let next = slider.querySelector('.swiper-button-next');
        let prev = slider.querySelector('.swiper-button-prev');
        let pagination = slider.querySelector('.swiper-pagination');

        new Swiper(slider, {
            loop: false,
            slidesPerView: 'auto',
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
                1600: {
                    spaceBetween: 24
                }
            }
        });
    });
});
