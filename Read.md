# Galactic Horizons Website

## Overview

This is the front-end layout for the "Galactic Horizons" website, a space exploration and technology platform aimed at advancing human presence in space. The website includes a clean, responsive design and features for user authentication, dynamic content, and an interactive user interface.

## Features

### Header
- **Site Title:** Galactic Horizons
- **Navigation Bar:** 
  - Home
  - About
  - Blog
  - Services
  - Gallery
  - Contact
- **Authentication Section:** 
  - Username input field
  - Login button
  - Sign up link
  - Logout button (visible when logged in)
- **Mobile Responsiveness:** Navbar collapses into a hamburger menu on smaller screens.

### Main Content
- **Welcome Section:**
  - Title: "Welcome to Galactic Horizons"
  - Description: Brief intro to the mission of Galactic Horizons, focusing on space exploration and technology.
  - Image: A futuristic space station orbiting Earth.

### Footer
- **Copyright:** Se-2329 Maxutova Danelya, WEB-Tech Kamilla Zhakupova
- **Theme Switcher:** Toggle between light and dark themes.
- **Color Change Button:** Allows users to change the page color.
- **Date/Time Display:** Dynamic date and time are shown.

## External Libraries Used
- **Bootstrap 4.5.2**: For responsive design and pre-styled components.
- **jQuery 3.5.1**: For easy DOM manipulation (in the script file).
- **Popper.js**: Used for tooltips and popovers (Bootstrap dependency).

## Scripts
- **JavaScript:** The website uses an external `script.js` file to handle interactivity such as:
  - User authentication (login/logout).
  - Theme switching (dark/light mode).
  - Date/time updates.

## Directory Structure
- `index.html`: The main HTML page for the website.
- `style.css`: Custom styles for the website.
- `script.js`: Custom JavaScript file for handling dynamic interactions.

## Usage

1. **Login:**
   - Input a username in the "Enter your username" field and click "Login."
   - The username will appear in the "Welcome" message after successful login.

2. **Sign Up:**
   - Click the "Sign Up" link to sign up for a new account (though functionality for account creation is not yet implemented).

3. **Change Color:**
   - Click the "Change Color" button to change the page color. The JavaScript code that controls this functionality should be written in `script.js`.

4. **Theme Switch:**
   - Toggle between light and dark themes using the switch in the footer.

## To Do / Future Enhancements

- Implement actual user authentication.
- Complete the sign-up functionality.
- Add more interactivity on the "About," "Blog," and "Gallery" pages.
- Customize color change functionality based on user preference.

---

© 2024 Galactic Horizons
s