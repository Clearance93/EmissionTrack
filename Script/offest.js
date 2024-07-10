document.getElementById('search-button').addEventListener('click', function() {
    const keyword = document.getElementById('search-input').value.toLowerCase();
    const businessCards = document.querySelectorAll('.business-card');

    businessCards.forEach(card => {
        const businessName = card.querySelector('.business-info h5').textContent.toLowerCase();
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

function likeBusiness() {
    let likeCount = parseInt(event.target.innerText);
    event.target.innerText = `${likeCount + 1} likes`;
    event.target.classList.add('liked');
    event.target.disabled = true;
}

function addReview() {
    let reviewCount = parseInt(event.target.innerText.match(/\d+/)[0]);
    event.target.innerText = `<i class="bi bi-star"></i>(${reviewCount + 1} reviews)`;
    event.target.classList.add('reviewed');
    event.target.disabled = true;
}

document.querySelectorAll('.like').forEach(item => {
    item.addEventListener('click', likeBusiness);
});

document.querySelectorAll('.review').forEach(item => {
    item.addEventListener('click', addReview);
});
