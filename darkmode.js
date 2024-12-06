// Retrieve the current dark mode status from localStorage
let darkmode = localStorage.getItem('darkmode'); 
// 'darkmode' will be either 'active' (if dark mode was previously enabled) or null (if not set).

// Get the theme switch button from the DOM using its ID
const themeSwitch = document.getElementById('theme-switch');

// Function to enable dark mode
const enableDarkMode = () => {
    // Add the 'darkmode' class to the body element to apply dark mode styles
    document.body.classList.add('darkmode');
    // Store the user's preference in localStorage as 'active'
    localStorage.setItem('darkmode', 'active');
}

// Function to disable dark mode
const disableDarkMode = () => {
    // Remove the 'darkmode' class from the body element to revert to light mode
    document.body.classList.remove('darkmode');
    // Remove the dark mode preference from localStorage
    localStorage.removeItem('darkmode');
}

// Check if dark mode was previously enabled
if (darkmode === 'active') {
    // If so, enable dark mode when the page loads
    enableDarkMode();
}

// Add a click event listener to the theme switch button
themeSwitch.addEventListener("click", () => {
    // Retrieve the current dark mode status from localStorage
    darkmode = localStorage.getItem('darkmode');

    // Toggle dark mode based on the current status
    if (darkmode !== "active") {
        // If dark mode is not active, enable it
        enableDarkMode();
    } else {
        // If dark mode is active, disable it
        disableDarkMode();
    }
});
