import React from 'react';
import axios from 'axios';

import Actions from '../actions/Actions.js';

class Search extends React.Component{
 constructor(props) {
   super(props);
   this.state = {
     value: ''
   }
   this.inputHandler = this.inputHandler.bind(this);
   this.runSearch = this.runSearch.bind(this);
 }

 inputHandler(e) {
   e.preventDefault();
   let input = e.target.value;
   this.setState({
     value: input
   });
 }

 runSearch(e) {
  //  e.preventDefault();
   if (e.key === 'Enter') {
    let searchFor = this.state.value;
    Actions.titleSearch(searchFor);
   }
 }

 render() {
   return(
     <div className="search">
       <input type="text"
              name="search-movie"
              className="search__input"
              value={this.state.value}
              onChange={this.inputHandler}
              onKeyDown={this.runSearch}
              />
            {this.state.title}
            <img src={this.state.img} />
            <p>{this.state.desc}</p>
     </div>
   );
 }
}

module.exports = Search;
