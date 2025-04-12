document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.js-popupOpen')) {
        let popupOpeners = document.querySelectorAll('.js-popupOpen');
        popupOpeners.forEach(function (elem) {
            function showPopup() {
                let popups = document.querySelectorAll('.js-popup');
                popups.forEach(function (elem) {
                    elem.classList.add('js-hide');
                })
                let popupId = elem.getAttribute('data-popup');
                let popup = document.querySelector('#' + popupId);
                popup.classList.remove('js-hide');
                popup.classList.add('js-block');
            }
            elem.addEventListener("click", showPopup);
        })
    }
    if (document.querySelector('.js-popupClose')) {
        let popupClose = document.querySelectorAll('.js-popupClose');
        popupClose.forEach(function (elem) {
            function closePopup() {
                elem.closest('.js-popup').classList.remove('js-block');
                elem.closest('.js-popup').classList.add('js-hide');
            }
            elem.addEventListener("click", closePopup);
        })
    }
    document.addEventListener('keydown', function (e) {
        let popups = document.querySelectorAll('.js-popup');
        if (e.keyCode == 27) {
            popups.forEach(function (elem) {
                elem.classList.remove('js-block');
                elem.classList.add('js-hide');
            })
        }
    });
});
