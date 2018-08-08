import React, { Component } from 'react';
import { css } from 'emotion';

const ingredients = css`{
   font-size: 2em;
   color: #000;
   margin-top: 20px;
   margin-left: 20px;
   text-align: left;
}`


class Ingredients extends Component {
    render() {

        const ingredientsList = this.props.ingredients.map(ingredient => {
            return <div>{ ingredient }</div>
        })
        return (
            <div>
                <div className={ingredients}>Ingredients</div>
                <div>
                    { ingredientsList }
                </div>
            </div>
        );
    }
}

export default Ingredients;