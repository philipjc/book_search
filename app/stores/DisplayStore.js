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

         this.trigger(displayData);

         })
         .catch((response) => {
           console.log(response);
         });
  }

});
export default DisplayStore;
