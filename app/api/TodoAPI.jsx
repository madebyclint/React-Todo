export default {
    setTodos: function (todos) {
        if (Array.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos))
            return todos
        }
    },
    getTodos: function () {
        let stringTodos = localStorage.getItem('todos')
        let todos = []

        try {
            // JSON.parse can sometimes fail
            // so we pass an empty array if fail
            todos = JSON.parse(stringTodos)
        } catch (e) {

        }

        return Array.isArray(todos) ? todos : []
    }
}
