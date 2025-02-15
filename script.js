let btn = document.querySelector("#btn");
let content = document.querySelector("#content");

/* Bolene ke liye (For speaking) */
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    
    text_speak.rate = 1;   // normal speed
    text_speak.pitch = 0.5;  // normal pitch
    text_speak.volume = 1; // full volume
    text_speak.lang = "hi-GB";  // Awaaz ladki ki karne ke liye (For female voice)
    
    /* To make the browser speak */
    window.speechSynthesis.speak(text_speak);
}

/* Greets the user based on time of day */
function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    
    if (hours >= 0 && hours < 12) {
        speak("Good morning golu");
    } else if (hours >= 12 && hours < 16) {
        speak("Good afternoon golu");
    } else {
        speak("Good evening golu");
    }
}

/* Automatically greet the user when the page loads */
window.addEventListener('load', () => {
    wishMe();
});

/* Speech Recognition */
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

/* Handles recognition result */
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;  // Display recognized text
    takeCommand(transcript);  // Pass recognized text to handle commands
};

/* Start recognition on button click */
btn.addEventListener("click", () => {
    recognition.start();
});

/* Process and respond to commands */
function takeCommand(transcript) {
    transcript = transcript.toLowerCase();  // Handle case-insensitive commands
    
    if (transcript.includes("hello what is ")) {
        speak("GOOD morning sir, what can i help you");
    } 
    else if (transcript.includes("who are you")) {
        speak("I am a virtual assistant, created by niraj Jarati.");
    } 
    else if (transcript.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");  // Open YouTube in a new tab
    }
    else if (transcript.includes("neeraj date of birth")) {
        speak("5 agaust 2014 ");
    }
    else if (transcript.includes(" who is Neeraj")) {
        speak("neeraj is donkeyman  ");
    }
    else if (transcript.includes("neeraj kha rheata hai")) {
        speak("patan me  ");
    }
    else if (transcript.includes("neeraj konsi school me padata hai ")) {
        speak("gyan sagar school  ");
    }
    else if (transcript.includes("hello")) {
        speak("hy ");
    }
    

    
}
