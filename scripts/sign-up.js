function loadUsers() {
    fetch('data/user.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            if (!localStorage.getItem('users')) {
                localStorage.setItem('users', JSON.stringify(users));
                console.log("Users loaded into localStorage:", users);
            }
        })
        .catch(error => console.error('Error loading user data:', error));
}

// Call the function to load users when the page is first accessed
loadUsers();

// Function to create a new user account
function createAccount() {
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const feedbackDiv = document.getElementById('feedback');

    feedbackDiv.textContent = '';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        feedbackDiv.textContent = 'Invalid email format. Please enter a valid email address.';
        feedbackDiv.style.color = 'red';
        return;
    }

    const phonePattern = /^\+?[0-9]{7,15}$/;
    if (!phonePattern.test(phone)) {
        feedbackDiv.textContent = 'Invalid phone number format. Please enter a valid phone number (e.g., +1234567890).';
        feedbackDiv.style.color = 'red';
        return;
    }

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        feedbackDiv.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.';
        feedbackDiv.style.color = 'red';
        return;
    }

    if (password !== confirmPassword) {
        feedbackDiv.textContent = 'Passwords do not match. Please try again.';
        feedbackDiv.style.color = 'red';
        return;
    }

    const userConfirmation = window.confirm("Do you really want to submit this form?");
    
    if (userConfirmation) {
        const newUser = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: password,
            role: 'user' 
        };

        // Retrieve existing users from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(user => user.email === newUser.email)) {
            feedbackDiv.textContent = "User with this email already exists!";
            feedbackDiv.style.color = 'red';
            return;
        }

        if (users.some(user => user.username === newUser.username)) {
            feedbackDiv.textContent = "User with this username already exists!";
            feedbackDiv.style.color = 'red';
            return;
        }

        // Add new user to the users array and store in localStorage
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        clearFormInputs();

        window.location.href = 'log.html';
    }
}

// Clear form inputs after submission
function clearFormInputs() {
    document.getElementById('username').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
}