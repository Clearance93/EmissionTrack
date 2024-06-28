function togglePassword() {
    const passwordField = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');
            
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordToggle.innerHTML = '<i class="bi bi-eye"></i>';
    } else {
        passwordField.type = 'password';
        passwordToggle.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
}

function showVerificationDialog(event) {
    document.getElementById('verificationDialog').style.display = 'block';

    startCountdown();

    var bgcolor = '#9DF2B9';
    var color = '#3e8e41'
    event.style.backgroundColor = bgcolor;
    event.style.color = color;

    var loader = event.querySelector('.loader');
    loader.classList.remove('hidden');
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

function requestAnotherCode() {
    alert('Requesting another code...');
}

function verifyCode() {
    const code1 = document.getElementById('code1').value;
    const code2 = document.getElementById('code2').value;
    const code3 = document.getElementById('code3').value;
    const code4 = document.getElementById('code4').value;
    const code5 = document.getElementById('code5').value;
    const code6 = document.getElementById('code6').value;
    
    if (code1 && code2 && code3 && code4 && code5 && code6) {
        document.getElementById('verifyButton').classList.add('enabled');
        document.getElementById('verifyButtonText').style.display = 'none';
        document.getElementById('spinner').style.display = 'inline-block';
        document.getElementById('verifyButton').disabled = true;

        setTimeout(() => {
            closeVerificationDialog();

            document.getElementById('verifyButtonText').style.display = 'inline';
            document.getElementById('spinner').style.display = 'none';
            document.getElementById('verifyButton').classList.remove('enabled');
            document.getElementById('verifyButton').disabled = false;
        }, 3000);
        
    } else {
        alert('Please enter the complete verification code.');
    }
}

function closeVerificationDialog() {
    document.getElementById('verificationDialog').style.display = 'none';
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

    if (code1 && code2 && code3 && code4 && code5 && code6){
        verifyButton.classList.add('enabled');
        verifyButton.disabled = false;
    } else {
        verifyButton.classList.remove('enabled')
        verifyButton.disabled = true;
    }
}
