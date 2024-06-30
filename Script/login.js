function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon').firstElementChild;
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.replace('bi-eye-slash', 'bi-eye');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.replace('bi-eye', 'bi-eye-slash');
    }
}

function validateLogin() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');

    // Regular expression to validate password: at least 8 characters, with letters, numbers, and symbols
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;

    //admin@example.com default username
    //Admin123! default password

    if (!passwordPattern.test(password)) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
        showVerificationDialog();
    }
}

function showVerificationDialog() {
    document.getElementById('verificationDialog').style.display = 'block';
    startCountdown();
}

function closeVerificationDialog() {
    document.getElementById('verificationDialog').style.display = 'none';
}

function verifyCode() {
    const code1 = document.getElementById('code1').value;
    const code2 = document.getElementById('code2').value;
    const code3 = document.getElementById('code3').value;
    const code4 = document.getElementById('code4').value;
    const code5 = document.getElementById('code5').value;
    const code6 = document.getElementById('code6').value;

    const enteredCode = code1 + code2 + code3 + code4 + code5 + code6;
    const correctCode = "629001";

    if (enteredCode === correctCode) {
        window.location.href = '/HTML/Dashboard.html';
    } else {
        alert('Incorrect verification code. Please try again.');
    }

    const verifyButton = document.getElementById('verifyButton');
    verifyButton.classList.add('enabled');
    verifyButton.disabled = false;

    setTimeout(() => {
        closeVerificationDialog();

        document.getElementById('verifyButtonText').style.display = 'inline';
        document.getElementById('spinner').style.display = 'none';
        verifyButton.classList.remove('enabled');
    }, 3000);
}

function requestAnotherCode() {
    alert('Requesting another code...');
}

function moveToNext(currentInput, nextInputId) {
    const maxLength = currentInput.maxLength;
    const nextInput = document.getElementById(nextInputId);

    if (currentInput.value.length >= maxLength) {
        nextInput.focus();
    }

    updateVerifyButtonState();
}

function updateVerifyButtonState() {
    const code1 = document.getElementById('code1').value;
    const code2 = document.getElementById('code2').value;
    const code3 = document.getElementById('code3').value;
    const code4 = document.getElementById('code4').value;
    const code5 = document.getElementById('code5').value;
    const code6 = document.getElementById('code6').value;

    const verifyButton = document.getElementById('verifyButton');

    if (code1 && code2 && code3 && code4 && code5 && code6) {
        verifyButton.classList.add('enabled');
        verifyButton.disabled = false;
    } else {
        verifyButton.classList.remove('enabled');
        verifyButton.disabled = true;
    }
}

function startCountdown() {
    let seconds = 60;
    const countdownTimer = document.getElementById('countdownTimer');
    const countdownInterval = setInterval(() => {
        seconds--;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        countdownTimer.textContent = `Time remaining: ${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            countdownTimer.textContent = 'Time expired';
            document.getElementById('requestAnotherCodeLink').style.display = 'inline';
        }
    }, 1000);
}
