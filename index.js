// Declare variables
const edit = document.querySelector('.profile__edit');
const modal = document.querySelector('.modal');
const save = document.querySelector('.modal__btn');
const modalClose = document.querySelector('.modal__close');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const editName = document.querySelector('.set_name');
const editJob = document.querySelector('.set_job');
const heart = document.querySelectorAll('.favorite__heart');
const favorite = document.querySelectorAll('.favorite');
const favorites = document.querySelector('.favorites');
const add = document.querySelector('.profile__add-btn');
const editFave = document.querySelector('.new-favorite');
const newPic = document.querySelector('.image-path');
const newName = document.querySelector('.location');
const newFave = document.querySelector('.new-favorite__btn');
const closeFave = document.querySelector('.new-favorite__close');


// Create Modal open and close functions
function closeModal(){
    modal.classList.toggle('modal__open');
}

function openModal(){
    modal.classList.toggle('modal__open');
    editName.value = name.textContent;
    editJob.value = job.textContent;
}

function toggleHeart(heart){
  heart.classList.toggle('favorite__liked');
}

function removeFavorite(favorite){
  favorite.remove();
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

function toggleFave(){
  editFave.classList.toggle('modal__open');
}

function newFavorite(e){
  e.preventDefault();
  favorites.insertAdjacentHTML('beforeend', `
  <li class="favorite">
              <div style="background-image: url('${newPic.value}');" class="favorite__image">
                <button class="favorite__delete-btn" onclick="removeFavorite(this.parentNode.parentNode)"></button>
              </div>
                <div class="favorite__label">
                    <h2 class="favorite__heading">${newName.value}</h2>
                    <button class="favorite__heart" onclick="toggleHeart(this)"></button>
                </div>
            </li>`);
            newPic.value = '';
            newName.value = '';
            toggleFave();
}

// Create Event Listeners
save.addEventListener('click',updateProfile);
modalClose.addEventListener('click', closeModal);
edit.addEventListener('click', openModal);
newFave.addEventListener('click', newFavorite);
add.addEventListener('click', toggleFave);
closeFave.addEventListener('click', toggleFave);
