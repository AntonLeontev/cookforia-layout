const scrollUpBtn = document.querySelector('.js-scrollUp');
const footer = document.querySelector('footer');

const showButtonThreshold = window.innerHeight;

const scrollHandler = () => {
    const scrollY = window.scrollY;
    const footerRect = footer.getBoundingClientRect();
    const buttonHeight = scrollUpBtn.offsetHeight;

    if (scrollY > showButtonThreshold) {
        scrollUpBtn.classList.add('show');
    } else {
        scrollUpBtn.classList.remove('show');
    }

    if (footerRect.top < window.innerHeight) {
        scrollUpBtn.classList.add('fixed');
        scrollUpBtn.style.bottom = `${window.innerHeight - footerRect.top + 40}px`;
    } else {
        scrollUpBtn.classList.remove('fixed');
        scrollUpBtn.style.bottom = '40px';
    }
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
if (scrollUpBtn) {
    scrollUpBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', scrollHandler);
}