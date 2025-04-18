document.addEventListener("DOMContentLoaded", function () {
    const sliderProduct = document.querySelector(".js-sliderProduct");
    if (sliderProduct) {
        let swiperProduct; 
    
        function initSwiperProduct() {
            if (window.innerWidth > 1279) {
                if (!swiperProduct) { 
                    swiperProduct = new Swiper(sliderProduct, {
                        slidesPerView: 3,
                        autoHeight: false,
                        spaceBetween: 24,
                        navigation: {
                            prevEl: '.product-button-prev',
                            nextEl: '.product-button-next',
                        },
                        breakpoints: {
                            1440: {
                                slidesPerView: 4,
                            }
                        }
                    });
                }
            } else {
                if (swiperProduct) {
                    swiperProduct.destroy();
                    swiperProduct = null; 
                }
            }
        }
    
        window.addEventListener('resize', initSwiperProduct);
        window.addEventListener('load', initSwiperProduct);
    }
});
