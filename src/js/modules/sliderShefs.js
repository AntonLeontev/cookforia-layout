document.addEventListener("DOMContentLoaded", function () {
    const sliderChefs = document.querySelector(".js-sliderChefs");
    if (sliderChefs) {
        let swiperChefs; 
    
        function initSwiperChefs() {
            if (window.innerWidth < 768) {
                if (!swiperChefs) { 
                    swiperChefs = new Swiper(sliderChefs, {
                        autoHeight: true,
                        spaceBetween: 16,
                        pagination: {
                            el: '.swiper-pagination-chefs',
                            clickable: true,
                        }
                    });
                }
            } else {
                if (swiperChefs) {
                    swiperChefs.destroy();
                    swiperChefs = null; 
                }
            }
        }
    
        window.addEventListener('resize', initSwiperChefs);
        window.addEventListener('load', initSwiperChefs);
    }
});
