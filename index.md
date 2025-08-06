---
layout: tailwind
title: StockSmart for Walmart
search_exclude: false
hide: true
show_reading_time: false
menu: nav/home.html
---

<head>

  <style>
    /* Scrollbar Styling */
    ::-webkit-scrollbar { width: 10px; }
    ::-webkit-scrollbar-track { background: #f1f1f1; }
    ::-webkit-scrollbar-thumb { background: #5176c8ff; border-radius: 5px; }
    ::-webkit-scrollbar-thumb:hover { background: #011a2eff; }

    /* Chatbot Styles */
    #help-button {
      position: fixed; bottom: 100px; right: 20px;
      padding: 10px 20px; background-color: #B22222;
      color: white; border: none; border-radius: 5px;
      cursor: pointer; font-size: 16px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
    #help-button:hover { background-color: #63b6e3; }
    #chat-container {
      position: fixed; bottom: 100px; right: 20px;
      width: 350px; max-height: 500px;
      background-color: white; border: 1px solid #ddd;
      border-radius: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      display: none; flex-direction: column; overflow: hidden;
      z-index: 1000;
    }
    #chat-header {
      display: flex; justify-content: space-between; align-items: center;
      padding: 10px; background-color: #333; color: white; border-bottom: 1px solid #ddd;
    }
    #chat-header h4 { margin: 0; font-size: 16px; }
    #close-chat { background: none; border: none; color: white; font-size: 18px; cursor: pointer; }
    #close-chat:hover { color: #ff6666; }
    #chat-box {
      flex-grow: 1; padding: 10px; overflow-y: auto;
      display: flex; flex-direction: column;
    }
    .message {
      margin: 10px; padding: 10px; border-radius: 10px;
      max-width: 75%; word-wrap: break-word; display: inline-block;
    }
    .assistant { background-color: #333; color: white; align-self: flex-start; text-align: left; }
    .user { background-color: #2f4f4f; color: white; align-self: flex-end; text-align: right; }
    #input-container {
      display: flex; padding: 10px; border-top: 1px solid #ddd;
    }
    input[type="text"] {
      flex-grow: 1; padding: 10px; border: 1px solid #ddd;
      border-radius: 5px; font-size: 14px; color: black !important;
    }
    button {
      margin-left: 5px; padding: 10px; background-color: #333;
      color: white; border: none; border-radius: 5px;
      cursor: pointer; font-size: 14px;
    }
    button:hover { background-color: #555; }
    
    #output {
    margin-top: 20px;
    font-size: 20px;
    color: #333;
  }
    .card {
  position: relative;
  width: 300px;
  height: 254px;
  color: #fff;
  transition: 0.5s;
  cursor: pointer;
}
.card:hover {
  transform: translateY(-20px);
}
.card::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(45deg,rgb(0, 255, 255),rgb(44, 32, 206));
  border-radius: 1.2em;
}
.card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg,rgb(0, 238, 255),rgb(17, 0, 255));
  filter: blur(30px);
}
.card span {
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  border-radius: 1em;
}
.card span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
}
.card .content {
  position: relative;
  padding: 10px;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.5em;
}
/* Loading Screen */
#wifi-loader {
  --background:rgba(255, 222, 89, 0.96);     /* Walmart Blue */
  --front-color:rgb(16, 130, 224);     /* Walmart Yellow */
  --back-color: rgba(255, 222, 89, 0.96);     /* Sky Blue */
  --text-color: #ffffff;
  width: 180px;
  height: 180px;
  border-radius: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

#wifi-loader svg {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

#wifi-loader svg circle {
  position: absolute;
  fill: none;
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: rotate(-100deg);
  transform-origin: center;
}

#wifi-loader svg circle.back {
  stroke: var(--back-color);
}

#wifi-loader svg circle.front {
  stroke: var(--front-color);
}

#wifi-loader svg.circle-outer {
  height: 160px;
  width: 160px;
}

#wifi-loader svg.circle-outer circle {
  stroke-dasharray: 62.75 188.25;
}

#wifi-loader svg.circle-outer circle.back {
  animation: circle-outer135 1.8s ease infinite 0.3s;
}

#wifi-loader svg.circle-outer circle.front {
  animation: circle-outer135 1.8s ease infinite 0.15s;
}

#wifi-loader svg.circle-middle {
  height: 110px;
  width: 110px;
}

#wifi-loader svg.circle-middle circle {
  stroke-dasharray: 42.5 127.5;
}

#wifi-loader svg.circle-middle circle.back {
  animation: circle-middle6123 1.8s ease infinite 0.25s;
}

#wifi-loader svg.circle-middle circle.front {
  animation: circle-middle6123 1.8s ease infinite 0.1s;
}

#wifi-loader svg.circle-inner {
  height: 70px;
  width: 70px;
}

#wifi-loader svg.circle-inner circle {
  stroke-dasharray: 22 66;
}

#wifi-loader svg.circle-inner circle.back {
  animation: circle-inner162 1.8s ease infinite 0.2s;
}

#wifi-loader svg.circle-inner circle.front {
  animation: circle-inner162 1.8s ease infinite 0.05s;
}

#wifi-loader .text {
  position: absolute;
  bottom: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: lowercase;
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 0.2px;
}

#wifi-loader .text::before,
#wifi-loader .text::after {
  content: attr(data-text);
}

#wifi-loader .text::before {
  color: var(--text-color);
}

#wifi-loader .text::after {
  color: var(--front-color);
  animation: text-animation76 3.6s ease infinite;
  position: absolute;
  left: 0;
}

@keyframes circle-outer135 {
  0% { stroke-dashoffset: 25; }
  25% { stroke-dashoffset: 0; }
  65% { stroke-dashoffset: 301; }
  80% { stroke-dashoffset: 276; }
  100% { stroke-dashoffset: 276; }
}

@keyframes circle-middle6123 {
  0% { stroke-dashoffset: 17; }
  25% { stroke-dashoffset: 0; }
  65% { stroke-dashoffset: 204; }
  80% { stroke-dashoffset: 187; }
  100% { stroke-dashoffset: 187; }
}

@keyframes circle-inner162 {
  0% { stroke-dashoffset: 9; }
  25% { stroke-dashoffset: 0; }
  65% { stroke-dashoffset: 106; }
  80% { stroke-dashoffset: 97; }
  100% { stroke-dashoffset: 97; }
}

@keyframes text-animation76 {
  0% { clip-path: inset(0 100% 0 0); }
  50% { clip-path: inset(0); }
  100% { clip-path: inset(0 0 0 100%); }
}

/* OUR VISION BUTTON */
.wrapper {
  perspective: 500px;
  transform: rotatex(10deg);
  animation: rotateAngle 6s linear infinite;
  margin: auto;
  width: auto;
}

button {
  display: block;
  position: relative;
  margin: 0.5em 0;
  padding: 1.4em 5em; /* Bigger height and much longer width */
  cursor: pointer;
  background: #FFFFFF;
  border: none;
  border-radius: 0.5em;
  text-transform: uppercase;
  font-size: 24px;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  letter-spacing: 0.04em;
  mix-blend-mode: color-dodge;
  perspective: 500px;
  transform-style: preserve-3d;
  color: #003366; /* Dark Walmart Blue */
}

button:before, button:after {
  --z: 0px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  opacity: 0;
  mix-blend-mode: inherit;
  border-radius: inherit;
  transform-style: preserve-3d;
  transform: translate3d(calc(var(--z) * 0px), calc(var(--z) * 0px), calc(var(--z) * 0px));
}

button span {
  mix-blend-mode: none;
  display: block;
  color: inherit;
}

button:after {
  background-color: #FFD700; /* Yellow */
}

button:before {
  background-color: #005BBB; /* Walmart Blue */
}

button:hover {
  background-color: #FFE347; /* Lighter yellow on hover */
  color: #005BBB; /* Blue text on yellow background */
  transition: background 0.3s 0.1s;
}

button:active {
  background-color: #FFD700; /* deeper yellow */
  color: #003366; /* Darker blue for good contrast */
}

button:hover:before {
  --z: 0.04;
  animation: translateWobble 2.2s ease forwards;
}

button:hover:after {
  --z: -0.06;
  animation: translateWobble 2.2s ease forwards;
}

@keyframes rotateAngle {
  0% { transform: rotateY(0deg) rotateX(10deg); }
  25% { transform: rotateY(20deg) rotateX(10deg); }
  50% { transform: rotateY(0deg) rotateX(10deg); }
  75% { transform: rotateY(-20deg) rotateX(10deg); }
  100% { transform: rotateY(0deg) rotateX(10deg); }
}

@keyframes translateWobble {
  0% { opacity: 0; transform: translate3d(calc(var(--z) * 0px), calc(var(--z) * 0px), calc(var(--z) * 0px)); }
  16% { transform: translate3d(calc(var(--z) * 160px), calc(var(--z) * 160px), calc(var(--z) * 160px)); }
  28% { opacity: 1; transform: translate3d(calc(var(--z) * 70px), calc(var(--z) * 70px), calc(var(--z) * 70px)); }
  44% { transform: translate3d(calc(var(--z) * 130px), calc(var(--z) * 130px), calc(var(--z) * 130px)); }
  59% { transform: translate3d(calc(var(--z) * 85px), calc(var(--z) * 85px), calc(var(--z) * 85px)); }
  73% { transform: translate3d(calc(var(--z) * 110px), calc(var(--z) * 110px), calc(var(--z) * 110px)); }
  88% { opacity: 1; transform: translate3d(calc(var(--z) * 90px), calc(var(--z) * 90px), calc(var(--z) * 90px)); }
  100% { opacity: 1; transform: translate3d(calc(var(--z) * 100px), calc(var(--z) * 100px), calc(var(--z) * 100px)); }
}
  </style>
</head>

<body>

<div id="custom-loading-screen" class="fixed inset-0 bg-black flex items-center justify-center z-[9999] transition-opacity duration-1000">
  <div id="wifi-loader">
    <svg class="circle-outer" viewBox="0 0 86 86">
      <circle class="back" cx="43" cy="43" r="40"></circle>
      <circle class="front" cx="43" cy="43" r="40"></circle>
    </svg>
    <svg class="circle-middle" viewBox="0 0 60 60">
      <circle class="back" cx="30" cy="30" r="27"></circle>
      <circle class="front" cx="30" cy="30" r="27"></circle>
    </svg>
    <svg class="circle-inner" viewBox="0 0 34 34">
      <circle class="back" cx="17" cy="17" r="14"></circle>
      <circle class="front" cx="17" cy="17" r="14"></circle>
    </svg>
    <div class="text" data-text="Loading"></div>
  </div>
</div>

<!-- Hero Section -->
<section id="welcome" class="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center relative" style="background-image: url('https://i.pinimg.com/originals/c1/0a/af/c10aaf1d651e144a88ef16475917c3b0.gif');">
  <div class="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
  <div class="relative z-10">
    <h1 class="text-6xl font-bold text-white neon-glow">
      <span id="typewriter"></span>
    </h1>
    <h2 class="text-2xl mt-4 text-white opacity-80">Enhancing Customer + Employee experiences at</h2>
    <center>
    <img src="{{site.baseurl}}/images/walmart.png">
    </center>
  </div>
</section>

<!-- Our Vision Section -->
<section class="py-16">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-center">
      <a href="{{ site.baseurl }}/about/" title="Learn about our website, vision, and team" class="wrapper">
        <button><span>Learn About Our Website, Vision, and Team</span></button>
      </a>
    </div>
  </div>
</section>

<!-- Chatbot -->
<button id="help-button">Need Help?</button>

<div id="chat-container">
  <div id="chat-header">
    <h4>AI-Assistant</h4>
    <button id="close-chat">×</button>
  </div>
  <div id="chat-box"></div>
  <div id="input-container">
    <input type="text" id="user-input" placeholder="Type your message..." />
    <button id="send-message-button">Send</button>
  </div>
</div>


<!-- LOADING SCREEN -->
<script>
  // Fade out loader after page load
  window.addEventListener('load', () => {
    const screen = document.getElementById('custom-loading-screen');

    // Optional: delay showing content to keep loader longer
    setTimeout(() => {
      screen.style.opacity = '0';
      setTimeout(() => {
        screen.style.display = 'none';
      }, 800); // match fade-out time
    }, 1000); // total visible time before fade
  });

  // Show loader again on link click
  document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('custom-loading-screen');
    const links = document.querySelectorAll('a[href]');

    links.forEach(link => {
      const href = link.getAttribute('href');

      // Only apply to normal internal links (not anchors, new tabs, or downloads)
      if (
        href &&
        !href.startsWith('#') &&
        !link.hasAttribute('target') &&
        !link.hasAttribute('download') &&
        !href.startsWith('mailto:') &&
        !href.startsWith('tel:')
      ) {
        link.addEventListener('click', function (e) {
          e.preventDefault();

          loader.style.display = 'flex';
          loader.style.opacity = '1';

          setTimeout(() => {
            window.location.href = href;
          }, 800); // duration the loader stays before navigating
        });
      }
    });
  });
</script>

<!-- Typewriter Script -->
<script>
document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to StockSmart";
  let index = 0;
  const speed = 100;
  const typewriter = document.getElementById("typewriter");

  function type() {
    if (index < text.length) {
      typewriter.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
 
  type();
});
</script>

<!-- DNABOT Script -->
<script>
const BACKEND_URL = "http://127.0.0.1:8504";
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const chatContainer = document.getElementById('chat-container');
const sendMessageButton = document.getElementById('send-message-button');

document.getElementById('help-button').addEventListener('click', toggleChat);
document.getElementById('close-chat').addEventListener('click', toggleChat);
sendMessageButton.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});

function toggleChat() {
  chatContainer.style.display = chatContainer.style.display === 'flex' ? 'none' : 'flex';
  if (chatContainer.style.display === 'flex') {
    chatContainer.style.flexDirection = 'column';
  }
}

async function sendMessage(inputMessage) {
  // If inputMessage is undefined (i.e., user typed something), get it from the input box
  const message = inputMessage !== undefined ? inputMessage.trim() : userInput.value.trim();
  if (!message) return;

  appendMessage('user', message);

  if (!inputMessage) {
    userInput.value = ""; // Clear the input box only if typed manually
  }

  try {
    const response = await fetch(`${BACKEND_URL}/dnabot/chat`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_input: message })
    });

    const data = await response.json();
    if (response.ok) {
      appendMessage('assistant', data.response);
      console.log('DNA Bot response:', data.response);
      console.log("⏯️ About to speak:", data.response)
      speakText(data.response); // 🔊 Annie speaks here
    } else {
      console.error('Error from backend:', data.error);
      appendMessage('assistant', `Error: ${data.error}`);
    }
  } catch (error) {
    console.error('Network or server error:', error.message);
    appendMessage('assistant', `Error: ${error.message}`);
  }
}



function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.className = `message ${sender}`;
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}


</script>

<!-- ANNIES CODE -->
<script>

let currentUtterance = null
function speakText(text) {
  if (speechSynthesis.speaking){
    speechSynthesis.cancel();
  }


  const utterance = new SpeechSynthesisUtterance(text);
  currentUtterance = utterance
  utterance.lang = 'en-US';
  utterance.pitch = 1;
  utterance.rate = 1;

  // Wait for voices to be loaded
  const voices = speechSynthesis.getVoices();
  const femaleVoice = voices.find(voice =>
    voice.lang === 'en-US' && voice.name.toLowerCase().includes("female")
  ) || voices.find(voice =>
    voice.lang === 'en-US' && (voice.name.includes("Google") || voice.name.includes("Samantha") || voice.name.includes("Jenny"))
  );

  if (femaleVoice) {
    utterance.voice = femaleVoice;
  }

  speechSynthesis.speak(utterance);
}

// Ensure voices are loaded
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => {
    setTimeout(() => {
      speechSynthesis.getVoices(); // Ensure loading
    }, 100);
  };
}


  let recognition;
  let isListening = false;
  let heardText = "";  // This will save what ANNIE hears

  if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          heardText = event.results[i][0].transcript.trim();
          console.log("ANNIE heard:", heardText);  // Print to console
          // Optional: also display it on the page
          sendMessage(heardText);
          document.getElementById("output").textContent = "Heard: " + heardText;
        }
      }
    };

    recognition.onerror = function(event) {
      console.error("Recognition error:", event.error);
    };
  } else {
    console.error("Speech recognition not supported in this browser.");
  }

document.getElementById("stopSpeakingBtn").addEventListener("click", function() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    console.log("ANNIE's current speech stopped.");
  }
});

  
  // Click the pyramid to start/stop listening
  const pyramidWrapper = document.getElementById("pyramidWrapper");
  pyramidWrapper.addEventListener("click", function() {
    if (!isListening) {
      recognition.start();
      pyramidWrapper.classList.add("spinning");
      console.log("ANNIE started listening...");
    } else {
      recognition.stop();
      pyramidWrapper.classList.remove("spinning");
      console.log("ANNIE stopped listening.");
    }
    isListening = !isListening;
  });
</script>

</body>