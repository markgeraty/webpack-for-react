import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        <h2>Hello, world!</h2>
        <p>
          {config.greetText}
        </p>
      </div>
    );
  }
}

export default Greeter
