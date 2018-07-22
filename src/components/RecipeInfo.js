import React, { Component } from 'react';
import { css } from 'emotion';


const mainImage = css` {
    height: 300px;
    width: auto;
    position: relative;
    z-index: 1;
    margin-right: 5%;
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
}`

const imageFlex = css `{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
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
        let imgUrl = 'url(' + this.props.recipe ? this.props.recipe.image_url : '' + ')';
        const backgroundStyle = {
            backgroundImage: 'url(' + imgUrl + ')'
        }

        const recipe = 
            <div className={ imgContainer }>
                <div 
                    className={ backgroundImage } 
                    onClick={this.props.closeRecipe}
                />
                <div 
                    className={ imageFlex }
                >
                    <img
                        className={ mainImage }
                        src={ this.props.recipe ? this.props.recipe.image_url : '' }
                    />
                </div>
            </div>

        return (
            this.props.showRecipe ? recipe : ''
        );
    }
}

export default RecipeInfo;