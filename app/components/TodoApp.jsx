import React from 'react'
import uuid from 'node-uuid'
import moment from 'moment'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import SearchTodo from 'SearchTodo'
import TodoAPI from 'TodoAPI'

export default class TodoApp extends React.Component {
    // ES7 method
    // Set up initial state
    state = {
        showCompleted: false,
        searchText: '',
        todos: TodoAPI.getTodos()
    }

    handleSearch = (showCompleted, searchText) => {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    }

    componentDidUpdate = () => {
        TodoAPI.setTodos(this.state.todos)
    }

    handleAddTodo = (text) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    }

    handleToggle = (id) => {
        let updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                todo.completedAt = todo.completed ? moment().unix() : undefined
            }
            return todo
        })
        this.setState({todos: updatedTodos})
    }

    render () {
        let {todos, showCompleted, searchText} = this.state
        let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <SearchTodo onSearch={this.handleSearch} />
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
                            <AddTodo onAddTodo={this.handleAddTodo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

