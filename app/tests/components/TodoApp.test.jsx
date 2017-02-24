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
        // Expect createdAt to be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number')
    })

    it('should toggle completed value when handlToggle called', () => {
        let todoData = {
            id: 11,
            text: 'Test features',
            completed: false,
            createdAt: 0,
            completedAd: undefined
        }
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />)
        todoApp.setState({todos: [todoData]})

        expect(todoApp.state.todos[0].completed).toBe(false)
        todoApp.handleToggle(11)
        expect(todoApp.state.todos[0].completed).toBe(true)
        // Expect completed to be a number
        expect(todoApp.state.todos[0].completedAt).toBeA('number')
    })

    it('should remove completedAd when toggle from true to false', () => {
        let todoData = {
            id: 45,
            text: 'Test features again',
            completed: true,
            createdAt: 0,
            completedAd: 0
        }
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />)
        todoApp.setState({todos: [todoData]})

        todoApp.handleToggle(45)
        expect(todoApp.state.todos[0].completed).toBe(false)
        // Expect completed to be a number
        // expect(todoApp.state.todos[0].completedAt).toBeA('undefined')
        expect(todoApp.state.todos[0].completedAt).toNotExist()
    })
})
