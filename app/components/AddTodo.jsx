import React from 'react'

export default class AddTodo extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault
        let todoText = this.refs.todoText.value
        if (todoText.length > 0) {
            this.refs.todoText.value = ''
            this.props.onAddTodo(todoText)
        } else {
            this.refs.todoText.focus()
        }
    }
    render () {
        return (
            <div>
                <form ref="form" onSubmit={this.handleSubmit} className="add-todo-form">
                    <input type="text" placeholder="What do you want to do?" ref="todoText" />
                    <button className="button primary expanded">Add Todo</button>
                </form>
            </div>
        )
    }
}
