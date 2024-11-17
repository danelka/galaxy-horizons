// Fetch users stored in localStorage
function fetchUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
}

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const usernameOrEmail = document.getElementById('usernameOrEmail').value;
    const password = document.getElementById('password').value;

    const localStorageUsers = fetchUsersFromLocalStorage(); // Fetch users from localStorage

    const user = localStorageUsers.find(u => 
        (u.email === usernameOrEmail || u.username === usernameOrEmail) && u.password === password
    );

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store logged-in user data        
        window.location.href = 'profile.html'; 
    } else {
        document.getElementById('feedback').innerText = 'User not found or wrong password';
    }
})