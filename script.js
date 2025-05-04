document.getElementById("send-btn").addEventListener("click", function() {
    let message = document.getElementById("message").value;
    if (message.trim() !== "") {
        let chatBox = document.getElementById("chat-box");
        let newMessage = document.createElement("div");
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        document.getElementById("message").value = "";  // Clear message box
        chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
    }
});