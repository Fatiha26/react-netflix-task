import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';

ReactDOM.render(
  <>
      <Card imgsrc="https://picsum.photos/200/300" 
          title="A netflix original series"
          sname="Dark"
          link="https://www.netflix.com"
      />
      
      <Card imgsrc="https://picsum.photos/300/300" 
          title="A netflix original series"
          sname="Stranger Things"
          link="https://www.netflix.com" />
              
      <Card imgsrc="https://picsum.photos/250/300" 
          title="A netflix original series"
          sname="Boom"
          link="https://www.netflix.com" />

  </>
  ,document.getElementById('root')

);
