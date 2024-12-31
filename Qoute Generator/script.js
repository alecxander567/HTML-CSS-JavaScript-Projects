const container = document.getElementById('container');
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    const quotes = [
        "Success is not the destination; it's the journey of learning and growing.",
        "Every line of code you write today builds the future you dream of tomorrow.",
        "Mistakes are proof that you are trying and stepping closer to greatness.",
        "Innovation begins where curiosity meets persistence.",
        "Don't wait for inspiration; create it one step at a time.",
        "Your past projects are the seeds; your future is the harvest.",
        "Progress is progress, no matter how small the step forward.",
        "The only limit to your creativity is the one you set for yourself.",
        "Turn every obstacle into an opportunity to learn and excel.",
        "When you code with passion, the impossible becomes achievable."
    ];

    container.innerText = quotes[Math.floor(Math.random() * quotes.length)];
});