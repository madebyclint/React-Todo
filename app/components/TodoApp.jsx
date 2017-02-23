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
                text: 'Walk the dog',
                completed: false
            },
            {
                id: uuid(),
                text: 'Clean the yard',
                completed: true
            },
            {
                id: uuid(),
                text: 'Sweep Floor',
                completed: false
            },
            {
                id: uuid(),
                text: 'Play board games',
                completed: true
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
                    text: text,
                    completed: false
                }
            ]
        })
    }

    handleToggle = (id) => {
        let updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        this.setState({todos: updatedTodos})
    }

    render () {
        let {todos} = this.state
        return (
            <div>
                <SearchTodo onSearch={this.handleSearch} />
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
}

