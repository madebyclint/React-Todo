import expect from 'expect'
import * as reducers from 'reducers'
import df from 'deep-freeze-strict'

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            }
            let res = reducers.searchTextReducer(df(''), df(action))
            expect(res).toEqual(action.searchText)
        })
    })
    describe('showCompletedReducer', () => {
        it('should toggle showCompleted status from true to false', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            let res = reducers.showCompletedReducer(df(true), df(action))
            expect(res).toEqual(false)
        })
        it('should toggle showCompleted status from false to true', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            let res = reducers.showCompletedReducer(df(false), df(action))
            expect(res).toEqual(true)
        })
    })
    describe('todosReducer', () => {
        it('should add new todo', () => {
            let action = {
                type: 'ADD_TODO',
                text: 'Walk the dog'
            }
            let res = reducers.todosReducer(df([]), df(action))
            expect(res.length).toEqual(1)
            expect(res[0].text).toEqual(action.text)
        })
        it('should toggle todo', () => {
            let todos = [{
                id: '123',
                text: 'Something',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }]
            let action = {
                type: 'TOGGLE_TODO',
                id: '123'
            }
            let res = reducers.todosReducer(df(todos), df(action))
            expect(res[0].completed).toEqual(false)
            expect(res[0].completedAt).toEqual(undefined)
        })
    })
})
