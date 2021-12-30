import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import {MdOutlinePostAdd} from "react-icons/md"


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mainnav ">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/" >
         <MdOutlinePostAdd size="45"/> Redux Posts
        </Link>

       
       
          <Link to="/addPost" className="btn btn-light ml-auto ">
            Add Posts
          </Link>
         
      </div>
    </nav>
   

  );
};

export default Navbar;
