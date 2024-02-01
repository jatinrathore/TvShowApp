import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      className="text-center mt-3"
      style={{ borderBottom: "2px solid #202020" }}
    >
      <Link to="/">
        <h1 style={{ color: "#e8e8e8" }}>TvShowApp</h1>
      </Link>
    </div>
  );
};

export default NavBar;
