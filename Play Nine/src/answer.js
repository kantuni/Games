/**
 * Created by Henrikh Kantuni on 2/23/17.
 */


import React from 'react';

function Answer(props) {
  const selectedNumbers = props.selectedNumbers.map((number, index) => {
    return (
      <button
        className="btn btn-secondary"
        key={index.toString()}
        onClick={props.handleDeselect}
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

export default Answer;