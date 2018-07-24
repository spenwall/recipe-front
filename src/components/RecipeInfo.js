import React, { Component } from 'react';
import { css } from 'emotion';


const mainImage = css` {
    height: 300px;
    width: auto;
    position: relative;
    z-index: 1;
    margin-right: 5%;
}`

const imgContainer = css `{
    height: 400px;   
    background-color: black;
}`

const imageFlex = css `{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 100%;
    height: 100%;
}`

const recipeTitle = css`{
    z-index: 1;
    color: #ffffff;
    font-size: 1.5rem;   
    margin: 5px;
}`
class RecipeInfo extends Component {

    render() {
        const backgroundImage = css` {
    
            z-index: 1; 
            position: relative; 
        
            ::before {
                content: "";
                opacity: .3;
                height: 400px;
                width: 100vw;
                position: absolute;
                background-repeat: no-repeat;
                background-size: 100%;
                background-position-x: 50%;
                background-position-y: 50%;
                background-image: url("${ this.props.recipe ? this.props.recipe.image_url : ''}");
                z-index: -1;
                top: 0;
                left: 0;
            }
        }
        `

        const recipe = 
            <div className={ imgContainer }>
                <div 
                    className={ backgroundImage } 
                    onClick={this.props.closeRecipe}
                />
                <div className={ imageFlex }>
                    <div className={ recipeTitle }>
                        {this.props.recipe.title}
                    </div>
                    <img
                        className={ mainImage }
                        src={ this.props.recipe ? this.props.recipe.image_url : '' }
                        alt={ this.props.recipe.title }
                    />
                </div>
            </div>

        return (
            this.props.showRecipe ? recipe : ''
        );
    }
}

export default RecipeInfo;