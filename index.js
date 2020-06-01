import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import App from './App';
import Timer from './Timer';
import Parent from './Parent';
import Child from './Child';
import Default from './Default'
import './style.css';

// class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: 'React'
  //   };
  // }

  // render() {
  //   return (
  //     <div>
  //       <Hello name={this.state.name} />
  //       <p>
  //         Start editing to see some magic happen :)
  //       </p>
  //     </div>
  //   );
  // }
// }

render(<Default />, document.getElementById('root'));
