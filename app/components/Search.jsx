import React from 'react';
import axios from 'axios';

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
     console.log('pushed enter');
     axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.value)
          .then((response) => {
          console.log(response.data.items[0]);
          let title = response.data.items[0].volumeInfo.title;
          let img = response.data.items[0].volumeInfo.imageLinks.thumbnail;
          this.setState({
            title,
            img
          })
          })
          .catch((response) => {
            console.log(response);
          });
   }
 }

 render() {
   return(
     <div className="search">
       <input onChange={this.inputHandler}
              onKeyDown={this.runSearch}
              className="search__input"
              value={this.state.value}
              type="text"
              name="search-movie"
              />
            {this.state.title}
            <img src={this.state.img} />
     </div>
   );
 }
}

module.exports = Search;
