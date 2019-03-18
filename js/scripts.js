"use strict";

var displayFormButton = document.getElementById('displayForm');
var subscribeArea = document.getElementsByClassName('promo__subscribeArea')[0];

displayFormButton.addEventListener('click', function (event) {
  event.target.style.opacity = 0;
  subscribeArea.style.opacity = 1;
});
