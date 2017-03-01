/**
 * Created by Henrikh Kantuni on 2/23/17.
 */


import React, {Component} from 'react';

class Actions extends Component {
  render() {
    return (
      <div className="btn-group-vertical">
        <button className="btn btn-primary" onClick={this.props.handleSubmit}>=</button>
        <button
          className="btn btn-info"
          disabled={this.props.numberOfRetries === 0}
          onClick={this.props.handleRetry}
        >
          <i className="fa fa-refresh" />
          <span className="number-of-retries">{this.props.numberOfRetries}</span>
        </button>
      </div>
    );
  }
}

export default Actions;