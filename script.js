document.addEventListener('DOMContentLoaded', () => {
    // Get form and feedback elements
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Validation functions
    const isValidUsername = (username) => {
        return username.length >= 3;
    };

    const isValidEmail = (email) => {
        return email.includes('@') && email.includes('.');
    };

    const isValidPassword = (password) => {
        return password.length >= 8;
    };

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        // Reset feedback
        feedbackDiv.textContent = '';
        feedbackDiv.className = '';

        // Validate each field
        let isValid = true;
        let messages = [];

        if (!isValidUsername(username)) {
            isValid = false;
            messages.push('Username must be at least 3 characters long');
        }

        if (!isValidEmail(email)) {
            isValid = false;
            messages.push('Email must contain both "@" and "." characters');
        }

        if (!isValidPassword(password)) {
            isValid = false;
            messages.push('Password must be at least 8 characters long');
        }

        // Display feedback
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; 
            form.reset(); // Clear the form
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.style.display = 'block'; // Show the feedback div
        }
    });
});
