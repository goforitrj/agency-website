window.addEventListener('DOMContentLoaded', function() {
    // preloader animation
    let preLoader = document.querySelector('.preloader');
    preLoader.classList.add('fadeout');
    setTimeout(() => {
        preLoader.style.display = 'none';
    }, 2000);

    //navBtn
    let navBtn = document.querySelector('.navBtn');
    navBtn.addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle('nav--show');
    });

    //video switch
    let switchBtn = document.querySelector('.video__switch-btn');
    let videoElem = document.querySelector('video');
    switchBtn.addEventListener('click', e => {
        e.target.classList.toggle('btnSlide');
        if (e.target.classList.contains('btnSlide')) {
            videoElem.play();
        } else {
            videoElem.pause();
        }
    });
});
