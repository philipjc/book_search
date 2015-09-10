import React from 'react';

class Display extends React.Component{
 constructor(props) {
   super(props);
 }

 render() {
   let { title, desc, image } = this.props.book.status;
   console.log(title);

   return(
     <div className="book-search__display">
       <h2>{title}</h2>
       <p>{desc}</p>
       <img src={image} />
     </div>
   );
 }
}

module.exports = Display;
