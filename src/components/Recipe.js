import React, { Component } from "react";
import { css } from "react-emotion";

const recipeStyle = css`
  cursor: pointer;
  height: 350px;
`;

class Recipe extends Component {
  render() {
    return (
      <div>
        <div
          className={`recipe relative ${recipeStyle}`}
          onClick={() => this.props.onRecipeSelect(this.props.searchResult.recipe_id)}
        >
          <a className="no-underline">
            <img
              className="recipeImage"
              alt={this.props.searchResult.title}
              src={this.props.searchResult.image_url}
            />
            <div className="recipe-gradient" />
          </a>
          <div className="recipe-title z-20 text-white ml-4 mb-4 absolute pin-b pin-l text-left h-30">
            {this.props.searchResult.title}
          </div>
          <div className="z-20 text-grey-darker shadow-md text-xs absolute pin-t pin-r bg-teal-lighter pt-1 pb-1 pr-3 pl-3 mt-2">
            {this.props.searchResult.publisher}
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
