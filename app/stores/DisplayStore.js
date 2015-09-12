'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions.js';
import axios from 'axios';


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
        //  console.log(response);
         let { title, description } = response.data.items[0].volumeInfo || '';
         let { smallThumbnail, thumbnail } = response.data.items[0].volumeInfo.imageLinks || '';

         displayData.title = title;
         displayData.desc = description;
         displayData.image = thumbnail;

         this.trigger(displayData);

         })
         .catch((response) => {
           console.log(response);
         });
  }

});
export default DisplayStore;
