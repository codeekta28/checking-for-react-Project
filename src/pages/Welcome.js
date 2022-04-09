import React from "react";
import { Route } from "react-router-dom";


function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>
      <Route path="/welcome/newuser">
         <h2>New User</h2>
      </Route>
    </div>
  );
}

export default Welcome;
