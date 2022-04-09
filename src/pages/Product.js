import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Product() {
  const history = useHistory();
  const location=useLocation();
  console.log("location",location);
  // const search=location.search
  // console.log("search",search);
  const urlAccess=new URLSearchParams(location.search);
  console.log("url",urlAccess);
  function handleSubmit() {
    // history.replace("/welcome");
    history.push("/welcome");
  }
  return (
    <div>
      <h1>Product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Product;
