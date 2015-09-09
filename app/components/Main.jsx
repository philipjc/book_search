import React from 'react';
import Reflux from 'reflux';
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
    this.handleDisplayUpdate = this.handleDisplayUpdate.bind(this);
  }

  // listen for store change to update state
  componentDidMount() {
    DisplayStore.listen((status) => {
      console.log('status ', status);
    });
  }

  handleDisplayUpdate() {
    console.log('handle');
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
