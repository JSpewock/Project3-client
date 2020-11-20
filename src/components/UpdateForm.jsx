import React, { Component } from 'react'

export default class UpdateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cocktail: this.props.cocktail,
            strDrink: this.props.cocktail.strDrink,
            strInstructions: this.props.cocktail.strInstructions,
            strAlcoholic: this.props.cocktail.strAlcoholic,
            strDrinkThumb: this.props.cocktail.strDrinkThumb,
            strIngredient1: this.props.cocktail.strIngredient1,
            strIngredient2: this.props.cocktail.strIngredient2,
            strIngredient3: this.props.cocktail.strIngredient3,
            strIngredient4: this.props.cocktail.strIngredient4,
            strIngredient5: this.props.cocktail.strIngredient5,
            strIngredient6: this.props.cocktail.strIngredient6,
            strIngredient7: this.props.cocktail.strIngredient7,
            strIngredient8: this.props.cocktail.strIngredient8,
            strIngredient9: this.props.cocktail.strIngredient9,
            strIngredient10: this.props.cocktail.strIngredient10,
            strIngredient11: this.props.cocktail.strIngredient11,
            strIngredient12: this.props.cocktail.strIngredient12,
            strIngredient13: this.props.cocktail.strIngredient13,
            strIngredient14: this.props.cocktail.strIngredient14,
            strIngredient15: this.props.cocktail.strIngredient15,
            strMeasure1: this.props.cocktail.strMeasure1,
            strMeasure2: this.props.cocktail.strMeasure2,
            strMeasure3: this.props.cocktail.strMeasure3,
            strMeasure4: this.props.cocktail.strMeasure4,
            strMeasure5: this.props.cocktail.strMeasure5,
            strMeasure6: this.props.cocktail.strMeasure6,
            strMeasure7: this.props.cocktail.strMeasure7,
            strMeasure8: this.props.cocktail.strMeasure8,
            strMeasure9: this.props.cocktail.strMeasure9,
            strMeasure10: this.props.cocktail.strMeasure10,
            strMeasure11: this.props.cocktail.strMeasure11,
            strMeasure12: this.props.cocktail.strMeasure12,
            strMeasure13: this.props.cocktail.strMeasure13,
            strMeasure14: this.props.cocktail.strMeasure14,
            strMeasure15: this.props.cocktail.strMeasure15,
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.id] : event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(this.props.baseURL + '/cocktail/' + this.props.cocktail._id, {
            method: 'PUT',
            body: JSON.stringify({
                strDrink: this.state.strDrink,
                strInstructions: this.state.strInstructions,
                strAlcoholic: this.state.strAlcoholic,
                strDrinkThumb: this.state.strDrinkThumb,
                strIngredient1: this.state.strIngredient1,
                strIngredient2: this.state.strIngredient2,
                strIngredient3: this.state.strIngredient3,
                strIngredient4: this.state.strIngredient4,
                strIngredient5: this.state.strIngredient5,
                strIngredient6: this.state.strIngredient6,
                strIngredient7: this.state.strIngredient7,
                strIngredient8: this.state.strIngredient8,
                strIngredient9: this.state.strIngredient9,
                strIngredient10: this.state.strIngredient10,
                strIngredient11: this.state.strIngredient11,
                strIngredient12: this.state.strIngredient12,
                strIngredient13: this.state.strIngredient13,
                strIngredient14: this.state.strIngredient14,
                strIngredient15: this.state.strIngredient15,
                strMeasure1: this.state.strMeasure1,
                strMeasure2: this.state.strMeasure2,
                strMeasure3: this.state.strMeasure3,
                strMeasure4: this.state.strMeasure4,
                strMeasure5: this.state.strMeasure5,
                strMeasure6: this.state.strMeasure6,
                strMeasure7: this.state.strMeasure7,
                strMeasure8: this.state.strMeasure8,
                strMeasure9: this.state.strMeasure9,
                strMeasure10: this.state.strMeasure10,
                strMeasure11: this.state.strMeasure11,
                strMeasure12: this.state.strMeasure12,
                strMeasure13: this.state.strMeasure13,
                strMeasure14: this.state.strMeasure14,
                strMeasure15: this.state.strMeasure15,
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
        const ingredients = []
        const measurements = []
        //loop to concatinate strIngredient and Measure 1-15
        for (let i = 1; i < 16; i++) {
            let numberString = i.toString()
            ingredients.push('strIngredient' + numberString)
            measurements.push('strMeasure' + numberString)
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* name */}
                    <label htmlFor="strDrink">
                        Cocktail Name: 
                        <input type="text" id="strDrink" value={this.state.strDrink} onChange={this.handleChange}/>
                    </label>
                    {/* Image */}
                    <label htmlFor="strDrinkThumb">
                        Cocktail Image: 
                        <input type="text" id="strDrinkThumb" value={this.state.strDrinkThumb} onChange={this.handleChange}/>
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
                            {ingredients.map((ingredient, index) => {
                                return (
                                    <tr>
                                        <td>
                                            <label htmlFor={ingredient}>
                                                <input type='text' id={ingredient} value={this.state[ingredient]} onChange={this.handleChange}/>
                                            </label>
                                        </td>
                                        <td>
                                        <label htmlFor={measurements[index]}>
                                                <input type='text' id={measurements[index]} value={this.state[measurements[index]]} onChange={this.handleChange}/>
                                            </label>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    {/* instructions */}
                    <label htmlFor="strInstructions">
                        Intructions: 
                        <input type="text" id="strInstructions" value={this.state.strInstructions} onChange={this.handleChange}/>
                        {/* <textarea id="strInstructions" onChange={this.handleChange} value={this.state.strInstructions}>{this.state.strInstructions}</textarea> */}
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
