import React, { Component } from 'react';
import './results.css';

class Results extends Component {

  render() {
    const recipes = this.props.searchResults.map((searchResult) => 
      <div className="recipe">
        <a href={searchResult.source_url}>
          <img className="recipeImage" alt={searchResult.title} src={searchResult.image_url} />
        </a>
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