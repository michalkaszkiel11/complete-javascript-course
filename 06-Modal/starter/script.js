'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

// modal.classList.remove('hidden');
// overlay.classList.remove('hidden');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', function () {
//   closeModal();
// });
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (esc) {
  if (esc.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
