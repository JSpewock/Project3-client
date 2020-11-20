import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Cocktails</h1>
                <Login />
                <SignUp />
                <p>Search for Cocktails</p>
            </div>
        )
    }
}
