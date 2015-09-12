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
    this.handleDisplayUpdate = this.handleDisplayUpdate.bind(this);
  }

  // listen for store change to update state
  componentDidMount() {
    this.unsubscribe = DisplayStore.listen(this.handleDisplayUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleDisplayUpdate(res) {
    this.setState({
      title: res.title,
      desc: res.desc,
      image: res.image
    });
  }

  render() {
    console.log(this.state);
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
