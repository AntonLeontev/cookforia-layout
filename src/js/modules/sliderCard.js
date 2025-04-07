function initGallerySliders() {
    const gallerySliders = document.querySelectorAll('.js-sliderCard');

    gallerySliders.forEach((slider) => {
        const paginationEl = slider.closest('.card').querySelector('.swiper-pagination-card');

        new Swiper(slider, {
            loop: true,         
            slidesPerView: 1, 
            autoHeight: false,
            pagination: {
                el: paginationEl,
                clickable: true, 
            },
        });
    });
}

document.addEventListener('DOMContentLoaded', initGallerySliders);
