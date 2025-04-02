const scrollUpBtn = document.querySelector('.js-scrollUp');
const footer = document.querySelector('footer');
const calendar = document.querySelector('.js-calendar');
const footerContacts = document.querySelector('.js-footerContacts');

const showButtonThreshold = window.innerHeight;

const scrollHandler = () => {
    const scrollY = window.scrollY;
    const footerContactsRect = footerContacts.getBoundingClientRect();
    const buttonHeight = scrollUpBtn.offsetHeight;

    if (scrollY > showButtonThreshold) {
        scrollUpBtn.classList.add('show');
    } else {
        scrollUpBtn.classList.remove('show');
    }

    if (footerContactsRect.top < window.innerHeight) {
        scrollUpBtn.classList.add('fixed');
        scrollUpBtn.style.bottom = `${window.innerHeight - footerContactsRect.top + 40}px`;
    } else {
        scrollUpBtn.classList.remove('fixed');
        scrollUpBtn.style.bottom = '40px';
    }
};

const scrollHandlerCalendar = () => {
    const scrollY = window.scrollY;
    const footerContactsRect = footerContacts.getBoundingClientRect();

    if (footerContactsRect.top < window.innerHeight) {
        if (window.innerWidth >= 1280) {
            calendar.style.bottom = '80px'; 
        } else {
            calendar.style.bottom = `${window.innerHeight - footerContactsRect.top + 40}px`; // Иначе используем ранее установленное значение
        }
    } else {
        if (window.innerWidth >= 1280) {
            calendar.style.bottom = '92px';
        } else {
            calendar.style.bottom = '40px';
        }
    }
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
if (scrollUpBtn) {
    scrollUpBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', scrollHandler);
}
if (calendar) {
    window.addEventListener('scroll', scrollHandlerCalendar);
}
