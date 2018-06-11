import React, { Component } from 'react';
import './App.css';
import Results from './components/results.js';
import Food2Fork from './components/food2fork';
import './css/tailwind.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {searchValue: '', 
                  searchResults: [],
                  isLoading: false
                };
  }

  submitSearch = (event) => {
    event.preventDefault();
    this.setState({isLoading: true});
    this.search(this.state.searchValue);
  }

  search = (searchTerm) => {
    console.log(this.state.isLoading);
    Food2Fork.search(this.state.searchValue)
    .then(response => {
      this.setState({searchResults: response.data.recipes});
      this.setState({isLoading: false});
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    Food2Fork.search()
    this.search('');
  }

  searchInput = (event) => {
    this.setState({searchValue: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="flex ml-2">
            <form onSubmit={this.submitSearch}>
            <input type="text" className="p-4 bg-grey-light" 
              value={this.state.searchValue} 
              onChange={this.searchInput}

            />
            </form>
        </div>
        <Results isLoading={this.state.isLoading} searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default App;

