import expect from 'expect'
import * as actions from 'actions'
// let actions = require('actions')

describe('Actions', () => {
    it('should generate search text action', () => {
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some search text'
        }
        let res = actions.setSearchText(action.searchText)
        expect(res).toEqual(action)
    })
})
