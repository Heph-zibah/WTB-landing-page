const modal = document.querySelector('.mobile-modals');
const openBtn = document.querySelector('.menu-bar');
const closeBtn = document.querySelector('.close-menu');

// listen for open click
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    closeBtn.style.display = 'block';
    openBtn.style.display = 'none';
});

// // listen for close click
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});