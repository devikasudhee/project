document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the data from the form
    const empId = document.getElementById('emp-id').value;
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const salary = document.getElementById('salary').value;
    const experience = document.getElementById('experience').value;

    // Create a new employee object
    const newEmployee = {
        empId,
        name,
        department,
        salary,
        experience
    };

    // Get existing employee data from localStorage, or create a new array if none exists
    const employeeData = JSON.parse(localStorage.getItem('employeeData')) || [];
    employeeData.push(newEmployee);

    // Store the updated employee data in localStorage
    localStorage.setItem('employeeData', JSON.stringify(employeeData));

    // Redirect back to index.html
    window.location.href = '../index.html';
});