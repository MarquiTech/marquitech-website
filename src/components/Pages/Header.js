import React, { useState } from 'react';
import { NavBarStyles } from "../StyledComponents/StyleSetOne/NavBar.Style"
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";
import $ from "jquery"


const menuItems = [
    { name: "What we do", anchor: "" },
    { name: "How we do", anchor: "" },
    { name: "Services", anchor: ""},
    { name: "About us", anchor: "" },
    { name: "Contact us", anchor: "" }
]

const letsChatBtn = (
    <button className="btn btn-primary">Let's Chat</button>
)
export const Header = () => {
    let [menuIcon, setMenuIcon] = useState(false);

    const toggleMenu = () => {

        setMenuIcon(!menuIcon)
        $("#menu_back").fadeIn()
    }

    const closeMenu = () => {

        setMenuIcon(!menuIcon)
        $("#menu_back").fadeOut()
    }
    return (
        <>
            <NavBarStyles />
            <div className="nav">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-3">
                            <h2 style={{ float: "left", fontSize: "23px" }}>Marquitech</h2>
                            <h2 id="hamburger" style={{ float: "right" }}>
                                {!menuIcon ?
                                    <FiMenu size={"43px"} onClick={toggleMenu} />
                                    :
                                    <FiX onClick={closeMenu} size="43px" />}
                            </h2>

                        </div>
                        <div className="col-sm-12 col-lg-8" id="menu_list_nav">
                            {menuItems.map(x => {
                                return (
                                    <Link to={x.anchor}>{x.name}</Link>
                                )
                            })}
                            {letsChatBtn}
                        </div>
                    </div>
                </div>

                <div id="menu_back">
                    <div id="menu_body">
                        {menuItems.map(x => {
                            return (
                                <>
                                    <p><Link style={{ fontWeight: "600", fontSize: "14px", color: "#000" }} to={x.anchor}>{x.name}</Link>
                                        <hr />
                                    </p>

                                </>

                            )
                        })}
                        <center>
                            {letsChatBtn}
                        </center>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Header;