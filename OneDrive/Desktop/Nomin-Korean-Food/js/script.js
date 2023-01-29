// active toggle class
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})

const imgSlide = document.querySelectorAll('.img-slider'), dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
    counter += 1;
    slidefun(counter);
}
function moveSlide(x) {
    counter += x;
    slidefun(counter);
    resetTimer();
}
function currentSlide(x) {
    counter = x;
    slidefun(counter);
    resetTimer();
}
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}
function slidefun(x) {
    let i;
    for (i=0;i<imgSlide.length;i++) {
        imgSlide[i].style.display = "none";
    } 
    for (i=0;i<dot.length;i++) {
        dot[i].classList.remove('active');
    }
    if (x > imgSlide.length) {
        counter = 1;
    }
    if (x < 1) {
        counter = imgSlide.length;
    }
    imgSlide[counter-1].style.display = "block";
    dot[counter-1].classList.add('active')
}