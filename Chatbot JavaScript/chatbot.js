const userInput = document.getElementById("inputUser");
const send = document.getElementById("send");
const chatbox = document.getElementById("chatbox");
const newChat = document.getElementById("newChat");

const questions = 
[
    "What",
    "Hello",
    "Do you",
    "Bye",
    "I will",
    "Are you",
    "nice"
];

const answers = 
[
    "I don't have much information because I am not yet an AI powered chatbot.",
    "Hi.",
    "Yes, i am made using JavaScript.",
    "Goodbye, take care!",
    "Thank you!",
    "I am a simple chatbot.",
    "You too is nice."
];

send.addEventListener("click", () => { 
    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    const yourMessage = document.createElement("div");
    yourMessage.classList.add("myMessage");
    yourMessage.textContent = message;

    chatbox.appendChild(yourMessage);

    const botMessage = getBotResponse(message);
    
    if (botMessage) {
        const botMessageElement = document.createElement("div");
        botMessageElement.classList.add("botMessage");
        botMessageElement.textContent = botMessage;
        chatbox.appendChild(botMessageElement);
     }

     chatbox.scrollTop = chatbox.scrollHeight;

        userInput.value = "";
});

function getBotResponse(userMessage) {
    for (let i = 0; i < questions.length; i++) {
        if (userMessage.toLowerCase().includes(questions[i].toLowerCase())) {
            return answers[i]; 
        }
    }
    return "😊😊😊😊😊"; 
}

newChat.addEventListener("click", () => {
    chatbox.textContent = "";
});

