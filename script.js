// Display Current Date and Time
function updateDateTime() {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const dateTime = document.getElementById("dateTime");

  if (dateTime) {
    dateTime.innerText = formattedDate;
  }
}

function showError(element, message) {
  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.textContent = message;
  element.parentNode.appendChild(errorElement);
}

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (error) {
    error.remove();
  });
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// when page loads
document.addEventListener(
  "DOMContentLoaded",
  function () {
    // start time
    setInterval(updateDateTime, 1000);

    // contact form validation
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form elements
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const inquiry = document.getElementById("inquiry");
        const message = document.getElementById("message");

        // Reset previous error messages
        clearErrors();

        // Validate each field
        let isValid = true;

        if (!name.value.trim()) {
          showError(name, "Name is required");
          isValid = false;
        }

        if (!email.value.trim()) {
          showError(email, "Email is required");
          isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
          showError(email, "Invalid email format");
          isValid = false;
        }

        if (inquiry.value === "") {
          showError(inquiry, "Inquiry type is required");
          isValid = false;
        }

        if (!message.value.trim()) {
          showError(message, "Message is required");
          isValid = false;
        }

        // If all fields are valid, submit the form
        if (isValid) {
          alert("Form submitted successfully!");
          this.submit();
        }
      });
    }

    // read more and less logic
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    if (readMoreButtons) {
      readMoreButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
          event.preventDefault();
          const content = this.parentElement.querySelector(
            ".additional-content"
          );
          const isHidden = content.style.display === "none";
          content.style.display = isHidden ? "block" : "none";
          this.textContent = isHidden ? "Read less..." : "Read more...";
        });
      });
    }

    // popup
    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscriptionPopup = document.getElementById("subscriptionPopup");
    const closePopup = document.getElementById("closePopup");
    const subscriptionForm = document.getElementById("subscriptionForm");

    // Handle subscribe button
    if (subscribeBtn) {
      subscribeBtn.addEventListener("click", function () {
        subscriptionPopup.style.display = "block";
      });
    }

    // Handle close button
    if (closePopup) {
      closePopup.addEventListener("click", function () {
        subscriptionPopup.style.display = "none";
      });
    }

    // Handle clicking outside the popup
    window.addEventListener("click", function (event) {
      if (subscriptionPopup) {
        if (event.target == subscriptionPopup) {
          subscriptionPopup.style.display = "none";
        }
      }
    });

    if (subscriptionForm) {
      // Handle form submission
      subscriptionForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for subscribing to our newsletter!");
        subscriptionPopup.style.display = "none";
        subscriptionForm.reset();
      });
    }

    // Handle change color button
    const changeColorBtn = document.getElementById("changeColorBtn");
    if (changeColorBtn) {
      changeColorBtn.addEventListener("click", function () {
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A6"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.background = randomColor;
      });
    }

    // Handle pagination gallery
    const galleryContainer = document.getElementById("gallery-container");

    if (galleryContainer) {
      const images = galleryContainer.querySelectorAll(".col-md-3");
      const totalImages = images.length;
      let currentIndex = 0;

      function showImage(index) {
        images.forEach((img, i) => {
          if (i >= index && i < index + 4) {
            img.style.display = "block";
          } else {
            img.style.display = "none";
          }
        });
      }

      function updateButtons() {
        document.getElementById("prevBtn").disabled = currentIndex === 0;
        document.getElementById("nextBtn").disabled =
          currentIndex >= totalImages - 4;
      }

      document.getElementById("prevBtn").addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          showImage(currentIndex);
          updateButtons();
        }
      });

      document.getElementById("nextBtn").addEventListener("click", () => {
        if (currentIndex < totalImages - 4) {
          currentIndex++;
          showImage(currentIndex);
          updateButtons();
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" && currentIndex > 0) {
          currentIndex--;
          showImage(currentIndex);
          updateButtons();
        } else if (
          event.key === "ArrowRight" &&
          currentIndex < totalImages - 4
        ) {
          currentIndex++;
          showImage(currentIndex);
          updateButtons();
        }
      });

      showImage(currentIndex);
      updateButtons();
    }

    const themeSwitchButton = document.getElementById("themeSwitch");

    if (themeSwitchButton) {
      themeSwitchButton.addEventListener("click", (e) => {
        const header = document.getElementsByTagName("header")[0];
        const footer = document.getElementsByTagName("footer")[0];

        // Toggle the theme
        if (document.body.classList.contains("day-theme")) {
          document.body.classList.remove("day-theme");
          document.body.classList.add("night-theme");
          header.classList.remove('bg-dark');
          header.classList.add('bg-light');
          footer.classList.remove('bg-dark');
          footer.classList.add('bg-light');
        } else {
          document.body.classList.remove("night-theme");
          document.body.classList.add("day-theme");
          header.classList.remove('bg-light');
          header.classList.add('bg-dark');
          footer.classList.remove('bg-light');
          footer.classList.add('bg-dark');
        }
      });

      const playSoundBtn = document.getElementById("playSoundBtn");
      const notificationSound = document.getElementById("notificationSound");

      if (playSoundBtn) {
        playSoundBtn.addEventListener("click", () => {
          if (notificationSound) {
            notificationSound.play();
          }
        });
      }
    }

    const username = localStorage.getItem("username");

    if (username) {
      showWelcomeMessage(username);
    }

    // Function to show welcome message
    function showWelcomeMessage(username) {
      document.getElementById("userDisplay").textContent = username;
      const welcomeMessage = document.getElementById("welcomeMessage");
      welcomeMessage.style.display = "block";
      setTimeout(() => {
        welcomeMessage.style.display = "none"; // Automatically hide after a few seconds
      }, 3000); // Adjust time (in milliseconds) as needed
    }

    // Login button click event
    const authBtn = document.getElementById("authBtn");

    if (authBtn) {
      authBtn.onclick = function () {
        const username = document.getElementById("username").value;
        if (username) {
          localStorage.setItem("username", username);
          showWelcomeMessage(username);
        } else {
          alert("Please enter a username");
        }
      };
    }

    // Logout button click event
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
      logoutBtn.onclick = function () {
        localStorage.removeItem("username");
        document.getElementById("welcomeMessage").style.display = "none";
        document.getElementById("logoutBtn").style.display = "none";
        document.getElementById("username").value = ""; // Clear the username input
        document.getElementById("userDisplay").textContent = ""; // Clear the displayed username
      };
    }

    const signUpBtn = document.getElementById("signUpBtn");

    if (signUpBtn) {
      signUpBtn.onclick = function () {
        alert("Sign up functionality can be added here.");
      };
    }
  },
  false
);
