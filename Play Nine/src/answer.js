/**
 * Created by Henrikh Kantuni on 2/23/17.
 */


import React, {Component} from 'react';

class Answer extends Component {
  render() {
    let selectedNumbers = this.props.selectedNumbers.map((number, index) => {
      return (
        <button 
          className="btn btn-secondary" 
          key={index.toString()}
          onClick={this.props.handleDeselect}
        >
          {number}
        </button>
      );
    });

    if (selectedNumbers.length === 0) {
      return null;
    }

    return (
      <div className="text-center">
        {selectedNumbers}
      </div>
    );
  }
}

export default Answer;