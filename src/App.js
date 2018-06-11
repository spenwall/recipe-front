import React, { Component } from 'react';
import './App.css';
import Results from './components/results.js';
import Food2Fork from './components/food2fork';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {searchValue: '', 
                  searchResults: []
                };
  }

  search = (event) => {
    Food2Fork.search(this.state.searchValue)
    .then(response => {
      console.log('hello');
    });
  }

  searchInput = (event) => {
    this.setState({searchValue: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div>
            <input type="text" value={this.state.searchValue} 
              onChange={this.searchInput} />
            <button onClick={this.search} >Search</button>
        </div>
        <Results searchTerms={this.state.searchResults} />
      </div>
    );
  }
}

export default App;

