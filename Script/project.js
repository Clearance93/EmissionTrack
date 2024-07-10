document.getElementById('search-button').addEventListener('click', function() {
    const keyword = document.getElementById('search-input').value.toLowerCase();
    const businessCards = document.querySelectorAll('.business-card');

    businessCards.forEach(card => {
        const businessName = card.querySelector('.business-info h6').textContent.toLowerCase();
        const businessDescription = card.querySelector('.business-info p').textContent.toLowerCase();

        if (businessName.includes(keyword) || businessDescription.includes(keyword)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});
