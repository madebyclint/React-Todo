import React from 'react'

export default class Todo extends React.Component {
    render () {
        let {id, text, completed} = this.props
        return (
            <li>
                {/*
                    This is an controlled component, therefore we need to use checked with onChange
                    http://stackoverflow.com/a/36716014
                */}
                <label>
                    <input type="checkbox" checked={completed} onChange={() => {
                        this.props.onToggle(id)
                    }} />
                    {text}
                </label>
            </li>
        )
    }
}


