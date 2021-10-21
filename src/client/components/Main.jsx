import React, { Component } from 'react';
import HomeView from './Home';

export class MainComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HomeView />
    )
  }
}
export default MainComponent;