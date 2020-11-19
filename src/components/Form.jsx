import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            strDrink: '',
            strInstructions: '',
            strAlcoholic: 'non-Alcoholic'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.id] : event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(this.props.baseURL, {
            method: 'POST',
            body: JSON.stringify({
                strDrink: this.state.strDrink,
                strInstructions: this.state.strInstructions,
                strAlcoholic: this.state.strAlcoholic
            }),
            headers:{
                'Content-Type': 'application/json'
            } 
            }).then(res => res.json())
            .then(data => {
                this.props.addCocktail(data)
                this.setState({
                    strDrink: '',
                    strInstructions: '',
                    strAlcoholic: 'non-Alcoholic'
                })
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* name */}
                    <label htmlFor="strDrink">
                        Cocktail Name: 
                        <input type="text" id="strDrink" value={this.state.strDrink} onChange={this.handleChange}/>
                    </label>
                    {/* instructions */}
                    <label htmlFor="strInstructions">
                        Intructions: 
                        <input type="text" id="strInstructions" value={this.state.strInstructions} onChange={this.handleChange}/>
                    </label>
                    {/* isAlcoholic */}
                    <label htmlFor='strAlcoholic'>
                        Alcoholic
                        <input type='radio' id='strAlcoholic' value='Alcoholic' name='Alcoholic' onChange={this.handleChange} />
                    </label>
                    <label htmlFor='strAlcoholic'>
                        non-Alcoholic
                        <input type='radio' id='strAlcoholic' value='non-Alcoholic' name='Alcoholic' onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Add Cocktail"/>
                </form>
            </div>
        )
    }
}
