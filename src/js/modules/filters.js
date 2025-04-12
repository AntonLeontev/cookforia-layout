document.addEventListener("DOMContentLoaded", function () {
    const filterItem = document.querySelector(".js-filterItem");
    if (filterItem) {
        document.querySelectorAll('.js-filterToggle').forEach(function (toggle) {
            let filterList = toggle.closest('.js-filterItem').querySelector('.js-filterList');
            toggle.addEventListener('click', function () {
                this.classList.toggle('active');
                filterList.classList.toggle('active');
            });
        });
    }
});