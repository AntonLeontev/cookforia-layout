document.addEventListener("DOMContentLoaded", function () {
    const sliderEvents = document.querySelector(".js-sliderEvents");
    if (sliderEvents) {
        let swiperEvents; 
    
        function initSliderEvents() {
            if (window.innerWidth < 768) {
                if (!swiperEvents) { 
                    swiperEvents = new Swiper(sliderEvents, {
                        autoHeight: true,
                        spaceBetween: 16,
                        pagination: {
                            el: '.swiper-pagination-events',
                            clickable: true,
                        }
                    });
                }
            } else {
                if (swiperEvents) {
                    swiperEvents.destroy();
                    swiperEvents = null; 
                }
            }
        }
    
        window.addEventListener('resize', initSliderEvents);
        window.addEventListener('load', initSliderEvents);
    }
});
