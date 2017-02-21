const React = require('react')
const TodoList = require('TodoList')

class TodoApp extends React.Component {
    // ES7 method
    // Set up initial state
    state = {
        todos: [
            {
                id: 1,
                text: 'Walk the dog'
            },
            {
                id: 2,
                text: 'Clean the yard'
            },
            {
                id: 3,
                text: 'Sweep Floor'
            },
            {
                id: 4,
                text: 'Play board games'
            }
        ]
    }

    render () {
        let {todos} = this.state
        return (
            <div>
                <TodoList todos={todos} />
            </div>
        )
    }
}

module.exports = TodoApp
