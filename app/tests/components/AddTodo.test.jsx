import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import {AddTodo} from 'AddTodo'

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist()
    })

    it('should dispatch ADD_TODO when valid todo text', () => {
        let todoText = 'Check mail'
        let action = {
            type: 'ADD_TODO',
            text: todoText
        }
        let spy = expect.createSpy()
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />)
        let $el = ReactDOM.findDOMNode(addTodo)

        addTodo.refs.todoText.value = todoText
        TestUtils.Simulate.submit($el.querySelector('form'))

        expect(spy).toHaveBeenCalledWith(action)
    })

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        let todoText = ''
        let spy = expect.createSpy()
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />)
        let $el = ReactDOM.findDOMNode(addTodo)

        addTodo.refs.todoText.value = todoText
        TestUtils.Simulate.submit($el.querySelector('form'))

        expect(spy).toNotHaveBeenCalled()
    })
})
