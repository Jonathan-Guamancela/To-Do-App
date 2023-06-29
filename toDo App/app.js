document.getElementById('todoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value;

    if (todoText === '') {
        return;  // Don't add an empty todo
    }

    const li = document.createElement('li');
    li.textContent = todoText;

    // Add a click listener to cross out the todo
    li.addEventListener('click', function(e) {
        li.classList.toggle('strike');
    });

    // Create a delete button for the todo
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Add a click listener to delete the todo
    deleteButton.addEventListener('click', function(e) {
        li.remove();
    });

    li.appendChild(deleteButton);

    document.getElementById('todoList').appendChild(li);

    // Clear the input field
    todoInput.value = '';
});