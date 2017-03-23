import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import * as actions from 'actions'

class Todo extends React.Component {
    render () {
        let {id, text, completed, createdAt, completedAt, dispatch} = this.props
        let todoClassName = completed ? 'todo todo-completed' : 'todo';
        let renderDate = () => {
            let message = 'Created '
            let timestamp = createdAt
            if (completed) {
                message = 'Completed '
                timestamp = completedAt
            }
            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
        }
        return (
            <li className={todoClassName}>
                {/*
                    This is an controlled component, therefore we need to use checked with onChange
                    http://stackoverflow.com/a/36716014
                */}
                <label>
                    <div>
                        <input type="checkbox" checked={completed} onChange={() => {
                            // this.props.onToggle(id)
                            dispatch(actions.toggleTodo(id))
                        }} />
                    </div>
                    <div>
                        <p>{text}</p>
                        <p className="todo__subtext">{renderDate()}</p>
                    </div>
                </label>
            </li>
        )
    }
}

module.exports = connect(

)(Todo)


