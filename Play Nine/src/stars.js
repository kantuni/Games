/**
 * Created by Henrikh Kantuni on 2/23/17.
 */


import React, {Component} from 'react';

class Stars extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      stars: Math.floor(Math.random() * 9) + 1
    };
  }

  render() {
    let stars = [];
    for (let i = 0; i < this.state.stars; ++i) {
      stars.push(
        <i className="fa fa-star" key={i.toString()} />
      );
    }

    return (
      <div className="text-center">
        {stars}
      </div>
    );
  }
}

export default Stars;
