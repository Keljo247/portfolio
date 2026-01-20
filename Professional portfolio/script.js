document.addEventListener('DOMContentLoaded', () => {
    // --- Functionality 1: Mobile Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggles the 'active' class on the hamburger icon for animation
        hamburger.classList.toggle('active');
        // Toggles the 'active' class on the nav menu to slide it in/out
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked (for smoother mobile experience)
    document.querySelectorAll('.nav-link-item').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- Functionality 2: Active Page Highlighting ---
    // Get the current page URL path (e.g., "/about.html" or "/")
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-link-item');
    const menuLength = menuItems.length;

    // Loop through nav links and check if their href matches current location
    for (let i = 0; i < menuLength; i++) {
        // Get the href value (e.g., "about.html")
        const linkHref = menuItems[i].getAttribute('href');
        
        // Check if the current location indicates this link (handling root "/" vs "index.html")
        if (currentLocation.includes(linkHref) && linkHref !== "/") {
             menuItems[i].classList.add("active");
        } 
        // Special check for the home page root path
        else if ((currentLocation === "/" || currentLocation.endsWith("/")) && linkHref === "index.html") {
             menuItems[i].classList.add("active");
        }
    }
});