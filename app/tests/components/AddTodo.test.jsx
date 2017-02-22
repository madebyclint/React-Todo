import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'

import AddTodo from 'AddTodo'

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist()
    })

    it('should call onAddTodo prop with valid data', () => {
        let todoText = 'Check mail'
        let spy = expect.createSpy()
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />)
        let $el = $(ReactDOM.findDOMNode(addTodo))

        addTodo.refs.todoText.value = todoText
        TestUtils.Simulate.submit($el.find('form')[0])

        expect(spy).toHaveBeenCalledWith(todoText)
    })

    it('should not call onAddTodo prop when invalid data', () => {
        let todoText = ''
        let spy = expect.createSpy()
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />)
        let $el = $(ReactDOM.findDOMNode(addTodo))

        addTodo.refs.todoText.value = todoText
        TestUtils.Simulate.submit($el.find('form')[0])

        expect(spy).toNotHaveBeenCalled()
    })
})
