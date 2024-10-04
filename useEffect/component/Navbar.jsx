import React from "react";
import { useEffect } from "react";

const Navbar = ({ color }) => {
  // Case 1: Run on every render
  useEffect(() => {
    alert("Hey i will run on every render");
  });

  // Case 2: Run only on First render
  useEffect(() => {
    alert("Hey welcome to my page. This is my first render");
  }, []);
  
  // Case 3: Run only when certain value change
  useEffect(() => {
    alert("hy i am running because color was changed");
  }, [color]);

  return <div>I am Navbar of {color} ..</div>;
};

export default Navbar;
