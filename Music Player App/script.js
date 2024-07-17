document.addEventListener('DOMContentLoaded', function(){

    const btn = document.getElementById('btn');
    const timer = document.getElementById('timer');	
    const myAudio = document.getElementById('myAudio');
    let isPaused = true;

    function playPause(){

        if(isPaused){
            timer.style.animationPlayState = 'running';
            timer.style.animation = 'slide 300s forwards';
            myAudio.play();

        } else{
            timer.style.animationPlayState = 'paused';
            myAudio.pause();
        }

        isPaused = !isPaused;
    }

    btn.addEventListener("click", playPause);
});