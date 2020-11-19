import React, { Component } from 'react'
import Cocktail from './Cocktail'

export default class CoktailList extends Component {
    render() {
        return (
            <div>
                {this.props.allCocktails.map(cocktail => {
                    return < Cocktail cocktail={cocktail} />
                })}
            </div>
        )
    }
}
