import React from "react";
import './Navbar.css';

const Navbar = () =>{

    return(

        <div className="navbar">
          <div className="section_container navContainer">
           <span className="logo">Booking MOROCCO</span>
           <div className="navItems">

            <button className="navbutton">Registre</button>
            <button className="navbutton">Login</button>

           </div>

          </div>

        </div>
    )
}

export default Navbar;

