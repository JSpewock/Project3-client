import React, { Component } from 'react'
import Cocktail from './Cocktail'

export default class CoktailList extends Component {
    render() {
        return (
            <div className="cocktail-list" >
                {this.props.allCocktails.map(cocktail => {
                    return < Cocktail cocktail={cocktail} delete={this.props.delete} showUpdateForm={this.props.showUpdateForm}/>
                })}
            </div>
        )
    }
}
