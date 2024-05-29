document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous error messages
    let errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(error) {
        error.remove();
    });

    // Perform validation
    let isValid = true;

    // Validate username
    let username = document.getElementById('username').value;
    if (username.trim() === "") {
        showError('username', 'Username is required');
        isValid = false;
    }

    // Validate email
    let email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        showError('email', 'Invalid email address');
        isValid = false;
    }

    // Validate password
    let password = document.getElementById('password').value;
    if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters long');
        isValid = false;
    }

    // Validate confirm password
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match');
        isValid = false;
    }

    // If the form is valid, you can proceed with form submission or further processing
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can proceed with form submission (e.g., using AJAX) or other processing
        // e.g., this.submit();
    }
});

function showError(fieldId, message) {
    let field = document.getElementById(fieldId);
    let error = document.createElement('div');
    error.className = 'error';
    error.innerText = message;
    field.parentNode.insertBefore(error, field.nextSibling);
}

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
