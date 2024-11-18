// Selecting necessary elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.querySelector('.add-btn');
const tableBody = document.querySelector('tbody');

// Function to update task numbers
function updateTaskNumbers() {
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach((row, index) => {
        row.children[0].textContent = index + 1; // Update S. No
    });
}

// Function to delete a task row
function deleteTask(event) {
    const row = event.target.closest('tr');
    row.remove(); // Remove the row
    updateTaskNumbers(); // Update numbering after deletion
}

// Function to add a new task row
function addTask(event) {
    const taskName = taskInput.value.trim();
    if (taskName === '') {
        alert('Please enter a task name!');
        return;
    }

    // Create a new row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td></td>
        <td>${taskName}</td>
        <td><button class="add-btn">Add</button></td>
        <td><button class="del-btn">Delete</button></td>
    `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Clear the input field
    taskInput.value = '';

    // Update task numbers
    updateTaskNumbers();

    // Add delete functionality to the new task
    const delBtn = newRow.querySelector('.del-btn');
    delBtn.addEventListener('click', deleteTask);
}

// Attach event listener to the "Add Task" button
addBtn.addEventListener('click', addTask);

// Add delete functionality to existing tasks
const deleteButtons = document.querySelectorAll('.del-btn');
deleteButtons.forEach((button) => {
    button.addEventListener('click', deleteTask);
});
