var TodoApp = /** @class */ (function () {
    function TodoApp() {
        this.todoTasks = [];
        this.taskInputHTML = document.getElementById("taskInput");
        this.todoItemsHTML = document.getElementById("todoItems");
    }
    TodoApp.prototype.addNewTask = function (taskText) {
        var newTask = {
            id: (new Date()).getTime(),
            task: taskText,
            completed: false
        };
        this.todoTasks.push(newTask);
        this.renderTasks();
        this.taskInputHTML.value = '';
    };
    TodoApp.prototype.markCompleted = function (id) {
        var targetTask = this.todoTasks.filter(function (el) {
            return el.id === id;
        })[0];
        if (targetTask) {
            targetTask.completed = !targetTask.completed;
        }
        // TODO: send alert for invalid id
        this.renderTasks();
    };
    TodoApp.prototype.removeTask = function (id) {
        this.todoTasks = this.todoTasks.filter(function (el) {
            return el.id !== id;
        });
        this.renderTasks();
    };
    TodoApp.prototype.renderTasks = function () {
        var _this = this;
        /*
        convert the ts array into html list
        */
        this.todoItemsHTML.innerHTML = '';
        this.todoTasks.forEach(function (todoTask) {
            _this.todoItemsHTML.innerHTML += "\n                <li class=\"".concat(todoTask.completed ? 'completed' : 'notcompleted', "\">\n                    ").concat(todoTask.task, "\n                    <button onclick=\"todoApp.markCompleted(").concat(todoTask.id, ")\">Done</button>\n                    <button onclick=\"todoApp.removeTask(").concat(todoTask.id, ")\">Delete</button>\n                </li>\n            ");
        });
    };
    return TodoApp;
}());
var todoApp = new TodoApp();
//# sourceMappingURL=todo.js.map