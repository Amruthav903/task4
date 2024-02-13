document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch values from form fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // You can perform further validation here before submitting the form

    // Display submitted values (for demonstration)
    alert(`Registration Successful!\nUsername: ${username}\nEmail: ${email}`);

    // Reset form fields
    this.reset();
});
