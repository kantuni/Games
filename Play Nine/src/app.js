/**
 * Created by Henrikh Kantuni on 2/23/17.
 */

import React, {Component} from 'react';
import Stars from './stars';
import Actions from './actions';
import Answer from './answer';
import Numbers from './numbers';


class App extends Component {
  constructor(props) {
    super(props);

    this.chooseNumber = this.chooseNumber.bind(this);
    this.state = {
      selectedNumbers: [],
      usedNumbers: []
    };
  }

  chooseNumber(number) {
    this.state.selectedNumbers.push(number);
    this.setState(this.state);
  }

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
            <Answer selectedNumbers={this.state.selectedNumbers} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12" id="numbers">
            <Numbers chooseNumber={this.chooseNumber} 
                     selectedNumbers={this.state.selectedNumbers}
                     usedNumbers={this.state.usedNumbers} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;