"use strict";

var displayFormButton = document.getElementById('displayForm');
var subscribeArea = document.getElementsByClassName('promo__subscribeArea')[0];
var openBlock = document.getElementsByClassName('openBlock');

if(displayFormButton){
  displayFormButton.addEventListener('click', function (event) {
    event.target.style.opacity = 0;
    event.target.style.zIndex = 1;
    subscribeArea.style.opacity = 1;
    subscribeArea.style.zIndex= 2;
  });
}

for (var i = 0; i < openBlock.length; i++) {
  openBlock[i].addEventListener('click', function (event) {
    event.target.parentElement.nextElementSibling.style.display = "block";
    event.target.parentElement.style.display = "none";
  });
}

