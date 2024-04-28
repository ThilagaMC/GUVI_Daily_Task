document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const dataTable = document.getElementById('dataTable');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Get form values
      const firstName = document.getElementById('firstName').value;
      // Get other form values similarly
  
      // Append values to the table
      const row = dataTable.insertRow();
      row.insertCell().textContent = firstName;
      // Insert other form values into respective cells
  
      // Clear form fields
      form.reset();
    });
  });
  