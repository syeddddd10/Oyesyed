<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gemini Clone</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="sidebar">
        <button class="new-chat-btn">+ New Chat</button>
        <div class="recent-list">
            <p class="section-title">Recent</p>
            <div class="recent-item">How to use GitHub...</div>
        </div>
    </div>

    <main class="main-container">
        <div class="chat-window" id="chat-window">
            <div class="intro-section" id="intro">
                <h1 class="greeting">Hello, User</h1>
                <p class="subtitle">How can I help you today?</p>
            </div>
            </div>

        <div class="input-area">
            <div class="input-wrapper">
                <input type="text" id="user-input" placeholder="Enter a prompt here...">
                <div class="input-icons">
                    <button id="send-btn">➤</button>
                </div>
            </div>
            <p class="disclaimer">Gemini Clone may display inaccurate info.</p>
        </div>
    </main>

    <script src="script.js"></script>
</body>
</html>
  :root {
    --bg-dark: #131314;
    --sidebar-dark: #1e1f20;
    --text-gray: #8e918f;
    --white: #e3e3e3;
}

body {
    background-color: var(--bg-dark);
    color: var(--white);
    font-family: 'Google Sans', Arial, sans-serif;
    display: flex;
    margin: 0;
    height: 100vh;
}

.sidebar {
    width: 260px;
    background: var(--sidebar-dark);
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.new-chat-btn {
    background: #28292a;
    color: var(--white);
    border: none;
    padding: 12px 20px;
    border-radius: 50px;
    cursor: pointer;
    text-align: left;
}

.main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.chat-window {
    width: 100%;
    max-width: 800px;
    flex: 1;
    overflow-y: auto;
    padding: 50px 20px;
}

.greeting {
    font-size: 56px;
    background: linear-gradient(90deg, #4285f4, #9b72cb, #d96570);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
}

.input-area {
    width: 100%;
    max-width: 800px;
    padding: 20px;
}

.input-wrapper {
    background: #1e1f20;
    border-radius: 30px;
    padding: 10px 25px;
    display: flex;
    align-items: center;
}

input {
    flex: 1;
    background: transparent;
    border: none;
    color: white;
    font-size: 16px;
    outline: none;
    padding: 10px 0;
}

#send-btn {
    background: none;
    border: none;
    color: #4285f4;
    font-size: 20px;
    cursor: pointer;
}
const input = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatWindow = document.getElementById('chat-window');
const intro = document.getElementById('intro');

function handleSend() {
    if (input.value.trim() === "") return;

    // Remove greeting on first message
    if (intro) intro.style.display = 'none';

    // Add User Message
    const msgDiv = document.createElement('div');
    msgDiv.className = 'user-msg';
    msgDiv.textContent = input.value;
    chatWindow.appendChild(msgDiv);

    // Clear input
    input.value = "";
    
    // Auto-scroll
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendBtn.addEventListener('click', handleSend);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});
  
.user-msg {
    align-self: flex-end;
    background: #28292a;
    padding: 10px 20px;
    border-radius: 20px;
    margin: 10px 0;
  }

  
