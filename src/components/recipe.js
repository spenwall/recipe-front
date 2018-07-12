import React, { Component } from 'react';
import { css } from 'emotion';

const mainImage = css`
    min-height: 300px;
    width: 100%;
    background-color: grey;
`
class Recipe extends Component {


    render() {
        return (
            <div>
                <img className={ mainImage } src={ this.props.recipeImage } />
            </div>
        );
    }
}

export default Recipe;