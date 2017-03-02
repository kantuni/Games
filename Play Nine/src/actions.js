/**
 * Created by Henrikh Kantuni on 2/23/17.
 */


import React from 'react';

function Actions(props) {
  return (
    <div className="btn-group-vertical">
      <button className="btn btn-primary" onClick={props.handleSubmit}>=</button>
      <button
        className="btn btn-info"
        disabled={props.numberOfRetries === 0}
        onClick={props.handleRetry}
      >
        <i className="fa fa-refresh" />
        <span className="number-of-retries">{props.numberOfRetries}</span>
      </button>
    </div>
  );
}

export default Actions;