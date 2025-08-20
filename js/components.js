// Component loader for navbar and footer
document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(html => {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = html;
            }
        })
        .catch(error => console.error('Error loading navbar:', error));

    // Load footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(html => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = html;
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});