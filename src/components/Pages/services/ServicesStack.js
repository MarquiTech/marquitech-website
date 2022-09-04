import { ServicesStackDiv } from "../../StyledComponents/StyleSetTwo/ServicesStack.styled";
import imgGridWhite from "../../../Assets/grid-white.svg";
import imgGridGradient from "../../../Assets/grid-gradient.svg";

export const ServicesStack = () => {
  return (
    <>
      <ServicesStackDiv>
        <div className="container mt-5">
          <div className="d-flex pt-5">
            <img src={imgGridWhite} alt="white grid" />
            <div className="ml-3 text-white ls-2" style={{ height: 32 }}>
              <h2 className="text-white">Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 mt-lg-5 mt-md-5 mt-xl-5 mt-sml-4">
              <div className="card">
                <div className="d-flex justify-content-between">
                  <h3 className="text-black">User Interface Design</h3>
                  <img alt="grid" src={imgGridGradient} />
                </div>
                <p>
                  We deliver unique user interface designs for your business
                  needs.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mt-lg-5 mt-md-5 mt-xl-5 mt-sml-4">
              <div className="card">
                <div className="d-flex justify-content-between">
                  <h3 className="text-black">Website Development</h3>
                  <img alt="grid" src={imgGridGradient} />
                </div>
                <p>
                  Every business has a story, we help tell your story on your
                  custom website.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mt-lg-5 mt-md-5 mt-xl-5 mt-sml-4">
              <div className="card">
                <div className="d-flex justify-content-between">
                  <h3 className="text-black">Mobile App Development</h3>
                  <img alt="grid" src={imgGridGradient} />
                </div>
                <p>
                  Get your services in the palms of your users with a custom
                  mobile app.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mt-lg-5 mt-md-5 mt-xl-5 mt-sml-4">
              <div className="card">
                <div className="d-flex justify-content-between">
                  <h3 className="text-black">Web App Development</h3>
                  <img alt="grid" src={imgGridGradient} />
                </div>
                <p>
                  Connect your service to the world with the help of our
                  professional expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ServicesStackDiv>
    </>
  );
};
