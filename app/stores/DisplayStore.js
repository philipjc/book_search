'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions.js';
import axios from 'axios';

// Store listener reference
let onSearch;

let displayData = {
  title: '',
  desc: '',
  image: ''
};

const DisplayStore = Reflux.createStore({

  listenables: Actions,

  onTitleSearch(search) {
    if (!search) return;

    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search)
         .then((response) => {
         let title = response.data.items[0].volumeInfo.title;
         let image = response.data.items[0].volumeInfo.imageLinks.thumbnail;
         let desc = response.data.items[0].searchInfo.textSnippet;

         displayData.title = title;
         displayData.desc = desc;
         displayData.image = image;
         })
         .catch((response) => {
           console.log(response);
         });

    this.updateDisplay(displayData);
  },

  updateDisplay() {
    console.log('called display', displayData);
    this.trigger();
  }

});

// axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.value)
//      .then((response) => {
//      console.log(response.data.items[0]);
//      let title = response.data.items[0].volumeInfo.title;
//      let img = response.data.items[0].volumeInfo.imageLinks.thumbnail;
//      let desc = response.data.items[0].searchInfo.textSnippet;
//
//      this.setState({
//        title,
//        img,
//        desc
//      })
//      })
//      .catch((response) => {
//        console.log(response);
//      });
