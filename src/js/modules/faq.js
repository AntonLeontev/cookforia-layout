document.addEventListener("DOMContentLoaded", function () {
    const faqItem = document.querySelector(".js-faqItem");
    if (faqItem) {
        document.querySelectorAll('.js-faqQuestion').forEach(function (question) {
            question.addEventListener('click', function () {
                console.log('123')
                // Переключаем класс active у родительского .faq-item
                this.parentElement.classList.toggle('active');
            });
        });
    }
});