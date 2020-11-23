import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


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


{/* // <Card style={{ width: '18rem'}}>
                // <Card.Img variant="top" src="holder.js/100px180" />
                // <Card.Body style={{flex: 1}}>
                //     <Card.Title>Card Title</Card.Title>
                //     <Card.Text>
                //     Some quick example text to build on the card title and make up the bulk of
                //     the card's content.
                //     </Card.Text>
                //     <Button variant="primary">Go somewhere</Button>
                // </Card.Body>
            // </Card> */}

{/* // <div id={this.props.cocktail.strDrink} key={this.props.cocktail._id}>
            //     <h1>{this.props.cocktail.strDrink}</h1>
            //     <img src={this.props.cocktail.strDrinkThumb} />
            //     <p>{this.props.cocktail.strInstructions}</p>
                
            //     {this.props.cocktail.strIngredient1 && (
            //         <div>
            //             <table>
            //                 <thead>
            //                     <tr>
            //                         <th>Ingredient</th>
            //                         <th>Measurement</th>
            //                     </tr>
            //                 </thead>
            //                 <tbody>
            //                     
            //                 {ingredients.map((ingredient, index) => { //loop to make 15 tr tags
            //                     return (
            //                         this.props.cocktail[ingredient] !== null && this.props.cocktail[ingredient] !== '' && (
            //                         <tr>
            //                             {this.props.cocktail[ingredient] !== null && this.props.cocktail[ingredient] !== '' && ( if the ingredient or masurement is not equal to null, render it on the page

            //                                 <td>{this.props.cocktail[ingredients[index]]}</td>
            //                             )}
            //                             {this.props.cocktail[measurements[index]] !== null && this.props.cocktail[measurements[index]] !== '' && (
            //                                 <td>{this.props.cocktail[measurements[index]]}</td>
            //                             )}
            //                         </tr>
            //                         )
            //                     )}
            //                     )
            //                 }
            //                 </tbody>
            //             </table>
                        

            //             <p>{this.props.cocktail.strAlcoholic}</p>
            //         </div>
            //     )}
            //     <button onClick={() => {this.props.delete(this.props.cocktail._id)}}>
            //         Delete
            //     </button>
            //     <button onClick={()=> {this.props.showUpdateForm(this.props.cocktail)}}>Edit</button>
                
            // </div> */}