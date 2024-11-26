const imagens = document.querySelectorAll('.img-galeria');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('#close-modal');

imagens.forEach((img) => {
    img.addEventListener('click', () => {
        modalContent.style.backgroundImage = `url('${img.src}')`;
        modalContent.style.backgroundSize = 'cover';
        modalContent.style.backgroundPosition = 'center';
        modal.showModal();
    });
});

closeModal.addEventListener('click', () => {
    modal.close()
})