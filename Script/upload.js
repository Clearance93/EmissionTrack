document.getElementById('file-upload').addEventListener('change', function() {
    var fileInput = document.getElementById('file-upload');
    var fileName = fileInput.files[0].name;
    alert('Selected file: ' + fileName);
});

// Function to handle file upload (dummy function, adjust as needed)
function uploadFile() {
    alert('File uploaded successfully.');
}

// Function to add an entry to the data table
function addEntry() {
    const source = document.getElementById('sourceInput').value;
    const location = document.getElementById('locationInput').value;
    const value = document.getElementById('valueInput').value;

    // Validate input fields (if needed)
    if (!source || !location || !value) {
        alert('Please fill out all fields.');
        return;
    }

    // Create table row and append data
    const tableBody = document.querySelector('#dataTable tbody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${source}</td>
        <td>${location}</td>
        <td>${value}</td>
        <td>Edit</td>
        <td>Delete</td>
        <td><img src="/Images/julia-mellon.jpg" alt="julia-mellon" /> Julia Mellon</td>
    `;

    // Clear input fields after adding entry
    document.getElementById('sourceInput').value = '';
    document.getElementById('locationInput').value = '';
    document.getElementById('valueInput').value = '';
}

// Function to calculate carbon emission (dummy function, adjust as needed)
function calculateCarbonEmission() {
    alert('Calculating carbon emission...');
}
