document.addEventListener("DOMContentLoaded", function() {

    // 1. Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: true,     // whether animation should happen only once - while scrolling down
    });

    // 2. Initialize Typed.js for the hero section animation
    const options = {
        strings: ["a Front-End Developer.", "a Tech Instructor.", "a Data Analyst."],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true,
    };
    const typed = new Typed("#typed-text", options);

    // 3. Contact Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success-message');

    contactForm.addEventListener('submit', function(e) {
        // Prevent the default form submission which reloads the page
        e.preventDefault();

        // In a real project, you would send data to a server here.
        // For this demo, we'll just hide the form and show the success message.
        
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';
    });

});