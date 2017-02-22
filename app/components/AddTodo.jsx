import React from 'react'

export default class AddTodo extends React.Component {
    onSubmit = (e) => {
        e.preventDefault
        let todoText = this.refs.todoText.value
        if (todoText.length > 0) {
            this.refs.todoText.value = ''
            this.props.onAddTodo(todoText)
        }
    }
    render () {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="add-todo-form">
                    <input type="text" placeholder="What do you want to do?" ref="todoText" />
                    <button className="button primary expanded">Add Todo</button>
                </form>
            </div>
        )
    }
}
