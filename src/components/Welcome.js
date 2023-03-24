import React from "react";
function Welcome(props) {
  return (
    <React.Fragment>
      <p>
        Hey ! <h1>{props.name}</h1>
      </p>
      <h2>Welcome to school.</h2>
    </React.Fragment>
  );
}
export default Welcome;
