/**
 * Created by Henrikh Kantuni on 2/23/17.
 */


import React, {Component} from 'react';

class Stars extends Component {
  render() {
    let stars = [];
    let amount = Math.floor(Math.random() * 9) + 1;

    for (let i = 0; i < amount; ++i) {
      stars.push(<i className="fa fa-star" key={i.toString()} />)
    }

    return (
      <div className="text-center">
        {stars}
      </div>
    );
  }
}

export default Stars;
