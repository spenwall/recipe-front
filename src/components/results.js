import React, { Component } from "react";
import "./results.css";
import { css } from "react-emotion";
import Recipe from "./recipe";

const myStyle = css`
    cursor: pointer; 
    height: 350px;
  `

const recipeVisible = css`
  display: grid;
  grid-template-columns: 1fr 3fr;
`

const loadingBackground = css`
  &:nth-of-type(1n+1) {
    background-color: #B8C2CC;
  }
  &:nth-of-type(2n+2) {
    background-color: #8795A1;
  } 
  &:nth-of-type(3n+3) {
    background-color: #606F7B;
  }
  &:nth-of-type(4n+4) {
    background-color: #3D4852;
  }
  height: 350px;
`


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeClicked: false
    };
  }

  recipeClick = e => {
    this.setState(prev => ({recipeClicked: !prev.recipeClicked}));

  };

  render() {
    const recipes = this.props.searchResults.map(searchResult => (
      <div className={`recipe relative ${myStyle}`} key={searchResult.recipe_id}>
        <a className="no-underline" onClick={this.recipeClick}>
          <img
            className="recipeImage"
            alt={searchResult.title}
            src={searchResult.image_url}
          />
          <div className="recipe-gradient" />
        </a>
        <div className="recipe-title z-20 text-white ml-4 mb-4 absolute pin-b pin-l text-left h-30">
          {searchResult.title}
        </div>
        <div className="z-20 text-grey-darker shadow-md text-xs absolute pin-t pin-r bg-teal-lighter pt-1 pb-1 pr-3 pl-3 mt-2">
          {searchResult.publisher}
        </div>
      </div>
    ));

    let loadingStuff = [];
    for (let i = 1; i < 30; i++) {
     loadingStuff.push(<div className={loadingBackground} />);
    }

    console.log(loadingStuff);

    return (
      <div id="recipeContainer" className={this.state.recipeClicked ? recipeVisible : '' } >
        <div id="recipes">
          {this.props.isLoading ? loadingStuff : recipes}
        </div>
        <div id="recipe">
          <Recipe recipe={this.selectedRecipe}></Recipe>
        </div>
      </div>
    );
  }
}

export default Results;
