import expect from 'expect'
import * as reducers from 'reducers'

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            }
            let res = reducers.searchTextReducer('', action)
            expect(res).toEqual(action.searchText)
        })
    })
    describe('showCompletedReducer', () => {
        it('should toggle showCompleted status from true to false', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            let res = reducers.showCompletedReducer(true, action)
            expect(res).toEqual(false)
        })
        it('should toggle showCompleted status from false to true', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            let res = reducers.showCompletedReducer(false, action)
            expect(res).toEqual(true)
        })
    })
})
