// Get the navbar ul element
const navbar = document.getElementById('navbar');

// Add event listener to the navbar
navbar.addEventListener('click', function(event) {
    // Check if the clicked element is an anchor tag
    if (event.target.tagName === 'A') {
        // Remove 'active' class from all li elements
        const navItems = navbar.getElementsByTagName('li');
        for (let item of navItems) {
            item.classList.remove('active');
        }
        
        // Add 'active' class to the parent li of the clicked anchor
        event.target.parentElement.classList.add('active');
    }
});
