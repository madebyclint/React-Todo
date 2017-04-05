import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'

export class AddTodo extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        let {dispatch} = this.props
        let todoText = this.refs.todoText.value
        if (todoText.length > 0) {
            this.refs.todoText.value = ''
            dispatch(actions.addTodo(todoText))
        } else {
            this.refs.todoText.focus()
        }
    }

    render () {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.handleSubmit} className="add-todo-form">
                    <input type="text" placeholder="What do you want to do?" ref="todoText" />
                    <button className="button primary expanded">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodo)
