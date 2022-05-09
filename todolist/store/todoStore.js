import {makeAutoObservable} from "mobx";

class TodoStore {
    todos = [
        {
            id: 1,
            task: 'Дело 1',
            status: false
        }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(text) {
        if (!text) return

        const newItem = {
            id: (Math.round((Math.random() * 100) ** 2) + 1).toString(),
            task: text,
            status: false,
        }

        console.log(newItem, '= todo')
        //this.todos.push(newItem)
        console.log(this.todos, '= list')
    }

    removeAllTodo() {
        this.todos = []
    }

    removeTodoById(id) {
        this.todos.filter((item) => item.id !== id)
    }

    completeTodo(id) {
        this.todos = this.todos.map((item) => item.id === id ? {...item, status: !item.status} : item)
    }
}

export default new TodoStore()