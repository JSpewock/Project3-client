import React, { Component } from 'react'

export default class UpdateForm extends Component {
    render() {
        return (
            <div>
                <h1>Edit {this.props.cocktail.strDrink} </h1>
                <form>
                    <input type='text' value={this.props.cocktail.strDrink} />
                </form>
            </div>
        )
    }
}
