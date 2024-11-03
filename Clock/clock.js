const time = document.getElementById('time');

function runtime(){
    const myTime = new Date();
    let temp = myTime.toLocaleTimeString();

    time.innerText = temp;
}

setInterval(runtime, 1000);

