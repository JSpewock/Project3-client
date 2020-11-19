import React, { Component } from 'react'

export default class Cocktail extends Component {
    render() {
        return (
            <div id={this.props.cocktail.strDrink} key={this.props.cocktail._id}>
                <h1>{this.props.cocktail.strDrink}</h1>
                <img src={this.props.cocktail.strDrinkThumb} />
                <p>{this.props.cocktail.strInstructions}</p>
                <p>{this.props.cocktail.strAlcoholic}</p>
                <p>{this.props.cocktail.stsIngredient1}</p>
                <p>{this.props.cocktail.}</p>
                <p>{this.props.cocktail.}</p>
                <p>{this.props.cocktail.}</p>
                <p>{this.props.cocktail.}</p>
                <p>{this.props.cocktail.}</p>
                <p>{this.props.cocktail.}</p>
                <p>{this.props.cocktail.}</p>
                
            </div>
        )
    }
}
