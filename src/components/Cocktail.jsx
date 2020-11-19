import React, { Component } from 'react'

export default class Cocktail extends Component {
    render() {
        const ingredients = []
        for (let i = 1; i < 16; i++) {
            let numberString = i.toString()
            ingredients.push('strIngredient' + numberString)
        }
        // console.log(ingredients)
        return (
            <div id={this.props.cocktail.strDrink} key={this.props.cocktail._id}>
                <h1>{this.props.cocktail.strDrink}</h1>
                <img src={this.props.cocktail.strDrinkThumb} />
                <p>{this.props.cocktail.strInstructions}</p>
                <p>{this.props.cocktail.strAlcoholic}</p>

    
                {ingredients.map(ingredient => {
                    
                    console.log(this.props.cocktail[ingredient])


                    if (this.props.cocktail[ingredient] !== null) {
                        return <p>{this.props.cocktail[ingredient]}</p>
                    }
                })
                }
                
                {/* <p>{this.props.cocktail.strMeasure1}</p>
                <p>{this.props.cocktail.strMeasure2}</p>
                <p>{this.props.cocktail.strMeasure3}</p>
                <p>{this.props.cocktail.strMeasure4}</p>
                <p>{this.props.cocktail.strMeasure5}</p>
                <p>{this.props.cocktail.strMeasure6}</p>
                <p>{this.props.cocktail.strMeasure7}</p>
                <p>{this.props.cocktail.strMeasure8}</p>
                <p>{this.props.cocktail.strMeasure9}</p>
                <p>{this.props.cocktail.strMeasure10}</p>
                <p>{this.props.cocktail.strMeasure11}</p>
                <p>{this.props.cocktail.strMeasure12}</p>
                <p>{this.props.cocktail.strMeasure13}</p>
                <p>{this.props.cocktail.strMeasure14}</p>
                <p>{this.props.cocktail.strMeasure15}</p> */}
            </div>
        )
    }
}
