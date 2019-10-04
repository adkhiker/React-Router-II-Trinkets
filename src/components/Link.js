/* This is a basic implementation of the Link component from react-router-dom
   Note: It does not contain all of the functionality of the actual Link component.
   If you are interested, try creating that functionality yourself. */
import React from "react";
/* Note: we DID NOT talk about 'withRouter' in the lesson. It is a higher order 
component that gives us access to the history, match, and location props. You 
can find more info about it here: https://reacttraining.com/react-router/web/api/withRouter */
import { withRouter } from "react-router-dom";

function Link(props) {
  const linkClickHandler = e => {
    e.preventDefault();
    props.history.push(props.to);
  };
  return (
    <a href="#" style={{ cursor: "pointer" }} onClick={linkClickHandler}>
      {props.children}
    </a>
  );
}

export default withRouter(Link);
