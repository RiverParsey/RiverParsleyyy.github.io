const modalLink = document.querySelector('.modal-link');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal-close');

modalLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('visually-hidden');
});

modalClose.addEventListener('click', function () {
  modal.classList.add('visually-hidden');
});
