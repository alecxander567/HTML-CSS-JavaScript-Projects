const front  = document.getElementById('front');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');

const home = document.getElementById('home');
const content = document.getElementById('content');
const about = document.getElementById('about');

const btnForContent = document.getElementById('btnForContent');
const backToHome = document.getElementById('backToHome');

btnForContent.addEventListener('click', function(){
    front.style.animation = 'slide 1s forwards';
    section2.style.animation = 'slide2 1s forwards';
    section3.style.animation = 'slideBack3 1s forwards';
});

backToHome.addEventListener('click', function(){
    front.style.animation = 'slideBack 1s forwards';
    section2.style.animation = 'slideBack2 1s forwards';
    section3.style.animation = 'slideBack3 1s forwards';
});

home.addEventListener('click', function(){
    front.style.animation = 'slideBack 1s forwards';
    section2.style.animation = 'slideBack2 1s forwards';
    section3.style.animation = 'slideBack3 1s forwards';
});

content.addEventListener('click', function(){
    front.style.animation = 'slide 1s forwards';
    section2.style.animation = 'slide2 1s forwards';
    section3.style.animation = 'slideBack3 1s forwards';
});

about.addEventListener('click', function(){
    section3.style.animation = 'slide3 1s forwards';
    front.style.animation = 'slide 1s forwards';
    section2.style.animation = 'slideUp 1s forwards';
});




