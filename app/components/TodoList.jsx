const React = require('react')
const Todo = require('Todo')

class TodoList extends React.Component {
    render () {
        let {todos} = this.props
        let renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} />
                )
            })
        }
        return (
            <div>
                <ol>
                    {renderTodos()}
                </ol>
            </div>
        )
    }
}

module.exports = TodoList

