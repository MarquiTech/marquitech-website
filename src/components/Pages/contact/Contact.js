import Header from "../Header";
import Footer from "../Footer";
import contactUs from "../../../Assets/contact-us-hero.svg";
import { ContactForm } from "./ContactForm";
import { FirstPart } from "../../StyledComponents/StyleSetTwo/FirstPart.styled";
export const Contact = () => {
  const bg =
    "transparent linear-gradient(180deg, #00aeef 0%, #21409a 100%) 0% 0% no-repeat padding-box;";
  const bgColor = "#fefefe";
  return (
    <>
      <Header />
      <FirstPart>
        <div className="main-content">
          <div className="container">
            <div className="row align-items-md-center align-items-lg-center align-items-xl-center">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h1 className="hero-text" style={{ fontSize: "2.6rem" }}>
                  Contact Us
                </h1>
                <p className="mt-5">
                  We look forward to hearing your innovative ideas and providing
                  solutions.
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-md-right text-lg-right text-xl-right text-sm-center">
                <img className="d-sml-none" src={contactUs} alt="contact" />
              </div>
            </div>
          </div>
        </div>
      </FirstPart>
      <ContactForm bg={bg} bgColor={bgColor} />
      <Footer />
    </>
  );
};
