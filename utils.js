function toggleModal(modal){
  modal.classList.toggle('modal__open');
  if (modal.classList.contains('modal__open')) {
    document.addEventListener('keydown', escapeModal);
  } else {
    document.removeEventListener('keydown', escapeModal);
  }
}

function escapeModal(e) {
  if (e.key === "Escape") {
    toggleModal(document.querySelector('.modal__open'));
  }
}

export {toggleModal};