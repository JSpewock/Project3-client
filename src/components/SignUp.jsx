import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.id] : event.target.value})
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
                <p>Create a User</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" onChange={this.handleChange} value={this.state.username} />
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" onChange={this.handleChange} value={this.state.password} />
                    <input type="submit" value="sign up" />
                </form>
            </div>
        )
    }
}
