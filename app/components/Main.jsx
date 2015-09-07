import React from 'react';
import { RouteHandler } from 'react-router';

import Search from './Search.jsx';

export default class Main extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h1>Book Search</h1>
        <RouteHandler {...this.props} />
        <Search />
      </div>
    );
  }
}
