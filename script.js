'use strict';
const modalClose = document.querySelector('.close-modal');

const overlay = document.querySelector('.overlay');

const model = document.querySelector('.modal');

const btnsOpen = document.querySelectorAll('.show-modal');
const openmodel = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpen.length; i++)
  btnsOpen[i].addEventListener('click', openmodel);
const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};
modalClose.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
