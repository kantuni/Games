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
    this.handleRetry = this.handleRetry.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      starsCount: Math.floor(Math.random() * 9) + 1,
      numberOfRetries: 10,
      selectedNumbers: [],
      usedNumbers: []
    };
  }

  chooseNumber(number) {
    let state = this.state;
    state.selectedNumbers.push(number);
    this.setState(state);
  }

  handleRetry(event) {
    if (this.state.numberOfRetries > 0) {
      let state = {
        starsCount: Math.floor(Math.random() * 9) + 1,
        numberOfRetries: this.state.numberOfRetries - 1
      };
      this.setState(state);
    }
  }

  handleDeselect(event) {
    let selectedNumber = event.target.textContent;
    let selectedNumbers = this.state.selectedNumbers;
    selectedNumbers.splice(selectedNumbers.indexOf(selectedNumber), 1);
    this.setState({
      selectedNumbers: selectedNumbers
    });
  }
  
  handleSubmit(event) {
    let selectedNumbers = this.state.selectedNumbers;
    if (selectedNumbers.length === 0) {
      return;
    }

    let sum = selectedNumbers.reduce((accumulator, value) => {
      return accumulator + value;
    });
    
    if (sum === this.state.starsCount) {
      let usedNumbers = this.state.usedNumbers;
      usedNumbers = usedNumbers.concat(selectedNumbers);
      this.setState({
        starsCount: Math.floor(Math.random() * 9) + 1,
        selectedNumbers: [],
        usedNumbers: usedNumbers
      });
      
      if (usedNumbers.length === 9) {
        if (confirm("Congratulations. You won!\nDo you want to play again?")) {
          this.setState({
            numberOfRetries: 10,
            selectedNumbers: [],
            usedNumbers: []
          });
        }
      }
    } else {
      this.setState({
        selectedNumbers: []
      });
    }
  }

  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12">
            <h1>Play Nine</h1>
            <p className="lead">Have fun!</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-5" id="stars">
            <Stars starsCount={this.state.starsCount} />
          </div>
          <div className="col-2" id="actions">
            <Actions
              numberOfRetries={this.state.numberOfRetries}
              handleRetry={this.handleRetry}
              handleSubmit={this.handleSubmit}
            />
          </div>
          <div className="col-5" id="answer">
            <Answer 
              selectedNumbers={this.state.selectedNumbers}
              handleDeselect={this.handleDeselect}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12" id="numbers">
            <Numbers
              chooseNumber={this.chooseNumber}
              selectedNumbers={this.state.selectedNumbers}
              usedNumbers={this.state.usedNumbers}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
