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
    },
    filterTodos: function (todos, showCompleted, searchText) {
        let filteredTodos = todos

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted
        })

        // Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            if (searchText.length > 0) {
                if (todo.text.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
                    return todo
                }
            } else {
                return todo
            }
        })

        // Sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                // a should come before b
                return -1
            } else if (a.completed && !b.completed) {
                // b should come before a
                return 1
            } else {
                // no sorting
                return 0
            }
        })

        return filteredTodos
    }
}
