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

// Function to preview uploaded image
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profileImgPreview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
