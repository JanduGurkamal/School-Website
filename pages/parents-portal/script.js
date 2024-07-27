    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Replace with your own credential validation logic
    var validEmail = "example@example.com";
    var validPassword = "password123";

    if (email === validEmail && password === validPassword) {
        // Redirect to another page if credentials are correct
        window.location.href = "success.html"; // Replace with the URL of the page you want to open
            } else {
        alert("Invalid email or password. Please try again.");
            }
        });
        