/**
 * Created by Henrikh Kantuni on 2/23/17.
 */


import React, {Component} from 'react';

class Numbers extends Component {
  render() {
    let numbers = [];
    
    for (let i = 1; i < 10; ++i) {
      numbers.push(<button className="btn btn-secondary" key={i.toString()}>{i}</button>)
    }
    
    return (
      <div className="text-center">
        {numbers}
      </div>
    );
  }
}

export default Numbers;
