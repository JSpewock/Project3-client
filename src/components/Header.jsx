import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import SearchForm from './SearchForm'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Cocktails</h1>
                <Login baseURL ={this.props.baseURL}/>
                <SignUp />
                <SearchForm delete={this.props.delete} showUpdateForm={this.props.showUpdateForm}/>
            </div>
        )
    }
}
