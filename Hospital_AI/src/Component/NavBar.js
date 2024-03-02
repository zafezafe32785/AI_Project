import React from "react";
//import { NavLink } from "react-dom";
import "./NavBar.css";
import HospitalLogo from '../Image/HospitalLogo.png';

function NavBar() {
    const navtext = "โรงพยาบาลวชิรพัฒน์ \nWachiraphat Hospital";
    return (

        <>

            <div className="navbar">
                <div className="nav-container">
                    <img src={HospitalLogo} alt="" className="logo" />
                    <div className="nav-headtext">
                        {navtext}
                    </div>

                </div>


            </div>
        </>




    );
}

export default NavBar;