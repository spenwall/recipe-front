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
    event.preventDefault();
    Food2Fork.search(this.state.searchValue)
    .then(response => {
      this.setState({searchResults: response.data.recipes});
    })
    .catch(error => {
      console.log(error);
    });
  }

  searchInput = (event) => {
    this.setState({searchValue: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div>
            <form onSubmit={this.search}>
            <input type="text" value={this.state.searchValue} 
              onChange={this.searchInput} />
            <button type="submit">Search</button>
            </form>
        </div>
        <Results searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default App;

