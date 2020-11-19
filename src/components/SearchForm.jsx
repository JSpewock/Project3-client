import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="name">Cocktail Name: </label>
                    <input type="text" id="name"/>
                    
                </form>
            </div>
        )
    }
}
