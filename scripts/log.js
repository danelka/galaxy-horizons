// Fetch users from the 'data/user.json' file
async function fetchUsers() {
    try {
        const response = await fetch('./data/user.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error("Error fetching user data:", error);
        document.getElementById('feedback').innerText = "Error loading user data.";
        return [];
    }
}

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

    const fetchedUsers = await fetchUsers(); // Fetch users from JSON
    const localStorageUsers = fetchUsersFromLocalStorage(); // Fetch users from localStorage

    const allUsers = [...fetchedUsers, ...localStorageUsers];

    const user = allUsers.find(u => 
        (u.email === usernameOrEmail || u.username === usernameOrEmail) && u.password === password
    );

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store logged-in user data        
        window.location.href = 'profile.html'; 
    } else {
        document.getElementById('feedback').innerText = 'User not found or wrong password';
    }
})