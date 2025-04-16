document.addEventListener("DOMContentLoaded", function () {
    const sliderDefault = document.querySelector(".js-sliderDefault");
    if (sliderDefault) {
        let swiperDefault; 
    
        function initSwiperDefault() {
            if (window.innerWidth < 768) {
                if (!swiperDefault) { 
                    swiperDefault = new Swiper(sliderDefault, {
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        pagination: {
                            el: '.swiper-pagination-default',
                            clickable: true,
                        }
                    });
                }
            } else {
                if (swiperDefault) {
                    swiperDefault.destroy();
                    swiperDefault = null; 
                }
            }
        }
    
        window.addEventListener('resize', initSwiperDefault);
        window.addEventListener('load', initSwiperDefault);
    }
});
