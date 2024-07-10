document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('upload-file').addEventListener('click', () => {
        document.getElementById('file-input').click();
    });

    document.getElementById('upload-image').addEventListener('click', () => {
        document.getElementById('image-input').click();
    });

    document.getElementById('send-location').addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                addMessage(`Location: <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">View on Map</a>`);
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    });

    document.getElementById('send-link').addEventListener('click', () => {
        document.getElementById('link-modal').style.display = 'block';
    });

    document.getElementById('link-submit').addEventListener('click', () => {
        const link = document.getElementById('link-input').value;
        addMessage(`<a href="${link}" target="_blank">${link}</a>`);
        document.getElementById('link-modal').style.display = 'none';
    });

    document.getElementById('file-input').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            addMessage(`File: ${file.name}`);
        }
    });

    document.getElementById('image-input').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                addMessage(`<img src="${e.target.result}" alt="Image" style="max-width: 200px;">`);
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('send-button').addEventListener('click', () => {
        const input = document.getElementById('message-input');
        const messageText = input.value.trim();
        if (messageText) {
            addMessage(messageText);
            input.value = '';
        }
    });

    document.getElementById('message-input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            document.getElementById('send-button').click();
        }
    });

    function addMessage(messageText) {
        const messageConversation = document.querySelector('.message-conversation');
        const message = document.createElement('div');
        message.classList.add('message');

        const timestamp = document.createElement('p');
        timestamp.classList.add('timestamp');
        timestamp.setAttribute('data-time', new Date().getTime()); 
        timestamp.textContent = 'just now';

        const messageContent = document.createElement('p');
        messageContent.innerHTML = `<strong><img src="/Images/Clearance.jpg" alt="Your Profile" class="img"> Clearance Morumudi</strong>: ${messageText}`;

        message.appendChild(timestamp);
        message.appendChild(messageContent);

        messageConversation.appendChild(message);
        messageConversation.scrollTop = messageConversation.scrollHeight;
        updateTimestamps(); 
    }

    function updateTimestamps() {
        const messageItems = document.querySelectorAll('.message');
        const now = new Date().getTime();
        messageItems.forEach(item => {
            const timestampElem = item.querySelector('.timestamp');
            const timestamp = parseInt(timestampElem.getAttribute('data-time'));
            const elapsed = now - timestamp;
            const minutes = Math.floor(elapsed / (1000 * 60));

            if (minutes < 1) {
                timestampElem.textContent = 'just now';
            } else if (minutes === 1) {
                timestampElem.textContent = '1 minute ago';
            } else {
                timestampElem.textContent = minutes + ' minutes ago';
            }
        });
    }

    updateTimestamps();

    setInterval(updateTimestamps, 60000); 
});
