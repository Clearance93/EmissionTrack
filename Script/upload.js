document.getElementById('file-upload').addEventListener('change', function() {
    var fileInput = document.getElementById('file-upload');
    var fileName = fileInput.files[0].name;
    alert('Selected file: ' + fileName);
});
