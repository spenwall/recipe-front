import React, { Component } from 'react';

class Results extends Component {

  render() {
    return (
      <div>{this.props.searchTerms}</div>
    );
  }

}

export default Results