document.addEventListener('DOMContentLoaded', function() {
    const preferencesForm = document.getElementById('preferencesForm');

    const savedPreferences = JSON.parse(localStorage.getItem('preferences'));
    if (savedPreferences) {
        document.getElementById('theme').value = savedPreferences.theme;
        document.getElementById('notifications').value = savedPreferences.notifications;
        document.getElementById('language').value = savedPreferences.language;
        document.getElementById('timezone').value = savedPreferences.timezone;
    }

    preferencesForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const preferences = {
            theme: document.getElementById('theme').value,
            notifications: document.getElementById('notifications').value,
            language: document.getElementById('language').value,
            timezone: document.getElementById('timezone').value,
        };

        localStorage.setItem('preferences', JSON.stringify(preferences));
        alert('Preferences saved successfully!');
    });
});
