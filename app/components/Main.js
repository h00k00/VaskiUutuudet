import React from 'react';
import Nav from 'Nav';

var Main = (props) => {
  return (
    <div className="container">
      <Nav/>
      <div className="jumbotron">
          {props.children}
      </div>
    </div>
  );
};

export default Main;
