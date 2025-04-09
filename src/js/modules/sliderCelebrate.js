document.addEventListener("DOMContentLoaded", function () {
    const sliderCelebrate = document.querySelector(".js-sliderCelebrate");
    if (sliderCelebrate) {
        let swiperCelebrate; 
    
        function initSwiperCelebrate() {
            if (window.innerWidth < 1024) {
                if (!swiperCelebrate) { 
                    swiperCelebrate = new Swiper(sliderCelebrate, {
                        autoHeight: true,
                        spaceBetween: 16,
                        pagination: {
                            el: '.swiper-pagination-celebrate',
                            clickable: true,
                        },
                        breakpoints: {
                          768: {
                            slidesPerView: 'auto',
                            autoHeight: false,
                            spaceBetween: 24
                          },
                        }
                    });
                }
            } else {
                if (swiperCelebrate) {
                    swiperCelebrate.destroy();
                    swiperCelebrate = null; 
                }
            }
        }
    
        window.addEventListener('resize', initSwiperCelebrate);
        window.addEventListener('load', initSwiperCelebrate);
    }
});
