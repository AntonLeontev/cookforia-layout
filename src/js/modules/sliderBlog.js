document.addEventListener("DOMContentLoaded", function () {
    const sliderBlog = document.querySelector(".js-sliderBlog");
    if (sliderBlog) {
        let swiperBlog; 
    
        function initSliderBlog() {
            if (window.innerWidth < 768) {
                if (!swiperBlog) { 
                    swiperBlog = new Swiper(sliderBlog, {
                        autoHeight: true,
                        spaceBetween: 16,
                        pagination: {
                            el: '.swiper-pagination-blog',
                            clickable: true,
                        }
                    });
                }
            } else {
                if (swiperBlog) {
                    swiperBlog.destroy();
                    swiperBlog = null; 
                }
            }
        }
    
        window.addEventListener('resize', initSliderBlog);
        window.addEventListener('load', initSliderBlog);
    }
});
