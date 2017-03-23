import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

import TodoApp from 'TodoApp'

import * as actions from 'actions'
import * as configureStore from 'configureStore'
const store = configureStore.configure()

store.subscribe(() => {
    console.log('New state', store.getState())
})

store.dispatch(actions.addTodo('Clean the yard'))
store.dispatch(actions.setSearchText('yard'))
store.dispatch(actions.toggleShowCompleted())

// Load Foundation
// Foundation is the only thing that require jQuery
$(document).foundation()

// App CSS
// Fix required http://stackoverflow.com/questions/40201262/webpack-css-syntaxerror-unexpected-token
require('applicationStyles')

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
)

