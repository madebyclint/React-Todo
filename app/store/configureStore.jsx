import * as redux from 'redux'
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers'

export const configure = (initialState) => {
    let reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    })
    let store = redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
    return store
}
