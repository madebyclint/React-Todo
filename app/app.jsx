const React = require('react')
const ReactDOM = require('react-dom')
const {Route, Router, IndexRoute, hashHistory} = require('react-router')

const TodoApp = require('TodoApp')

// Load Foundation
$(document).foundation()

// App CSS
// Fix required http://stackoverflow.com/questions/40201262/webpack-css-syntaxerror-unexpected-token
require('applicationStyles')

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
)
