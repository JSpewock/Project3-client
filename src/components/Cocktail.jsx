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
                    {ingredients.map((ingredient, index) => {
                        return (
                            <tr>
                                {this.props.cocktail[ingredient] !== null ? (
                                    <td>{this.props.cocktail[ingredients[index]]}</td>
                                ) : (
                                    null
                                )}
                                {this.props.cocktail[measurements[index]] !== null ? (
                                    <td>{this.props.cocktail[measurements[index]]}</td>
                                ) : (
                                    null
                                )}
                            </tr>
                        )}
                        )
                    }
                    </tbody>
                </table>

                <button onClick={() => {
                    this.props.delete(this.props.cocktail._id)
                }}>Delete</button>
                
            </div>
        )
    }
}
