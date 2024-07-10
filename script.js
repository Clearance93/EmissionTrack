const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const countdownClock = document.getElementById('countdown-clock');
const launchDate = new Date('2024-07-15').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownClock.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        countdownClock.innerHTML = "EXPIRED";
    }
};

setInterval(updateCountdown, 1000);

// Handling newsletter form submission and success message display
const newsletterForm = document.getElementById('newsletter-form');
const successMessage = document.getElementById('newsletter-success');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.style.display = 'block';
    newsletterForm.reset();
});

// Modal handling
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close");

openModalBtn.addEventListener('click', () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

const modalForm = document.getElementById("modalForm");

modalForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const modalEmail = document.getElementById("email").value;
    const modalSuccess = document.getElementById("modalSuccess");
    modalSuccess.style.display = "block";
    modalForm.reset();
});

function validateAndSubmit(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regex.test(email)) {
        return false; // Validation failed, do not submit form
    }
    
    document.getElementById('newsletter-form').submit();
}

document.addEventListener('DOMContentLoaded', function() {
    const requestDemoModal = document.getElementById('requestDemoModal');
    const requestDemoBtn = document.getElementById('requestDemoBtn');
    const requestDemoSpan = requestDemoModal.querySelector('.close');

    requestDemoBtn.onclick = function() {
        requestDemoModal.style.display = 'block';
    }

    requestDemoSpan.onclick = function() {
        requestDemoModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == requestDemoModal) {
            requestDemoModal.style.display = 'none';
        }
    }

    const waitingListModal = document.getElementById('waitingListModal');
    const waitingListBtn = document.getElementById('waitingListBtn');
    const waitingListSpan = waitingListModal.querySelector('.close');

    waitingListBtn.onclick = function() {
        waitingListModal.style.display = 'block';
    }

    waitingListSpan.onclick = function() {
        waitingListModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == waitingListModal) {
            waitingListModal.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const waitingListModal = document.getElementById('waitingListModal');
    const waitingListBtn = document.getElementById('waitingListBtn');
    const waitingListSpan = waitingListModal.querySelector('.close');
    const waitingListForm = document.getElementById('waitingListForm');
    const waitingListSuccess = document.getElementById('waitingListSuccess');
    const waitingListInfo = document.getElementById('waitingListInfo');
    const waitingListPosition = document.getElementById('waitingListPosition');
    const waitingListID = document.getElementById('waitingListID');

    let waitingList = JSON.parse(localStorage.getItem('waitingList')) || [];

    waitingListBtn.onclick = function() {
        waitingListModal.style.display = 'block';
    }

    waitingListSpan.onclick = function() {
        waitingListModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == waitingListModal) {
            waitingListModal.style.display = 'none';
        }
    }

    waitingListForm.onsubmit = function(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const company = document.getElementById('company').value;
        const message = document.getElementById('message').value;

        const newUser = {
            id: 'ID-' + (waitingList.length + 1),
            fullName: fullName,
            email: email,
            phone: phone,
            company: company,
            message: message,
        };

        waitingList.push(newUser);
        localStorage.setItem('waitingList', JSON.stringify(waitingList));

        const position = waitingList.length;
        const userID = newUser.id;

        sendEmail(email, position, userID);

        waitingListSuccess.style.display = 'block';
        waitingListInfo.style.display = 'block';
        waitingListPosition.textContent = `You are number ${position} on the waiting list.`;
        waitingListID.textContent = `Your ID is ${userID}.`;

        waitingListModal.style.display = 'none';
    }

    function sendEmail(email, position, userID) {
        console.log(`Sending email to ${email}...`);
        console.log(`You are number ${position} on the waiting list.`);
        console.log(`Your ID is ${userID}.`);
    }
});
