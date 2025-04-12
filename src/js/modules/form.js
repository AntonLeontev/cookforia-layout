document.addEventListener("DOMContentLoaded", function () {
  let inputPhone = document.querySelectorAll('.js-inputPhone');
  if (inputPhone.length) {
    inputPhone.forEach(function (input) {
      var maskOptions = {
        mask: '+{7} (000) 000-00-00'
      };
      var mask = IMask(input, maskOptions);
    })
  }
});
