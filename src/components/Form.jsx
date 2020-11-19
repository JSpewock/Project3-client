import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            instructions: '',
            alcoholic: 'non-Alcoholic'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        let isAlcholic = ''
        if (event.target.id === 'alcoholic') {
            if (event.target.checked) {
                isAlcholic = 'Alcoholic'
            } else {
                isAlcholic = 'non-Alcoholic'
            }
        }
        this.setState({ 
            [event.target.id] : event.target.value, 
            alcoholic: isAlcholic
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(this.props.baseURL, {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                instructions: this.state.instructions,
                alcoholic: this.state.alcoholic
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Cocktail Name: </label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="instructions">Intructions: </label>
                    <input type="text" id="instructions" onChange={this.handleChange}/>
                    <label htmlFor="alcoholic">Alcoholic?</label>
                    <input type="checkbox" id="alcoholic" value="alcoholic" onChange={this.handleChange}/>
                    <input type="submit" value="Add Cocktail"/>
                </form>
            </div>
        )
    }
}
