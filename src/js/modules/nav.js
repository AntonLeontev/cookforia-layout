document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".js-burger");
    const nav = document.querySelector(".js-nav");
    const navClose = document.querySelector(".js-navClose");
    const header = document.querySelector(".js-header");

    if (burger) {
        burger.addEventListener("click", function () {
            burger.classList.toggle("active");
            header.classList.toggle("active");
            nav.classList.toggle("active");

            if (nav.classList.contains("active")) {
                wrapperFixPosition();
            } else {
                wrapperUnfixPosition();
            }
        });
        navClose.addEventListener("click", function () {
            burger.classList.remove("active");
            header.classList.remove("active");
            nav.classList.remove("active");
            wrapperUnfixPosition();
        });
        document.addEventListener("click", function (event) {
            if (!nav.contains(event.target) && !burger.contains(event.target) && nav.classList.contains("active")) {
                burger.classList.remove("active");
                header.classList.remove("active");
                nav.classList.remove("active");
                wrapperUnfixPosition(); // при закрытии меню
            }
        });
    
    
        const toggles = document.querySelectorAll('.js-navToggle')
        toggles.forEach(function (toggle) {
            toggle.addEventListener('click', function () {
                let navItem = this.closest('.js-navItem');
                navItem.classList.toggle('active');
            });
        });
    }
});
