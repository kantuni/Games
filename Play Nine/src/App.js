/**
 * Created by Henrikh Kantuni on 2/23/17.
 */


import React, {Component} from 'react';
import Stars from './Stars';
import Actions from './Actions';
import Answer from './answer';
import Numbers from './numbers';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRetry = this.handleRetry.bind(this);
    this.state = {
      numberOfRetries: 5,
      starsCount: Math.floor(Math.random() * 9) + 1,
      selectedNumbers: [],
      usedNumbers: []
    };
  }

  handleSelect(number) {
    let selectedNumbers = this.state.selectedNumbers.slice();
    selectedNumbers.push(number);
    this.setState({
      selectedNumbers: selectedNumbers
    });
  }

  handleDeselect(e) {
    const selectedNumber = e.target.textContent;
    let selectedNumbers = this.state.selectedNumbers.slice();
    selectedNumbers.splice(selectedNumbers.indexOf(selectedNumber), 1);
    this.setState({
      selectedNumbers: selectedNumbers
    });
  }

  moveExists(stars, numbers) {
    const combinations = {
      1: [[1]],
      2: [[2]],
      3: [[3], [1, 2]],
      4: [[4], [1, 3]],
      5: [[5], [1, 4], [2, 3]],
      6: [[6], [1, 5], [2, 4], [1, 2, 3]],
      7: [[7], [1, 6], [2, 5], [3, 4], [1, 2, 4]],
      8: [[8], [1, 7], [2, 6], [3, 5], [1, 2, 5], [1, 3, 4]],
      9: [[9], [1, 8], [2, 7], [3, 6], [4, 5], [1, 2, 6], [1, 3, 5], [2, 3, 4]]
    };

    for (let i = 0; i < combinations[stars].length; ++i) {
      let isSuperset = combinations[stars][i].every(number => numbers.includes(number));
      if (isSuperset) {
        return true;
      }
    }
    
    return false;
  }

  handleSubmit(e) {
    let selectedNumbers = this.state.selectedNumbers.slice();
    if (selectedNumbers.length === 0) {
      return;
    }

    const sum = selectedNumbers.reduce((accumulator, value) => {
      return accumulator + value;
    });

    if (sum === this.state.starsCount) {
      let starsCount = Math.floor(Math.random() * 9) + 1;
      let usedNumbers = this.state.usedNumbers.slice();
      usedNumbers = usedNumbers.concat(selectedNumbers);
      this.setState({
        starsCount: starsCount,
        selectedNumbers: [],
        usedNumbers: usedNumbers
      });

      // win
      if (usedNumbers.length === 9) {
        if (confirm("Congratulations. You won!\nDo you want to play again?")) {
          this.setState({
            numberOfRetries: 5,
            selectedNumbers: [],
            usedNumbers: []
          });
        }
      }

      // loose
      let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let notUsedNumbers = numbers.filter(number => !usedNumbers.includes(number));
      if (this.state.numberOfRetries === 0) {
        if (!this.moveExists(starsCount, notUsedNumbers)) {
          if (confirm("Sorry. You lost!\nDo you want to play again?")) {
            this.setState({
              numberOfRetries: 5,
              selectedNumbers: [],
              usedNumbers: []
            });
          }
        }
      }
    } else {
      this.setState({
        selectedNumbers: []
      });
    }
  }

  handleRetry(e) {
    if (this.state.numberOfRetries > 0) {
      this.setState({
        starsCount: Math.floor(Math.random() * 9) + 1,
        numberOfRetries: this.state.numberOfRetries - 1
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
              handleSelect={this.handleSelect}
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
