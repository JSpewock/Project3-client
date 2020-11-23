import React, { Component } from 'react'
// import Login from './Login'
// import SignUp from './SignUp'
import SearchForm from './SearchForm'

export default class Header extends Component {
    render() {
        return (
            
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-info">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <form action="/" method="POST" class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <h1 className="header" className="text-center">CockTails</h1>
                {/* <Login baseURL ={this.props.baseURL}/>
                <SignUp /> */}
                <SearchForm delete={this.props.delete} showUpdateForm={this.props.showUpdateForm}/>
            </div>
        )
    }
}
