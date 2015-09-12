import React from 'react';

class Display extends React.Component{
 constructor(props) {
   super(props);
 }

 render() {
   let { title, desc, image } = this.props.book;

   return(
     <div className="book-search__display">
       <h2>{title}</h2>
       <p>{desc}</p>
       <img src={image} />
     </div>
   );
 }
}

Display.propTypes = ({
  title: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired
});

module.exports = Display;
