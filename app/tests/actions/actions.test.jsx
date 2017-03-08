import expect from 'expect'
import setSearchText from 'actions'
const actions = require('actions')

describe('Actions', () => {
    it('should generate search text action', () => {
        let action = {
            type: 'SET_SEARCH_TEXT',
            setSearchText: 'some search text'
        }
        let res = actions.setSearchText(action.searchText)
        expect(res).toEqual(action)
    })
})
