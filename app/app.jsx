import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

import TodoApp from 'TodoApp'

// Load Foundation
// Foundation is the only thing that require jQuery
$(document).foundation()

// App CSS
// Fix required http://stackoverflow.com/questions/40201262/webpack-css-syntaxerror-unexpected-token
require('applicationStyles')

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
)

