const rowData = JSON.parse(localStorage.getItem('editRowData'));

document.getElementById('emp-id').value = rowData.empId;
document.getElementById('name').value = rowData.name;
document.getElementById('department').value = rowData.department;
document.getElementById('salary').value = rowData.salary;
document.getElementById('experience').value = rowData.experience;

document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const updatedRowData = {
        empId: document.getElementById('emp-id').value, 
        name: document.getElementById('name').value,
        department: document.getElementById('department').value,
        salary: document.getElementById('salary').value,
        experience: document.getElementById('experience').value,
    };

    const employeeData = JSON.parse(localStorage.getItem('employeeData')) || [];
    const index = employeeData.findIndex(emp => emp.empId === rowData.empId);
    if (index > -1) {
        employeeData[index] = updatedRowData;
    }

    localStorage.setItem('employeeData', JSON.stringify(employeeData));

  
    window.location.href = '../index.html';
});