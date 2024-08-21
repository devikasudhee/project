document.addEventListener('DOMContentLoaded', function() {
            
    const employeeData = JSON.parse(localStorage.getItem('employeeData')) || [];
    const tableBody = document.getElementById('employee-table-body');

    employeeData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.empId}</td>
            <td>${data.name}</td>
            <td>${data.department}</td>
            <td>${data.salary}</td>
            <td>${data.experience}</td>
            <td>
                <button class="btn btn-warning btn-sm edit-btn">EDIT</button>
                <button class="btn btn-danger btn-sm delete-btn">DELETE</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = button.closest('tr');
            const empId = row.cells[0].innerText;
            const name = row.cells[1].innerText;
            const department = row.cells[2].innerText;
            const salary = row.cells[3].innerText;
            const experience = row.cells[4].innerText;

            const rowData = { empId, name, department, salary, experience };
            localStorage.setItem('editRowData', JSON.stringify(rowData));

            window.location.href = 'pages/edit.html';
        });
    });

    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this row?')) {
                const row = button.closest('tr');
                const empId = row.cells[0].innerText;

                const currentData = JSON.parse(localStorage.getItem('employeeData')) || [];
                const updatedData = currentData.filter(emp => emp.empId !== empId);
                localStorage.setItem('employeeData', JSON.stringify(updatedData));

                row.remove();
            }
        });
    });

    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchInput = document.getElementById('search-input').value.trim();
        const rows = document.querySelectorAll('tbody tr');

        rows.forEach(row => {
            const empId = row.querySelector('td').textContent;
            if (empId === searchInput) {
                row.style.backgroundColor = '#d1e7dd';
            } else {
                row.style.backgroundColor = ''; 
            }
        });
    });

    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', function() {
        window.location.href = 'pages/display.html';
    });
});