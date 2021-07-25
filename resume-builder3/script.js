const theme = document.getElementById('theme');
const nav = document.getElementById('navbar');

theme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    nav.classList.toggle('dark');
    theme.classList.toggle('dark');
})