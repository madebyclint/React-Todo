import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import {Todo} from 'Todo'

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist()
    })

    it('should dispatch TOGGLE_TODO action on click', () => {
        let todoData = {
            id: 199,
            text: 'Write todo.test.jsx test',
            completed: true
        }
        let spy = expect.createSpy()
        let todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />)
        let $el = ReactDOM.findDOMNode(todo)
        TestUtils.Simulate.change($el.querySelector('input'))
        expect(spy).toHaveBeenCalledWith({
            type: 'TOGGLE_TODO',
            id: todoData.id
        })
    })
})
