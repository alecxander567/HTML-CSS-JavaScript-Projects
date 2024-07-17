        let yearCont = document.getElementById('yearCont');
        let age = document.getElementById('age');
        const enterAge = document.getElementById('enterAge');

        enterAge.addEventListener('click', function(){
            let year = new Date();
            yearCont.innerText =  parseInt(year.getFullYear()) - parseInt(age.value);
        });
