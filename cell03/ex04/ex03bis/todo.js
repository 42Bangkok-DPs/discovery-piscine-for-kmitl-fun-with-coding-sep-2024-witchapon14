$(document).ready(function() {
    const $ftList = $('#ft_list');

    // Load saved todos from cookies
    loadTodos();

    // Handle new todo creation
    $('#New').click(function() {
        const todo = prompt('Create a new TO DO:');
        if (todo && todo.trim() !== '') {
            addTodo(todo);
            saveTodos();
        }
    });

    // Add a new todo element
    function addTodo(todo) {
        const $todoDiv = $('<div class="item"></div>').text(todo);
        // Add click event to remove todo
        $todoDiv.click(function() {
            if (confirm('Do you want to remove this TO DO?')) {
                $todoDiv.remove();
                saveTodos();
            }
        });
        // Add the todo to the top of the list
        $ftList.prepend($todoDiv);
    }

    // Save todos to cookies
    function saveTodos() {
        const todos = $ftList.children().map(function() {
            return $(this).text();
        }).get();
        const expires = new Date();
        expires.setTime(expires.getTime() + (7 * 24 * 60 * 60 * 1000)); // คุกกี้หมดอายุใน 7 วัน
        document.cookie = `todos=${JSON.stringify(todos)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax;`;
    }

    // Load todos from cookies
    function loadTodos() {
        const cookie = document.cookie.split('; ').find(c => c.startsWith('todos='));
        if (cookie) {
            const todos = JSON.parse(cookie.split('=')[1]);
            todos.forEach(addTodo);
        }
    }
});