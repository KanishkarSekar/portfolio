// Get mobile menu elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Toggle mobile menu
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    // Change menu icon
    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// Close menu when clicking a navigation link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// ==========================
// Contact Form
// ==========================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Handle form submission
contactForm.addEventListener("submit", function (event) {
    // Prevent page reload
    event.preventDefault();

    // Get user input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if fields are empty
    if (!name || !email || !subject || !message) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Frontend demo only — no message is sent to a server
    formMessage.textContent =
        "Form validated successfully! Connect a backend to send messages.";

    // Clear form fields
    contactForm.reset();
});