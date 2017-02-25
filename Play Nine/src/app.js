/**
 * Created by Henrikh Kantuni on 2/23/17.
 */


import React, {Component} from 'react';
import Stars from './stars';
import Numbers from './numbers';
import Answer from './answer';
import Actions from './actions';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Play Nine</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="lead">Have fun!</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-5" id="stars">
            <Stars />
          </div>
          <div className="col-2" id="actions">
            <Actions />
          </div>
          <div className="col-5" id="answer">
            <Answer />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12" id="numbers">
            <Numbers />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
