import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap'


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
        // let id = this.props.cocktail._id
        return (

            <Card style={{ width: '18rem'}} id={this.props.cocktail.strDrink} key={this.props.cocktail._id}>
                <Card.Img variant="top" src={this.props.cocktail.strDrinkThumb} style={{ width: '18rem'}}/>
                <Card.Body style={{flex: 1}}>
                    <Card.Title as="h2">{this.props.cocktail.strDrink}</Card.Title>
                    <Card.Text>
                        {this.props.cocktail.strInstructions}
                    </Card.Text>
                    {this.props.cocktail.strIngredient1 && (
                    <div>
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
                                    this.props.cocktail[ingredient] !== null && this.props.cocktail[ingredient] !== '' && (
                                    <tr>
                                        {this.props.cocktail[ingredient] !== null && this.props.cocktail[ingredient] !== '' && (

                                            <td>{this.props.cocktail[ingredients[index]]}</td>
                                        )}
                                        {this.props.cocktail[measurements[index]] !== null && this.props.cocktail[measurements[index]] !== '' && (
                                            <td>{this.props.cocktail[measurements[index]]}</td>
                                        )}
                                    </tr>
                                    )
                                )}
                                )
                            }
                            </tbody>
                        </table>
                        <p>{this.props.cocktail.strAlcoholic}</p>
                    </div>
                    )}
                    {this.props.cocktail.idDrink ? (
                        null
                    ) : (
                        <div className="edit-delete-buttons">
                            <button onClick={() => {this.props.delete(this.props.cocktail._id)}}>
                            Delete
                            </button>
                            <button onClick={()=> {this.props.showUpdateForm(this.props.cocktail)}}>Edit</button>
                        </div>
                    )}
                    
                    </Card.Body>
            </Card>
        
        )
    }
}


