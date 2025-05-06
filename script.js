// script.js
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation (can be improved)
    if (username === "" || password === "") {
        alert("Both fields are required.");
        return;
    }

    // For demo, let's assume a successful login
    alert("Login successful!");
    window.location.href = "admin-panel.html"; // Redirect to the admin panel
});
