import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(this.props.baseURL, {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Cocktails</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username"/>
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" />
                </form>
            </div>
        )
    }
}
