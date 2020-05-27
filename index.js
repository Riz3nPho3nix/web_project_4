// Declare variables
const edit = document.querySelector('.profile__edit');
const modal = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal__window');
const save = document.querySelector('.modal__btn');
const modalClose = document.querySelector('.modal__close');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const editName = document.querySelector('.set_name');
const editJob = document.querySelector('.set_job');
const heart = document.querySelectorAll('.favorite__heart');
const fave = document.querySelectorAll('.favorite');


// Create Modal open and close functions
function closeModal(){
    modal.classList.toggle('overlay__open');
}

function openModal(){
    modal.classList.toggle('overlay__open');
    editName.value = name.textContent;
    editJob.value = job.textContent;
}

function makeFave(heart){
  heart.classList.toggle('favorite__liked');
}

function removeFavorite(fave){
  fave.remove();
}

// Create form completion button
function updateProfile(e) {
  // Stop the browser from submitting the form in the default way.
  e.preventDefault();

  // Insert new values using the textContent property of the querySelector() method
  name.textContent = editName.value;
  job.textContent = editJob.value;
  closeModal();
}

// Create Event Listeners
save.addEventListener('click',updateProfile);
modalClose.addEventListener('click', closeModal);
edit.addEventListener('click', openModal);