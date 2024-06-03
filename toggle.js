// deklarasi tombol dan menu
const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.menu');

// membuat event click
tombol.addEventListener('click', () => {
    menu.classList.toggle('aktif');
});