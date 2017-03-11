import expect from 'expect'
import * as actions from 'actions'

describe('Actions', () => {
    it('should generate search text action', () => {
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some search text'
        }
        let res = actions.setSearchText(action.searchText)
        expect(res).toEqual(action)
    })
    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Thing to do'
        }
        let res = actions.addTodo(action.text)
        expect(res).toEqual(action)
    })
    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        let res = actions.toggleShowCompleted()
        expect(res).toEqual(action)
    })
    it('should generate toggle todo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 2
        }
        let res = actions.toggleTodo(action.id)
        expect(res).toEqual(action)
    })
})
