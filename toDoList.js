<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const newItemInput = document.getElementById('new-item');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    function addTodo() {
        const newItemText = newItemInput.value.trim();

        if (newItemText !== '') {
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;

            newItem.addEventListener('click', function() {
                newItem.classList.add('completed');
                setTimeout(function() {
                    todoList.removeChild(newItem);
                    updateLocalStorage();
                }, 1000);
            });

            todoList.appendChild(newItem);
            newItemInput.value = '';
            updateLocalStorage();
        }
    }

    addBtn.addEventListener('click', addTodo);

    function updateLocalStorage() {
        const todoItems = [];
        todoList.querySelectorAll('li').forEach(function(item) {
            todoItems.push({
                text: item.textContent,
                completed: item.classList.contains('completed')
            });
        });
        localStorage.setItem('todos', JSON.stringify(todoItems));
    }

    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(function(todo) {
            const newItem = document.createElement('li');
            newItem.textContent = todo.text;
            if (todo.completed) {
                newItem.classList.add('completed');
            }

            newItem.addEventListener('click', function() {
                newItem.classList.add('completed');
                setTimeout(function() {
                    todoList.removeChild(newItem);
                    updateLocalStorage();
                }, 1000);
            });

            todoList.appendChild(newItem);
        });
    }

    loadTodos();
});
=======
document.addEventListener('DOMContentLoaded', function() {
    const newItemInput = document.getElementById('new-item');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    function addTodo() {
        const newItemText = newItemInput.value.trim();

        if (newItemText !== '') {
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;

            newItem.addEventListener('click', function() {
                newItem.classList.add('completed');
                setTimeout(function() {
                    todoList.removeChild(newItem);
                    updateLocalStorage();
                }, 1000);
            });

            todoList.appendChild(newItem);
            newItemInput.value = '';
            updateLocalStorage();
        }
    }

    addBtn.addEventListener('click', addTodo);

    function updateLocalStorage() {
        const todoItems = [];
        todoList.querySelectorAll('li').forEach(function(item) {
            todoItems.push({
                text: item.textContent,
                completed: item.classList.contains('completed')
            });
        });
        localStorage.setItem('todos', JSON.stringify(todoItems));
    }

    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(function(todo) {
            const newItem = document.createElement('li');
            newItem.textContent = todo.text;
            if (todo.completed) {
                newItem.classList.add('completed');
            }

            newItem.addEventListener('click', function() {
                newItem.classList.add('completed');
                setTimeout(function() {
                    todoList.removeChild(newItem);
                    updateLocalStorage();
                }, 1000);
            });

            todoList.appendChild(newItem);
        });
    }

    loadTodos();
});
>>>>>>> feae8c898c7d248c238326ba750bbdf93caa1cd8
