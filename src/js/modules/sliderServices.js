document.addEventListener("DOMContentLoaded", function () {
    const sliderServices = document.querySelector(".js-sliderServices");
    if (sliderServices) {
        let swiperServices;
    
        function initSwiperServices() {
            const isMobile = window.innerWidth <= 1023;
    
            if (isMobile && !swiperServices) {
                swiperServices = new Swiper(sliderServices, {
                    slidesPerView: 1,
                    spaceBetween: 16,
                    pagination: {
                        el: ".swiper-pagination-services",
                        clickable: true,
                    },
                    breakpoints: {
                        768: {
                            spaceBetween: 24
                        }
                    }
                });
            } else if (!isMobile && swiperServices) {
                swiperServices.destroy(true, true);
                swiperServices = undefined;
            }
        }
        window.addEventListener("load", initSwiperServices);
        window.addEventListener("resize", initSwiperServices);
    }
});