document.getElementById('file-upload').addEventListener('change', function() {
    var fileInput = document.getElementById('file-upload');
    var fileName = fileInput.files[0].name;
    var dropZone = document.querySelector('.drop-zone');
    dropZone.innerHTML = `
        <i class="bi bi-cloud-upload"></i> <br>
        Selected file: ${fileName}
        <br>
        <small class="small">Supported format: CSV.XML.FTP.HTTP</small>
        <br>
        <h6><b><small>OR</small></b></h6>
        <label for="file-upload" class="custom-file-upload">
            <i class="bi bi-upload"></i> Browse files
        </label>
        <input id="file-upload" type="file" name="upload" class="hidden-input" />
    `;
});

function uploadFile() {
    alert('File uploaded successfully.');
}

function addEntry() {
    const source = document.getElementById('sourceInput').value;
    const location = document.getElementById('locationInput').value;
    const value = document.getElementById('valueInput').value;
    const fileInput = document.getElementById('file-upload');

    if (!source || !location || !value || fileInput.files.length === 0) {
        alert('Please fill out all fields and upload a file.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imageUrl = e.target.result;
        const tableBody = document.querySelector('#dataTable tbody');
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${source}</td>
            <td>${location}</td>
            <td>${value}</td>
            <td>Edit</td>
            <td>Delete</td>
            <td><img src="${imageUrl}" alt="${file.name}" style="max-width: 100px; max-height: 100px;" /></td>
        `;

        document.getElementById('sourceInput').value = '';
        document.getElementById('locationInput').value = '';
        document.getElementById('valueInput').value = '';
        fileInput.value = ''; 
        dropZone.innerHTML = `
            <i class="bi bi-cloud-upload"></i> <br>
            Drag and drop files here
            <br>
            <small class="small">Supported format: CSV.XML.FTP.HTTP</small>
            <br>
            <h6><b><small>OR</small></b></h6>
            <label for="file-upload" class="custom-file-upload">
                <i class="bi bi-upload"></i> Browse files
            </label>
            <input id="file-upload" type="file" name="upload" class="hidden-input" />
        `;
    };

    reader.readAsDataURL(file);
}

function calculateCarbonEmission() {
    alert('Calculating carbon emission...');
}
