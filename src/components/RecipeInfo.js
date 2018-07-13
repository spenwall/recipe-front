import React, { Component } from 'react';
import { css } from 'emotion';

const mainImage = css`
    min-height: 300px;
    width: 300px;
    background-color: grey;
`
class RecipeInfo extends Component {


    render() {
        return (
            <div>
                <img 
                    className={ mainImage } 
                    src={ this.props.recipeImage }
                    alt="Recipe Main"
                    onClick={this.props.closeRecipe}
                />
            </div>
        );
    }
}

export default RecipeInfo;