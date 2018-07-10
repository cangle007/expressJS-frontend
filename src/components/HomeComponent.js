import React, { Component } from 'react';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'plaeholder'
    };
  }

  placeholderFunction = () => {
    return this.state.placeholder;
  };

  render() {
    return (
      <div>
        <p>{this.state.placeholder}</p>
        <button onClick={this.props.getUser}>CLICK ON ME</button>
      </div>
    );
  }
}
