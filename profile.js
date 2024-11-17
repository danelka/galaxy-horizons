// Load the logged-in user from localStorage
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (loggedInUser) {
    displayUserInfo(loggedInUser);
} else {
    window.location.href = 'log-in.html';
}

// Function to display user information
function displayUserInfo(user) {
    document.getElementById('userName').textContent = user.username || 'User Name';
    document.getElementById('userFirstName').textContent = user.firstName || 'N/A';
    document.getElementById('userLastName').textContent = user.lastName || 'N/A';
    document.getElementById('userEmail').textContent = user.email || 'N/A';
    document.getElementById('userPhone').textContent = user.phone || 'N/A';
}