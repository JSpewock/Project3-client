import React, { Component } from 'react'

export default class Cocktail extends Component {
    render() {
        const ingredients = []
        const measurements = []
        //loop to concatinate strIngredient and Measure 1-15
        for (let i = 1; i < 16; i++) {
            let numberString = i.toString()
            ingredients.push('strIngredient' + numberString)
            measurements.push('strMeasure' + numberString)
        }
        let id = this.props.cocktail._id
        return (
            <div id={this.props.cocktail.strDrink} key={this.props.cocktail._id}>
                <h1>{this.props.cocktail.strDrink}</h1>
                <img src={this.props.cocktail.strDrinkThumb} />
                <p>{this.props.cocktail.strInstructions}</p>
                <p>{this.props.cocktail.strAlcoholic}</p>

                <table>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measurement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                {ingredients.map((ingredient, index) => {
                    if (this.props.cocktail[ingredient] !== null) {
                        return <p key={index}>{this.props.cocktail[ingredient]}</p>
                    }
                })}
                {measurements.map((measurement, index) => {
                    if (this.props.cocktail[measurement] !== null) {
                        return <p key={index}>{this.props.cocktail[measurement]}</p>
                    }
                })}

                <button onClick={() => {
                    this.props.delete(this.props.cocktail._id)
                }}>Delete</button>
                
            </div>
        )
    }
}
