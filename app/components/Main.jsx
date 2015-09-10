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

    this.handleDisplayUpdate = this.handleDisplayUpdate.bind(this);
  }

  // listen for store change to update state
  componentDidMount() {
    DisplayStore.listen((status) => {
      this.setState({status});
    });
  }

  handleDisplayUpdate() {
    console.log('handle');
  }

  render() {
    console.log('Main props ', this.props);
    console.log('this state', this.state);

    return (
      <div className="container">
        <div className="book-search">
          <h1>Book Search</h1>
          <RouteHandler {...this.props} />
          <Search />
          <Display book={this.state} />
        </div>
      </div>
    );
  }
}
export default Main;
