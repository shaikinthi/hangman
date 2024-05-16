interface TodoTask{
    id: number,
    task: string,
    completed: boolean
}

class TodoApp{
    todoTasks: TodoTask[]
    taskInputHTML: HTMLInputElement 
    todoItemsHTML: HTMLUListElement

    constructor(){
        this.todoTasks = []
        this.taskInputHTML = document.getElementById("taskInput") as HTMLInputElement
        this.todoItemsHTML = document.getElementById("todoItems") as HTMLUListElement
    }

    addNewTask(taskText: string){
        const newTask:TodoTask  = {
            id: (new Date()).getTime(),
            task:taskText,
            completed : false
        }
        this.todoTasks.push(newTask)
        this.renderTasks()
        this.taskInputHTML.value = ''
    }

    markCompleted(id: number){
        const targetTask = this.todoTasks.filter((el) =>{
            return el.id === id
        })[0]
        if(targetTask){
            targetTask.completed = !targetTask.completed;
        }
        // TODO: send alert for invalid id
        this.renderTasks()
    }

    removeTask(id: number){
        this.todoTasks = this.todoTasks.filter((el) =>{
            return el.id !== id
        })
        this.renderTasks()
    }

    renderTasks(){
        /*
        convert the ts array into html list
        */
        this.todoItemsHTML.innerHTML = ''
        this.todoTasks.forEach((todoTask: TodoTask)=>{
            this.todoItemsHTML.innerHTML += `
                <li class="${todoTask.completed? 'completed': 'notcompleted'}">
                    ${todoTask.task}
                    <button onclick="todoApp.markCompleted(${todoTask.id})">Done</button>
                    <button onclick="todoApp.removeTask(${todoTask.id})">Delete</button>
                </li>
            `
        })
    }
}

const todoApp = new TodoApp()