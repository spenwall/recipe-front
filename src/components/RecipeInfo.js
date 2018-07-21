import React, { Component } from 'react';
import { css } from 'emotion';

const backgroundImage = css` {
    height: 400px;
    width: 100%;
    display: block;
    position: relative;
    opacity: .3;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-x: 50%;
    background-position-y: 50%;
}
`
const mainImage = css` {
    height: 300px;
    width: auto;
    position: relative;
    right: 20%;
}`
const darken = css` {
    content: "";
    display: block;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: rgba(0,0,0,.6);
    transition: background-color .6s ease
}`

const imgContainer = css `{
    height: 400px;   
    background-color: black;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}`



class RecipeInfo extends Component {

    render() {

        let imgUrl = 'url(' + this.props.recipe ? this.props.recipe.image_url : '' + ')';
        const backgroundStyle = {
            backgroundImage: 'url(' + imgUrl + ')'
        }

        const recipe = 
            <div className={ imgContainer }>
                <div 
                    style={ backgroundStyle }
                    className={ backgroundImage } 
                    onClick={this.props.closeRecipe}
                />
                <img
                    className={ mainImage }
                    src={ this.props.recipe ? this.props.recipe.image_url : '' }
                />
            </div>

        return (
            this.props.showRecipe ? recipe : ''
        );
    }
}

export default RecipeInfo;