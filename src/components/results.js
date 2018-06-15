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
          <div className="aboslute pin-b pin-1 text-left h-30 z-20">
            <div className="recipe-title text-white ml-4 mb-2">{searchResult.title}</div>
            <div className="publisher m-2 text-white">{searchResult.publisher}</div>
          </div>
      </div>
    );

    let loadingStuff = [];
    let bgColor = '';
    for(let i = 1; i < 30; i++) {
      switch (i % 4) {
        case 0:
          bgColor = 'bg-grey';
          break;
        case 1:
          bgColor = 'bg-grey-dark';
          break;
        case 2:
          bgColor = 'bg-grey-darker'
          break;
        default:
          bgColor = 'bg-grey-darkest';
      }
      loadingStuff.push(<div className={bgColor}></div>);
    };
    
    console.log(loadingStuff);

    return (
      <div className="recipeContainer">
      {this.props.isLoading ? 
      (loadingStuff) 
      : 
      (recipes)}
      </div>
    );
  }

}

export default Results