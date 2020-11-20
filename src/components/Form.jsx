import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            strDrink: '',
            strInstructions: '',
            strAlcoholic: 'non-Alcoholic',
            strDrinkThumb: '',
            strIngredient1: '',
            strIngredient2: '',
            strIngredient3: '',
            strIngredient4: '',
            strIngredient5: '',
            strIngredient6: '',
            strIngredient7: '',
            strIngredient8: '',
            strIngredient9: '',
            strIngredient10: '',
            strIngredient11: '',
            strIngredient12: '',
            strIngredient13: '',
            strIngredient14: '',
            strIngredient15: '',
            strMeasurement1: '',
            strMeasurement2: '',
            strMeasurement3: '',
            strMeasurement4: '',
            strMeasurement5: '',
            strMeasurement6: '',
            strMeasurement7: '',
            strMeasurement8: '',
            strMeasurement9: '',
            strMeasurement10: '',
            strMeasurement11: '',
            strMeasurement12: '',
            strMeasurement13: '',
            strMeasurement14: '',
            strMeasurement15: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.id] : event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(this.props.baseURL + '/cocktail', {
            method: 'POST',
            body: JSON.stringify({
                strDrink: this.state.strDrink,
                strInstructions: this.state.strInstructions,
                strAlcoholic: this.state.strAlcoholic,
                strDrinkThumb: this.state.strDrinkThumb,
                strIngredient1: '',
                strIngredient2: '',
                strIngredient3: '',
                strIngredient4: '',
                strIngredient5: '',
                strIngredient6: '',
                strIngredient7: '',
                strIngredient8: '',
                strIngredient9: '',
                strIngredient10: '',
                strIngredient11: '',
                strIngredient12: '',
                strIngredient13: '',
                strIngredient14: '',
                strIngredient15: '',
                strMeasurement1: '',
                strMeasurement2: '',
                strMeasurement3: '',
                strMeasurement4: '',
                strMeasurement5: '',
                strMeasurement6: '',
                strMeasurement7: '',
                strMeasurement8: '',
                strMeasurement9: '',
                strMeasurement10: '',
                strMeasurement11: '',
                strMeasurement12: '',
                strMeasurement13: '',
                strMeasurement14: '',
                strMeasurement15: ''
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
                    strAlcoholic: 'non-Alcoholic',
                    strDrinkThumb: '',
                    strIngredient1: '',
                    strIngredient2: '',
                    strIngredient3: '',
                    strIngredient4: '',
                    strIngredient5: '',
                    strIngredient6: '',
                    strIngredient7: '',
                    strIngredient8: '',
                    strIngredient9: '',
                    strIngredient10: '',
                    strIngredient11: '',
                    strIngredient12: '',
                    strIngredient13: '',
                    strIngredient14: '',
                    strIngredient15: '',
                    strMeasurement1: '',
                    strMeasurement2: '',
                    strMeasurement3: '',
                    strMeasurement4: '',
                    strMeasurement5: '',
                    strMeasurement6: '',
                    strMeasurement7: '',
                    strMeasurement8: '',
                    strMeasurement9: '',
                    strMeasurement10: '',
                    strMeasurement11: '',
                    strMeasurement12: '',
                    strMeasurement13: '',
                    strMeasurement14: '',
                    strMeasurement15: ''
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
                    {/* Ingredients */}
                    <table>
                        <thead>
                            <tr>
                                <th>Ingredients</th>
                                <th>Measurement</th>
                            </tr>
                        </thead>
                        <tbody>
                            {for(let i = 1; i < 16; i++) {
                                return (
                                    
                                )
                            }}
                        <tbody>

                    </table>
                    <label htmlFor='strIngredient1'>
                        Ingredients:
                        <input type='text' id='strIngredient1' value={this.state.strIngredient1} onChange={this.handleChange}/>
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
