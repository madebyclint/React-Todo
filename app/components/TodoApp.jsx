import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import SearchTodo from 'SearchTodo'
import uuid from 'node-uuid'

export default class TodoApp extends React.Component {
    // ES7 method
    // Set up initial state
    state = {
        showCompleted: false,
        searchText: '',
        todos: [
            {
                id: uuid(),
                text: 'Walk the dog'
            },
            {
                id: uuid(),
                text: 'Clean the yard'
            },
            {
                id: uuid(),
                text: 'Sweep Floor'
            },
            {
                id: uuid(),
                text: 'Play board games'
            }
        ]
    }

    handleSearch = (showCompleted, searchText) => {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    }

    handleAddTodo = (text) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
                }
            ]
        })
    }

    render () {
        let {todos} = this.state
        return (
            <div>
                <SearchTodo onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
}

