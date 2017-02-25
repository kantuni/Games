/**
 * Created by Henrikh Kantuni on 2/23/17.
 */

import React, {Component} from 'react';

class Actions extends Component {
  render() {
    return (
      <div className="btn-group-vertical">
        <button className="btn btn-primary">=</button>
        <button className="btn btn-info">
          <i className="fa fa-refresh" />
        </button>
      </div>
    );
  }
}

export default Actions;