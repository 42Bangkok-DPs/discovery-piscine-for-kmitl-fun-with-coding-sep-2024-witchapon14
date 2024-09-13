document.addEventListener('DOMContentLoaded', function() {
    const ftList = document.getElementById('ft_list');
    const newButton = document.getElementById('New');

    // Load saved todos from cookies
    loadTodos();

    // Handle new todo creation
    newButton.addEventListener('click', function() {
        const todo = prompt('Create a new TO DO:');
        if (todo && todo.trim() !== '') {
            addTodo(todo);
            saveTodos();
        }
    });

    // Add a new todo element
    function addTodo(todo) {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'item';
        todoDiv.textContent = todo;

        // Add click event to remove todo
        todoDiv.addEventListener('click', function() {
            if (confirm('Do you want to remove this TO DO?')) {
                todoDiv.remove();
                saveTodos();
            }
        });

        // Add the todo to the top of the list
        ftList.insertBefore(todoDiv, ftList.firstChild);
    }

    // Save todos to cookies
    function saveTodos() {
        const todos = Array.from(ftList.children).map(function(item) {
            return item.textContent;
        });
        document.cookie = `todos=${JSON.stringify(todos)}; path=/;`;
    }

    // Load todos from cookies
    function loadTodos() {
        const cookies = document.cookie.split('; ');
        const todoCookie = cookies.find(cookie => cookie.startsWith('todos='));
        if (todoCookie) {
            const todos = JSON.parse(todoCookie.split('=')[1]);
            todos.forEach(addTodo);
        }
    }
});