const modal = document.querySelector('.modal');
const openButton = document.querySelector(".search__button");
const closeButton = document.querySelector(".modal-button-close");
const info = document.querySelector(".people__children-info");
const infoBox = document.querySelector(".people__children-info-box");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function openInfo() {
  if (infoBox.style.display === 'none' || infoBox.style.display === '') {
    infoBox.style.display = 'block';
} else {
    infoBox.style.display = 'none';
}
}

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

info.addEventListener('click', openInfo);
