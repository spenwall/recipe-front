import React, { Component } from 'react';
import './results.css';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeClicked: false
    }
  }

  recipeClick = (e) => {
    this.setState({recipeClick: true});
    alert(this.state.recipeClicked);
  }

  render() {
    const recipes = this.props.searchResults.map((searchResult) => 
      <div className="recipe relative" key={searchResult.recipe_id}>
          <a className="no-underline" onClick={this.recipeClick}>
            <img className="recipeImage" alt={searchResult.title} src={searchResult.image_url} />
            <div className="recipe-gradient">
            </div>
          </a>
          <div className="recipe-title z-20 text-white ml-4 mb-4 absolute pin-b pin-l text-left h-30">{searchResult.title}</div>
          <div className="z-20 text-grey-darker shadow-md text-xs absolute pin-t pin-r bg-teal-lighter pt-1 pb-1 pr-3 pl-3 mt-2">{searchResult.publisher}</div>
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
      <div id="recipeContainer">
      {this.props.isLoading ? 
      (loadingStuff) 
      : 
      (recipes)}
      </div>
    );
  }

}

export default Results