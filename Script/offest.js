function likeBusiness() {
    let likeCount = parseInt(event.target.innerText);
    event.target.innerText = `${likeCount + 1} likes`;
    event.target.classList.add('liked');
    event.target.disabled = true
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