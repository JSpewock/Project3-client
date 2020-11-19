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
        return (
            <div id={this.props.cocktail.strDrink} key={this.props.cocktail._id}>
                <h1>{this.props.cocktail.strDrink}</h1>
                <img src={this.props.cocktail.strDrinkThumb} />
                <p>{this.props.cocktail.strInstructions}</p>
                <p>{this.props.cocktail.strAlcoholic}</p>

    
                {ingredients.map(ingredient => {
                    if (this.props.cocktail[ingredient] !== null) {
                        return <p>{this.props.cocktail[ingredient]}</p>
                    }
                })}
                {measurements.map(measurement => {
                    if (this.props.cocktail[measurement] !== null) {
                        return <p>{this.props.cocktail[measurement]}</p>
                    }
                })}
                
            </div>
        )
    }
}
