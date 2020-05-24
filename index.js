// Declare variables
const edit = document.querySelector('.profile__edit');
const modal = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal__window');
const save = document.querySelector('.modal__btn');
const modalClose = document.querySelector('.modal__close');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let editName = document.querySelector('#set_name');
let editJob = document.querySelector('#set_job');

// Create Event Listeners
save.addEventListener('click',updateProfile);
modalClose.addEventListener('click', closeModal);
edit.addEventListener('click', openModal);

// Create Modal open and close functions
function closeModal(){
    modal.classList.remove('modal__open');
}

function openModal(){
    modal.classList.add('modal__open');
    editName.value = name.textContent;
    editJob.value = job.textContent;
}

// Create form completion button
function updateProfile(e) {
  // Stop the browser from submitting the form in the default way.
  e.preventDefault();

  // Get the values of each field from the corresponding value property
  let newName = editName.value;
  let newJob = editJob.value;
  // Insert new values using the textContent property of the querySelector() method
  name.textContent = newName;
  job.textContent = newJob;
  closeModal();
}

