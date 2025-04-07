document.addEventListener("DOMContentLoaded", function () {
    const sliderGallery = document.querySelector(".js-sliderGallery");
    if (sliderGallery) {
        let swiperGallery;

        function initSwiperGallery() {
            if (!swiperGallery) {
                swiperGallery = new Swiper(sliderGallery, {
                    slidesPerView: 1,
                    autoHeight: false,
                    spaceBetween: 24,
                    navigation: {
                        nextEl: '.swiper-button-next-gallery',
                        prevEl: '.swiper-button-prev-gallery',
                    },
                    pagination: {
                        el: '.swiper-pagination-gallery',
                        clickable: true,
                    }
                });
            }
        }

        window.addEventListener('resize', initSwiperGallery);
        window.addEventListener('load', initSwiperGallery);

    }
});
