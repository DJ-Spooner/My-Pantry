                    // Mobile Nav Menu

const hamburger = document.getElementById('hamburger');
const mobile_nav_menu = document.getElementById('mobile-nav-menu');

hamburger.addEventListener('click', () => {
    if (!mobile_nav_menu.classList.contains('is-active')) {
        mobile_nav_menu.classList.add('is-active')
    } else {
        mobile_nav_menu.classList.remove('is-active')
    }
})

                    // Add Item Modal

const addItemModal = document.getElementById('add-item');
const modalOpenButton = document.getElementById('modal-open-btn');
const modalCloseButton = document.getElementById('modal-close-btn');

modalOpenButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);


function openModal() {
    addItemModal.style.display = 'block';
};

function closeModal() {
    addItemModal.style.display = 'none';
};
