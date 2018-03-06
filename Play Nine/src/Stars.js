/**
 * Created by Henrikh Kantuni on 2/23/17.
 */


import React from 'react';

function Stars(props) {
  let stars = [];
  for (let i = 0; i < props.starsCount; i++) {
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

export default Stars;
