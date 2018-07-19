import React, { Component } from "react";
import "./results.css";
import { css } from "react-emotion";
import RecipeInfo from "./RecipeInfo";
import Recipe from "./Recipe";
import Food2Fork from './food2fork';

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
      recipeClicked: false,
      recipeLoading: false,
      selectedRecipe: [],
    };
  }

  recipeClick = (recipeId) => {
    this.setState({recipeClicked: true});
    this.setState({recipeLoading: true});
    window.scroll( 0, 0 );
    Food2Fork.recipe(recipeId)
    .then(response => {
      this.setState({selectedRecipe: response.data.recipe});
      this.setState({recipeLoading: false});
    });
  };

  closeRecipe = () => {
    this.setState({recipeClicked: false});
  }

  render() {
    const recipes = this.props.searchResults.map(searchResult => (
        <Recipe key={searchResult.recipe_id} searchResult={searchResult} onRecipeSelect={this.recipeClick} />
    ));

    let loadingStuff = [];
    for (let i = 1; i < 30; i++) {
     loadingStuff.push(<div className={loadingBackground} />);
    }

    return (
      <div id="recipeContainer" className={this.state.recipeClicked ? recipeVisible : '' } >
        <div id="recipes">
          {this.props.isLoading ? loadingStuff : recipes}
        </div>
        <div id="recipe">
          <RecipeInfo recipe={this.state.selectedRecipe}
                      loading={this.state.recipeLoading} 
                      closeRecipe={this.closeRecipe} />
        </div>
      </div>
    );
  }
}

export default Results;