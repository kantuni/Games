/**
 * Created by Henrikh Kantuni on 2/23/17.
 */


import React, {Component} from 'react';

class Numbers extends Component {
  render() {
    let numbers = [];
    for (let i = 1; i < 10; ++i) {
      let className, disabled = false,
        isSelected = this.props.selectedNumbers.indexOf(i) > -1,
        isUsed = this.props.usedNumbers.indexOf(i) > -1;

      if (isSelected) {
        className = 'btn btn-secondary active';
        disabled = true;
      } else if (isUsed) {
        className = 'btn btn-success';
        disabled = true;
      } else {
        className = 'btn btn-secondary';
      }

      numbers.push(
        <button className={className}
                disabled={disabled}
                key={i.toString()}
                onClick={this.props.chooseNumber.bind(null, i)}>
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
}

export default Numbers;
