import React from "react";
function Welcome(props) {
  return (
    <React.Fragment>
      <p>
     <h1>{props.name}</h1>
      <h2>Welcome to school.</h2>
      </p>
    </React.Fragment>
  );
}
export default Welcome;
