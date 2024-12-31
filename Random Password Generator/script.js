let pass = document.getElementById('pass');
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    const passwords = [
        'eqgeu123',
        'dhuqw#wie',
        'duwgeuwe',
        '1y3gwekqi',
        'iheyqe1',
        'uefhwgewg123',
        'fhwuefwef',
        'dhwufefef56',
        '45eit23*eihw',
        'ihegih4g3',
        'wetwit4ut'
        ];
        
    pass.innerHTML = passwords[Math.floor(Math.random() * passwords.length)];
});
