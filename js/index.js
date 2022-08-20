const btn = document.getElementById('nav-btn');
const underBtns = document.getElementById('under-btn');
const navbar = document.getElementById('navbar');
const animateImg = document.getElementsByClassName('anima');

btn.addEventListener('mouseenter', showUnderBtn);
underBtns.addEventListener('mouseleave', hideUnderBtn);
navbar.addEventListener('mouseleave', hideUnderBtn);
// window.addEventListener('load', showAnimation);




function showUnderBtn(){
    underBtns.style.display = 'flex'
}


function hideUnderBtn(){
    underBtns.style.display = 'none'
}

// function showAnimation(){
//     animateImg.style.animation = 'animate-image 3s'
// }
