window.addEventListener('DOMContentLoaded', function() {
    let preLoader = document.querySelector('.preloader');
    preLoader.classList.add('fadeout');
    setTimeout(() => {
        preLoader.style.display = 'none';
    }, 2000);
});
