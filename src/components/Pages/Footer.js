import logoName from "../../Assets/logo-name.png";
import { FooterDiv } from "../StyledComponents/StyleSetTwo/Footer.styled";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <div className="container">
          <div className="row align-items-md-center align-items-lg-center align-items-xl-center text-sml-center">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <img height={92} width={123} alt="logoName" src={logoName} />
              <p class="mt-2 text-sml-center">info@marquitech.com</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-md-right text-lg-right text-xl-right text-sm-center mt-sml-2">
              <FiInstagram
                size={30}
                style={{ marginRight: "15px", color: "#C1C3C5" }}
              />{" "}
              <FiTwitter
                size={30}
                style={{ marginRight: "15px", color: "#C1C3C5" }}
              />{" "}
              <FiLinkedin size={30} style={{ color: "#C1C3C5" }} />
            </div>
          </div>
        </div>
      </FooterDiv>
    </>
  );
};

export default Footer;
