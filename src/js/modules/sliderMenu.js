document.addEventListener("DOMContentLoaded", function () {
    const sliderMenu = document.querySelector(".js-sliderMenu");
    if (sliderMenu) {
        let swiperMenu; 
    
        function initSwiperMenu() {
            if (window.innerWidth < 768) {
                if (!swiperMenu) { 
                    swiperMenu = new Swiper(sliderMenu, {
                        autoHeight: true,
                        spaceBetween: 16,
                        pagination: {
                            el: '.swiper-pagination-menu',
                            clickable: true,
                        }
                    });
                }
            } else {
                if (swiperMenu) {
                    swiperMenu.destroy();
                    swiperMenu = null; 
                }
            }
        }
    
        window.addEventListener('resize', initSwiperMenu);
        window.addEventListener('load', initSwiperMenu);

    }
});
