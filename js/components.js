// Component loader for navbar and footer
document.addEventListener('DOMContentLoaded', function() {
    console.log('Components.js loaded'); // Debug log
    
    // Load navbar
    fetch('components/navbar.html')
        .then(response => {
            console.log('Navbar fetch response:', response.status); // Debug log
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            console.log('Navbar HTML loaded'); // Debug log
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = html;
                console.log('Navbar injected'); // Debug log
            } else {
                console.error('Navbar placeholder not found');
            }
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
            // Fallback: show a basic navbar
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = '<header style="background: #333; color: white; padding: 10px; text-align: center;">Navigation Loading Error</header>';
            }
        });

    // Load footer
    fetch('components/footer.html')
        .then(response => {
            console.log('Footer fetch response:', response.status); // Debug log
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            console.log('Footer HTML loaded'); // Debug log
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = html;
                console.log('Footer injected'); // Debug log
            } else {
                console.error('Footer placeholder not found');
            }
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            // Fallback: show a basic footer
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = '<footer style="background: #333; color: white; padding: 20px; text-align: center;">Footer Loading Error</footer>';
            }
        });
});