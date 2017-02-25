/**
 * Created by Henrikh Kantuni on 2/23/17.
 */

import React, {Component} from 'react';


class Answer extends Component {
  render() {
    let selectedNumbers = [];
    for (let i = 0; i < this.props.selectedNumbers.length; ++i) {
      selectedNumbers.push(
        <button className="btn btn-secondary" 
                key={this.props.selectedNumbers[i].toString()}>
          {this.props.selectedNumbers[i]}
        </button>
      );
    }
    
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