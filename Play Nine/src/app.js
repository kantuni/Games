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
        <h1>Play Nine</h1>
        <p className="lead">Have fun!</p>
        <div className="row">
          <Stars />
          <Actions />
          <Answer />
        </div>
        <Numbers />
      </div>
    );
  }
}

export default App;
