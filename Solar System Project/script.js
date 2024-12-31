document.addEventListener("DOMContentLoaded", function(){
    
    const btn = document.getElementById("next1");
    const btn2 = document.getElementById("next2");
    const btn3 = document.getElementById("next3");
    const btn4 = document.getElementById("next4");
    const btn5 = document.getElementById("next5");
    const btn6 = document.getElementById("next6");
    const btn7 = document.getElementById("next7");

    const desc1 = document.getElementById("desc1");    
    const desc2 = document.getElementById("desc2");
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    const img3 = document.getElementById("img3");
    const desc3 = document.getElementById("desc3");

    const desc4 = document.getElementById("desc4");
    const img4 = document.getElementById("img4");

    const desc5 = document.getElementById("desc5");
    const img5 = document.getElementById("img5");

    const desc6 = document.getElementById("desc6");
    const img6 = document.getElementById("img6");

    const desc7 = document.getElementById("desc7");
    const img7 = document.getElementById("img7");

    const desc8 = document.getElementById("desc8");
    const img8 = document.getElementById("img8");

    function showDesc1(){
        desc2.style.visibility = "visible";
        img2.style.visibility = "visible";
        btn2.style.visibility = "visible";

        desc1.style.visibility = "hidden";
        img1.style.visibility = "hidden";
        btn.style.visibility = "hidden";
    }

    btn.addEventListener("click", showDesc1);

    function showDesc2(){
        desc3.style.visibility = "visible";
        img3.style.visibility = "visible";
        btn3.style.visibility = "visible";

        desc2.style.visibility = "hidden";
        img2.style.visibility = "hidden";
        btn2.style.visibility = "hidden";
    }

    btn2.addEventListener("click", showDesc2);

    function showDesc3(){
        desc4.style.visibility = "visible";
        img4.style.visibility = "visible";
        btn4.style.visibility = "visible";

        desc3.style.visibility = "hidden";
        img3.style.visibility = "hidden";
        btn3.style.visibility = "hidden";
    }

    btn3.addEventListener("click", showDesc3);

    function showDesc4(){
        desc5.style.visibility = "visible";
        img5.style.visibility = "visible";
        btn5.style.visibility = "visible";

        desc4.style.visibility = "hidden";
        img4.style.visibility = "hidden";
        btn4.style.visibility = "hidden";
    }

    btn4.addEventListener("click", showDesc4);

    function showDesc5(){
        desc6.style.visibility = "visible";
        img6.style.visibility = "visible";
        btn6.style.visibility = "visible";

        desc5.style.visibility = "hidden";
        img5.style.visibility = "hidden";
        btn5.style.visibility = "hidden";
    }

    btn5.addEventListener("click", showDesc5);

    function showDesc6(){
        desc7.style.visibility = "visible";
        img7.style.visibility = "visible";
        btn7.style.visibility = "visible";

        desc6.style.visibility = "hidden";
        img6.style.visibility = "hidden";
        btn6.style.visibility = "hidden";
    }

    btn6.addEventListener("click", showDesc6);

    function showDesc7(){
        desc8.style.visibility = "visible";
        img8.style.visibility = "visible";

        desc7.style.visibility = "hidden";
        img7.style.visibility = "hidden";
        btn7.style.visibility = "hidden";
    }

    btn7.addEventListener("click", showDesc7);

});