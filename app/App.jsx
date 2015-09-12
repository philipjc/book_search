import './styles/_app.scss';

import React from 'react';
import Router from 'react-router';
import routes from './routes.js';
import Main from './components/Main.jsx';

main();
function main() {
  // const app = document.createElement('div');
  // document.body.appendChild(app);

  Router.run(routes, (Root, state) => {
    React.render(<Root {...state} />, document.body);
  });
}
