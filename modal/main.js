const modal = document.querySelector('.modal')
const toggleBtn = document.querySelector('.toggle-btn')
const modalBtn = document.querySelector('.modal-btn')
function modalToggle() {
    modal.classList.toggle('none')
}
toggleBtn.addEventListener('click', modalToggle)
modalBtn.addEventListener('click', modalToggle)