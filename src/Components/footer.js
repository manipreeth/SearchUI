import React from "react";
// Images
import FooterLogo from "./Images/footerLogo.gif";
import UsaFlag from "./Images/usaFlag.gif";
import IndianFlag from "./Images/IndianFlag.gif";

// React-Icons
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="displayFlex">
        <div>
          <span className="sideHeadings">Agency Certifications</span>
          <br />
          <img src={FooterLogo} alt="Certification Logo" id="footerLogo" />
        </div>
        <div id="addressBlock">
          <span className="sideHeadings">Registered Office</span>
          <br />
          <span className="footerSubDetails">
            16192 Costal Highway, Lewes, Delaware 19958, United States
          </span>
          <br />
          <br />
          <br />

          <span className="sideHeadings indianAddressBlock">
            India Operations Office
          </span>
          <br />
          <span className="footerSubDetails">
            2nd Floor, 10 Skyview, South Tower
            <br />
            Sy.No. 83/1, Madhapur, Hyderabad 500081, India
          </span>
        </div>
        <div id="addressBlock">
          <span className="sideHeadings">Email</span>
          <br />
          <span className="footerSubDetails">company@gmail.com</span>
          <br />
          <br />
          <br />

          <span className="sideHeadings">Call us on</span>
          <br />
          <span className="footerSubDetails">
            <img src={UsaFlag} alt="Usa flag" className="countryLogo" />
            +1(417) 417-4174
          </span>
          <br />
          <span className="footerSubDetails">
            <img src={IndianFlag} alt="Indian Flag" className="countryLogo" />{" "}
            +91 99199 19919 | +91 70970 97097
          </span>
        </div>
        <div id="socialMediaLinks">
          <span className="socialMediaLogos">
            <ImFacebook />
          </span>
          <span className="socialMediaLogos">
            <BsInstagram />
          </span>
          <span className="socialMediaLogos">
            <BsTwitter />
          </span>
          <span className="socialMediaLogos">
            <BsWhatsapp />
          </span>
          <span className="socialMediaLogos">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div>
        <hr />
        <div className="displayFlex">
          <span className="sideHeadings">Useful Links</span>
          <span className="footerSubDetails additionalLinks homeLink">
            Home
          </span>
          <span className="footerSubDetails additionalLinks">Students</span>
          <span className="footerSubDetails additionalLinks">Colaboration</span>
          <span className="footerSubDetails additionalLinks">Gallery</span>
          <span className="footerSubDetails additionalLinks">Contact Us</span>
          <span className="footerSubDetails additionalLinks">
            University Login
          </span>
          <span className="footerSubDetails additionalLinks">
            Associate Login
          </span>
        </div>
        <br />
        <span id="copyright">2022 Company Name. All Rights Reserved.</span>
      </div>
    </div>
  );
}
export default Footer;
