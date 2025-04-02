document.addEventListener("DOMContentLoaded", function () {
    const sliderMaster = document.querySelector(".js-sliderMaster");
    if (sliderMaster) {
        let swiperMaster; 
    
        function initSwiperMaster() {
            if (window.innerWidth < 768) {
                if (!swiperMaster) { 
                    swiperMaster = new Swiper(sliderMaster, {
                        autoHeight: true,
                        spaceBetween: 16,
                        pagination: {
                            el: '.swiper-pagination-masters',
                            clickable: true,
                        }
                    });
                }
            } else {
                if (swiperMaster) {
                    swiperMaster.destroy();
                    swiperMaster = null; 
                }
            }
        }
    
        window.addEventListener('resize', initSwiperMaster);
        window.addEventListener('load', initSwiperMaster);
    }
});
