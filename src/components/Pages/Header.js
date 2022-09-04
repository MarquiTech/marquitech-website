import React, { useState } from "react";
import { NavBarStyles } from "../StyledComponents/StyleSetOne/NavBar.Style";
import { Link } from "react-router-dom";
import LogoIcon from "../../Assets/logo-icon.svg";
import { FiMenu, FiX } from "react-icons/fi";
import $ from "jquery";

const menuItems = [
  { name: "Home", anchor: "/" },
  // { name: "How we do", anchor: "" },
  { name: "Services", anchor: "/services" },
  { name: "About us", anchor: "/about" },
  { name: "Contact us", anchor: "/contact" },
];

const letsChatBtn = <button className="btn btn-primary">Let's Chat</button>;
export const Header = () => {
  let [menuIcon, setMenuIcon] = useState(false);

  const toggleMenu = () => {
    setMenuIcon(!menuIcon);
    $("#menu_back").fadeIn();
  };

  const closeMenu = () => {
    setMenuIcon(!menuIcon);
    $("#menu_back").fadeOut();
  };
  return (
    <>
      <NavBarStyles />
      <div className="nav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <Link to="/">
                <h2 style={{ float: "left", fontSize: "23px" }}>
                  <img src={LogoIcon} alt="logo" /> MarquiTech
                </h2>
                <h2 id="hamburger" style={{ float: "right" }}>
                  {!menuIcon ? (
                    <FiMenu size={"43px"} onClick={toggleMenu} />
                  ) : (
                    <FiX onClick={closeMenu} size="43px" />
                  )}
                </h2>
              </Link>
            </div>
            <div
              className="col-sm-12 col-lg-8"
              id="menu_list_nav"
              style={{ textAlign: "right" }}
            >
              {menuItems.map((x) => {
                return <Link to={x.anchor}>{x.name}</Link>;
              })}
            </div>
          </div>
        </div>

        <div id="menu_back">
          <div id="menu_body">
            {menuItems.map((x) => {
              return (
                <>
                  <p>
                    <Link
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#000",
                      }}
                      to={x.anchor}
                    >
                      {x.name}
                    </Link>
                    <hr />
                  </p>
                </>
              );
            })}
            {/* <center>{letsChatBtn}</center> */}
            <center>{letsChatBtn}</center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
