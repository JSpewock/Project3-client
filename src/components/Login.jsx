import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: {},
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.id] : event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(this.props.baseURL + '/session', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
            headers: {
                'Content-Type': 'application/json'
            } 
        }).then(res => res.json())
        .then(data => {
            this.setState({currentUser : data})
        })
    }

    render() {
        return (
            <div>
                <p>User Login</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" onChange={this.handleChange} value={this.state.username} />
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" onChange={this.handleChange} value={this.state.password} />
                    <input type="submit" value="login" />
                </form>
            </div>
        )
    }
}