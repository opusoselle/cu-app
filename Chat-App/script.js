const socket = io(); // Connect to the WebSocket server

// Elements
const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messages = document.getElementById('messages');

// Listen for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload
  if (input.value) {
    socket.emit('chat message', input.value); // Send message to the server
    input.value = ''; // Clear input field
  }
});

// Listen for messages from the server
socket.on('chat message', (msg) => {
  const div = document.createElement('div');
  div.textContent = msg;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
});
