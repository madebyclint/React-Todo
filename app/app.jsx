var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// Load Foundation
$(document).foundation();

// App CSS
// Fix required http://stackoverflow.com/questions/40201262/webpack-css-syntaxerror-unexpected-token
require('applicationStyles')

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);