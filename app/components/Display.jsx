import React from 'react';

class Display extends React.Component{
 constructor(props) {
   super(props);
 }

 render() {
   console.log(this.props);

   let { title, desc, image } = this.props.book || '';

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
