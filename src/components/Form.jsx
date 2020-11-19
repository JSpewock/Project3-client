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
        console.log(event.target)
        this.setState({ [event.target.id] : event.target.value})
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
            } .then(res => res.json())
            .then(data => {
                this.props.addCocktail(data)
                this.setState({
                    name: '',
                    instructions: '',
                    alcoholic: 'non-Alcoholic'
                })
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* name */}
                    <label htmlFor="name">
                        Cocktail Name: 
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </label>
                    {/* instructions */}
                    <label htmlFor="instructions">
                        Intructions: 
                        <input type="text" id="instructions" onChange={this.handleChange}/>
                    </label>
                    {/* isAlcoholic */}
                    <label htmlFor='Alcoholic'>
                        Alcoholic
                        <input type='radio' id='alcoholic' value='Alcoholic' name='Alcoholic' onChange={this.handleChange} />
                    </label>
                    <label htmlFor='Alcoholic'>
                        non-Alcoholic
                        <input type='radio' id='alcoholic' value='non-Alcoholic' name='Alcoholic' onChange={this.handleChange} />
                    </label>

                    
                    <input type="submit" value="Add Cocktail"/>
                </form>
            </div>
        )
    }
}
