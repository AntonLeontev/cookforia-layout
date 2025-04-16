document.addEventListener("DOMContentLoaded", function () {
    const sliderAbout = document.querySelector(".js-sliderAbout");
    if (sliderAbout) {
        let swiperAbout; 
    
        function initSwiperAbout() {
            if (window.innerWidth < 768) {
                if (!swiperAbout) { 
                    swiperAbout = new Swiper(sliderAbout, {
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        pagination: {
                            el: '.swiper-pagination-about',
                            clickable: true,
                        }
                    });
                }
            } else {
                if (swiperAbout) {
                    swiperAbout.destroy();
                    swiperAbout = null; 
                }
            }
        }
    
        window.addEventListener('resize', initSwiperAbout);
        window.addEventListener('load', initSwiperAbout);
    }
});
