import React from 'react'
import {connect} from 'react-redux'
import Todo from 'Todo'

export class TodoList extends React.Component {
    render () {
        let {todos} = this.props
        let renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>
                )
            }
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

export default connect(
    (state) => {
        return {
            todos: state.todos
        }
    }
)(TodoList)

