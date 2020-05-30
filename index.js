// Declare variables
const edit = document.querySelector('.profile__edit');
const modal = document.querySelector('.modal');
const save = document.querySelector('.modal__btn');
const modalClose = document.querySelector('.modal__close');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const editName = document.querySelector('.set_name');
const editJob = document.querySelector('.set_job');
const heart = document.querySelector('.favorite__heart');
const favorite = document.querySelectorAll('.favorite');
const favorites = document.querySelector('.favorites');
const add = document.querySelector('.profile__add-btn');
const editFave = document.querySelector('.new-favorite');
const newPic = document.querySelector('.image-path');
const newName = document.querySelector('.location');
const newFave = document.querySelector('.new-favorite__btn');
const closeFave = document.querySelector('.new-favorite__close');
const deleteFave = document.querySelector('.favorite__delete-btn');


// Close profile modal without saving changes
function closeModal(){
    modal.classList.toggle('modal__open');
}
// Open profile modal and set values to form
function openModal(){
    modal.classList.toggle('modal__open');
    editName.value = name.textContent;
    editJob.value = job.textContent;
}
// Add and remove full heart on places
function toggleHeart(e){
  this.classList.toggle('favorite__liked');
}
// Remove place from list on site
function removeFavorite(){
  this.closest('.favorite').remove();
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
// Toggle new place modal
function toggleFave(){
  editFave.classList.toggle('modal__open');
}
// Add new place to page
function newFavorite(e){
  e.preventDefault();
  favorites.insertAdjacentHTML('beforeend', `
  <li class="favorite">
              <div style="background-image: url('${newPic.value}');" class="favorite__image">
                <button class="favorite__delete-btn"></button>
              </div>
                <div class="favorite__label">
                    <h2 class="favorite__heading">${newName.value}</h2>
                    <button class="favorite__heart"></button>
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
favorites.addEventListener('click', (e) => {
  if (e.target === heart){
    //e.target.classList.toggle('favorite__liked');
    console.log("HEART!");
    e.stopPropagation;
  } else if (e.target === deleteFave){
    //e.target.closest('.favorite').remove();
    console.log("BIN!");
    e.stopPropagation;
  } else {
  console.log("CLICKED!");
  e.stopPropagation;
  }
});

