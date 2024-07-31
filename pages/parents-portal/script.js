// Adding an event listener to the form submission event
document.getElementById('loginForm').addEventListener('submit', function (event) {
    // Preventing the default form submission behavior
    event.preventDefault();

    // Getting the values from the email and password input fields
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    //credential validation logic
    var validEmail = "gurkamal@gmail.com"; // Example valid email
    var validPassword = "1234"; // Example valid password

    // Checking if the entered email and password match the valid ones
    if (email === validEmail && password === validPassword) {
        // Redirecting to another page if credentials are correct
        window.location.href = "parents-portal-main.html"; // Replace with the URL of the page you want to open
    } else {
        // Alerting the user if the credentials are incorrect
        alert("Invalid email or password. Please try again.");
    }
});
