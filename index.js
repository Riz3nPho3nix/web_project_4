const edit = document.querySelector('.profile__edit');
const modal = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal__window');
const save = document.querySelector('.modal__btn');
const modalClose = document.querySelector('.close');
var name = document.querySelector('.profile__name');
var job = document.querySelector('.profile__job');
var editName = document.querySelector('.set_name');
var editJob = document.querySelector('.set_job');

save.addEventListener('submit',updateProfile);
modalClose.addEventListener('click', closeModal);
edit.addEventListener('click', openModal);


function closeModal(){
    modal.classList.remove('modal__open');
}

function openModal(){
    modal.classList.add('modal__open');
    editName.textContent = name.textContent;
    editJob.textContent = name.textContent;
}


function updateProfile(evt) {
    evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
    // Having done so, we can define our own way of submitting the form.
    // We'll explain it in more detail later.

    // Let's find the form fields in the DOM


    // Get the values of each field from the corresponding value property
let newName = editName.textContent;
let newJob = editJob.textContent;
    // Select elements where the field values will be entered
    name.textContent = newName;
    job.textContent = newJob;
    // Insert new values using the textContent property of the querySelector() method
    closeModal();
}

// Connect the handler to the form:
