import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
const $ = require('jquery')

import TodoApp from 'TodoApp'

// Load Foundation
$(document).foundation()

// App CSS
// Fix required http://stackoverflow.com/questions/40201262/webpack-css-syntaxerror-unexpected-token
require('applicationStyles')

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
)

