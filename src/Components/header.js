import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import UsaFlag from "./Images/usaFlag.gif";

function Header() {
  return (
    <div id="header">
      <p id="headerLogo">I</p>
      <div className="displayFlex headertextAlignment">
        <p>Home</p>
        <p>Students</p>
        <p>Collaboration</p>
        <p>Gallery</p>
        <p>Contact Us</p>

        <div className="displayFlex selectAlignment">
          <select id="country">
            <option value="USA">
              <img src={UsaFlag} alt="usa flag" className="countryLogo" />
              USA
            </option>
            <option value="India">India</option>
            <option value="China">China</option>
          </select>
          <select>
            <option value="Data Science">Data Science</option>
            <option value="Web Development">Web Development</option>
            <option value="Ethical Hacking">Ethical Hacking</option>
          </select>
          <AiOutlineSearch size="30px" id="searchIcon" />
        </div>

        <BiHeart size="40px" id="headerWhishlistIcon" />
        <BsPerson size="40px" id="profileIcon" />
      </div>
    </div>
  );
}
export default Header;
