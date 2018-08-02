import React, { Component } from 'react';
import { css } from 'emotion';


const mainImage = css` {
    max-height: 300px;
    width: auto;
    position: relative;
    z-index: 1;
    justify-self: center;
}`

const imgContainer = css `{
    height: 400px;   
    background-color: black;
}`

const imageGrid = css `{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2%;
    z-index: 1;
}`

const recipeTitle = css`{
    z-index: 1;
    color: #ffffff;
    font-size: 1.5rem;   
    margin: 5px;
}`

const publisher = css`{
    font-size: .8em;
    color: #A0F0ED;
    z-index: 1;
}`

const recipeStats = css`{
   display: grid;
   grid-template-columns: 1fr 1fr;
   height: 50px;
}`

const socialRank = css`{
   background-color: #6B95BD;
   padding: 5px;
}`

const numberIngredients = css`{
   background-color: #25588A;
   padding: 5px;
}`

const titleAndPublisher = css`{
   z-index: 1;
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
        }`
        

        const recipe = 
            <div className={ imgContainer }>
                <div 
                    className={ backgroundImage } 
                    onClick={this.props.closeRecipe}
                />
                <div className={ imageGrid }>
                    <div className={ titleAndPublisher }>
                        <div className={ recipeTitle }>
                            {this.props.recipe.title}
                        </div>
                        <div className={ publisher }>
                            {this.props.recipe.publisher}
                        </div>
                    </div>
                    <img
                        className={ mainImage }
                        src={ this.props.recipe ? this.props.recipe.image_url : '' }
                        alt={ this.props.recipe.title }
                    />
                </div>
                <div className={ recipeStats }>
                    <div className={ socialRank }>
                      <div>Social Ranking:</div> 
                      <div>{ Math.round(this.props.recipe.social_rank) }</div>
                    </div>
                    <div className={ numberIngredients }>
                      <div>Number of Ingredients:</div> 
                      <div>{ this.props.recipe.ingredients ? this.props.recipe.ingredients.length : '' }</div>
                    </div>
                </div>
            </div>

        return (
            this.props.showRecipe ? recipe : ''
        );
    }
}

export default RecipeInfo;