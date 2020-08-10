import React from "react";
import Navbar from "./Navbar";

const Shell = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};

export default Shell;
