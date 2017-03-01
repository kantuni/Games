/**
 * Created by Henrikh Kantuni on 2/23/17.
 */


import React, {Component} from 'react';

class Stars extends Component {
  render() {
    let stars = [];
    for (let i = 0; i < this.props.starsCount; ++i) {
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