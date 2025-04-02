document.addEventListener("DOMContentLoaded", function () {
    let inputPhone = document.querySelector('.js-inputPhone');
    if (inputPhone) {
        var maskOptions = {
          mask: '+{7} (000) 000-00-00'
        };
        var mask = IMask(inputPhone, maskOptions);
    }
});
