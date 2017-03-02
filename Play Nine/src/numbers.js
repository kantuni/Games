/**
 * Created by Henrikh Kantuni on 2/23/17.
 */


import React from 'react';

function Numbers(props) {
  let numbers = [];
  for (let i = 1; i < 10; ++i) {
    let className, disabled,
      isSelected = props.selectedNumbers.includes(i),
      isUsed = props.usedNumbers.includes(i);

    if (isSelected) {
      className = 'btn btn-secondary active';
      disabled = true;
    } else if (isUsed) {
      className = 'btn btn-success';
      disabled = true;
    } else {
      className = 'btn btn-secondary';
      disabled = false;
    }

    numbers.push(
      <button
        className={className}
        disabled={disabled}
        key={i.toString()}
        onClick={props.handleSelect.bind(null, i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="text-center">
      {numbers}
    </div>
  );
}

export default Numbers;