/**
 * Created by Henrikh Kantuni on 02/23/17.
 */


'use strict';

class HelloMessage extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <HelloMessage name="Henrikh" />,
  document.getElementById('root')
);