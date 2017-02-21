const React = require('react')

class Todo extends React.Component {
    render () {
        let {id, text} = this.props
        return (
            <li>{id} - {text}</li>
        )
    }
}

module.exports = Todo

