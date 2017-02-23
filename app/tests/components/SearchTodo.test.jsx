import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'

import SearchTodo from 'SearchTodo'

describe('SearchTodo', () => {
    it('should exist', () => {
        expect(SearchTodo).toExist()
    })

    it('should call onSearch with entered input text', () => {
        let searchText = 'Dog'
        let spy = expect.createSpy()
        let searchTodo = TestUtils.renderIntoDocument(<SearchTodo onSearch={spy} />)
        searchTodo.refs.searchText.value = searchText
        TestUtils.Simulate.change(searchTodo.refs.searchText)

        expect(spy).toHaveBeenCalledWith(false, 'Dog')
    })

    it('should call onSearch with prop checked value', () => {
        let spy = expect.createSpy()
        let searchTodo = TestUtils.renderIntoDocument(<SearchTodo onSearch={spy} />)
        searchTodo.refs.showCompleted.checked = true
        TestUtils.Simulate.change(searchTodo.refs.showCompleted)

        expect(spy).toHaveBeenCalledWith(true, '')
    })
})
