import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'

import TodoApp from 'TodoApp'

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist()
    })

    it('should add todo to the todos state on handleAddTodo', () => {
        let todoText = 'Test text'
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />)
        todoApp.setState({todos: []})
        todoApp.handleAddTodo(todoText)

        expect(todoApp.state.todos[0].text).toBe(todoText)
    })

    it('should toggle completed value when handlToggle called', () => {
        let todoData = {
            id: 11,
            text: 'Test features',
            completed: false
        }
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />)
        todoApp.setState({todos: [todoData]})

        expect(todoApp.state.todos[0].completed).toBe(false)
        todoApp.handleToggle(11)
        expect(todoApp.state.todos[0].completed).toBe(true)
    })
})
