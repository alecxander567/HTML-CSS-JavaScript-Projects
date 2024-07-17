            let timeRun;
            let sec = 0;
            let min = 0;
            let hr  = 0;

            const btn = document.getElementById('btn');
            const stopBtn = document.getElementById('stop');

            btn.addEventListener('click', function(){
                clearInterval(timeRun);
                sec = 0;

                document.getElementById('seconds').innerText = sec;

                timeRun = setInterval(function(){
                    sec++;
                    document.getElementById('seconds').innerText = sec;

                    if(sec == 60){
                        min++;
                        document.getElementById('minutes').innerText = min;
                        sec = 0;
                    }

                    if(min == 60){
                        hr++;
                        document.getElementById('hours').innerText = hr;
                        min = 0;
                    }
                    
                }, 1000);
            });

            stopBtn.addEventListener('click', function(){
                clearInterval(timeRun);
            });