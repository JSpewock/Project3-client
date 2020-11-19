import React, { Component } from 'react'

export default class UpdateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cocktail: this.props.cocktail,
            strDrink: this.props.cocktail.strDrink,
            strInstructions: this.props.cocktail.strInstructions,
            strAlcoholic: this.props.cocktail.strAlcoholic
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.id] : event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(this.props.baseURL + '/' + this.props.cocktail._id, {
            method: 'PUT',
            body: JSON.stringify({
                strDrink: this.state.strDrink,
                strInstructions: this.state.strInstructions,
                strAlcoholic: this.state.strAlcoholic
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            this.props.handleUpdateCocktail(data)
            this.props.toggleUpdateForm()
        })
    }

    render() {
        return (
            <div onSubmit={this.handleSubmit}>
                <h1>Edit {this.state.cocktail.strDrink} </h1>
                <form>
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
                        <input type='radio' id='strAlcoholic' value='Alcoholic' checked={this.state.strAlcoholic === 'Alcoholic' ? true : false} name='Alcoholic' onChange={this.handleChange} />
                    </label>
                    <label htmlFor='strAlcoholic'>
                        non-Alcoholic
                        <input type='radio' id='strAlcoholic' value='non-Alcoholic' checked={this.state.strAlcoholic === 'non-Alcoholic' ? true : false} name='Alcoholic' onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Edit Cocktail"/>
                </form>
            </div>
        )
    }
}
