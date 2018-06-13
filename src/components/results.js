import React, { Component } from 'react';
import './results.css';

class Results extends Component {

  render() {
    const recipes = this.props.searchResults.map((searchResult) => 
      <div className="recipe relative" key={searchResult.recipe_id}>
          <a className="no-underline" href={searchResult.source_url}>
            <img className="recipeImage" alt={searchResult.title} src={searchResult.image_url} />
            <div className="recipe-gradient">
            </div>
          </a>
          <div className="recipe-title z-20 text-white ml-4 absolute pin-b pin-l text-left h-30">{searchResult.title}</div>
      </div>
    
    );
    return (
      <div className="recipeContainer">
      {this.props.isLoading ? 
      (<div className="flex content-center">Loading</div>) 
      : 
      (recipes)}
      </div>
    );
  }

}

export default Results