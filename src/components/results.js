import React, { Component } from 'react';
import './results.css';

class Results extends Component {

  render() {
    const recipes = this.props.searchResults.map((searchResult) => 
      <div className="recipe">
        <div key={searchResult.recipe_id}><a href={searchResult.source_url}>{searchResult.title}</a></div>
        <img className="recipeImage" src={searchResult.image_url} />
      </div>
    
    );
    console.log(recipes);
    console.log(this.props.searchResults);
    return (
      <div className="recipeContainer">{recipes}</div>
    );
  }

}

export default Results