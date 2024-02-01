import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="text-center mt-3 border-bottom ">
      <Link to="/">
        <h1 style={{ color: "black" }}>TvShowApp</h1>
      </Link>
    </div>
  );
};

export default NavBar;
