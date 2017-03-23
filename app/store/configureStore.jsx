import * as redux from 'redux'
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers'

export const configure = () => {
    let reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    })
    let store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
    return store
}
