import React from 'react';
import { RouteHandler } from 'react-router';

// TODO Webpack - resolve file extensions
import Search from './Search.jsx';
import Display from './Display.jsx';
import DisplayStore from '../stores/DisplayStore.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      image: ''
    }
  }

  // listen for store change to update state
  componentDidMount() {
    Actions.updateDisplay();
  }

  render() {
    console.log('Main props ', this.props);

    return (
      <div className="container">
        <h1>Book Search</h1>
        <RouteHandler {...this.props} />
        <Search />
        <Display />
      </div>
    );
  }
}
export default Main;
