document.addEventListener("DOMContentLoaded", function () {
    const sliderReviews = document.querySelector(".js-sliderReviews");
    if (sliderReviews) {
        let swiperReviews; 
    
        function initSwiperReviews() {
            if (window.innerWidth < 768) {
                if (!swiperReviews) { 
                    swiperReviews = new Swiper(sliderReviews, {
                        autoHeight: true,
                        spaceBetween: 16,
                        pagination: {
                            el: '.swiper-pagination-reviews',
                            clickable: true,
                        }
                    });
                }
            } else {
                if (swiperReviews) {
                    swiperReviews.destroy();
                    swiperReviews = null; 
                }
            }
        }
    
        window.addEventListener('resize', initSwiperReviews);
        window.addEventListener('load', initSwiperReviews);

    }
});
