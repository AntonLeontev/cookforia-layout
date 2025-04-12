document.addEventListener("DOMContentLoaded", function () {
    const faqItem = document.querySelector(".js-faqItem");
    if (faqItem) {
        document.querySelectorAll('.js-faqQuestion').forEach(function (question) {
            question.addEventListener('click', function () {
                this.parentElement.classList.toggle('active');
            });
        });
    }
});