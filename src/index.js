/*

import "./index.css";
const img1 = "https://picsum.photos/200/300"; 
const name = "Shantanu";
const links = "https://www.cardekho.com/newcars";
ReactDOM.render(
<>
  <h1  className= "heading"> My name is {name}</h1>,
  <a href={links} target="_new">
   <img src={img1} alt="randomImages" />
  </a>  

</>,
  document.getElementById('root')
);
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date(2020,10,16,15);
curDate = curDate.getHours();

let greeting = '';
const cssStyle = { };

if(curDate >= 1 && curDate < 12){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}else if(curDate>=12 && curDate < 20){
  greeting = 'Good afternoon';
  cssStyle.color = 'Orange';
}else{
  greeting = 'Good Night';
  cssStyle.color = 'Black';
}

ReactDOM.render(
  <>
  <div>
  <h1> Hello Sir,<span style={cssStyle}>{greeting}</span></h1>,
  </div>
  </>,
  document.getElementById(('root'))
);





