import React from 'react';
import React from "react";
import Face from "../../../Assets/Images/face.png";
import CustomUI from "../../../Assets/Images/custom-user-interfase.svg";
import SoftwareDev from "../../../Assets/Images/software-dev.svg";
import Cloud from "../../../Assets/Images/cloud.svg";


export const WhatWeDoSection = () => {
  return (
    <>
      <div className="m-top-2 b-radius pb-7">
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-12 col-lg-6" style={{ padding: "20px" }}>
              <h1 className="wwd_text mt-4">What we do</h1>
              <h3 className="mt-5 mt-lg-8">
                Customer User Interface Design Services
              </h3>
              <p className="mt-4">
                We deliver unique user interface designs for your business
                needs, to provide the best user experience for your customers.
              </p>
            </div>
            <div className="col-sm-12 col-lg-6 d-lg-block d-none">
              <img src={CustomUI} className="mt-5" width={1000} height={400} />
            </div>
          </div>
          <div class="row mt-lg-8">
            <div className="col-lg-6 col-sm-12 d-lg-block d-none">
              <img src={SoftwareDev} />
            </div>
            <div className="col-lg-6 col-sm-12 mt-3 ">
              <h3>Software Development Services</h3>
              <p className="mt-4">
                We deliver unique user interface designs for your business
                needs, to provide the best user experience for your customers.
              </p>
            </div>
          </div>
          <div class="row  mt-lg-9">
            <div className="col-lg-6 col-sm-12 mt-5">
              <h3>Software Cloud Deployment And Maintenance Services</h3>
              <p className="mt-4">
                We deliver unique user interface designs for your business
                needs, to provide the best user experience for your customers.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 d-lg-block d-none text-right">
              <img src={Cloud} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9 responsive-padding" style={{ backgroundColor: "#0d86d1"}}>
        <div className="">
          <h2 className="" style={{ color: "white" }}>
            What people say
          </h2>
          <div className="row pt-5">
            <div className="col-lg-4 col-sm-12 ">
              <div className="card p-3 w-auto mb-2">
                <div className="row d-flex">
                  <div className="col-4 ">
                    <img src={Face} style={{width:"100px"}} />
                  </div>
                  <div className="col-8">
                    <h3 className="card-title">John Smith</h3>
                    <h3 className="card-subtitle text-muted">CTO MyCompany</h3>
                    <p className="card-text" style={{ fontWeight: "500" }}>
                      "Amazing experience."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 ">
              <div className="card p-3 mb-2">
                <div className="row">
                  <div className="col-4">
                    <img src={Face} style={{width:"100px"}} />
                  </div>
                  <div className="col-8">
                    <h3 className="card-title">John Smith</h3>
                    <h3 className="card-subtitle text-muted">CTO MyCompany</h3>
                    <p className="card-text" style={{ fontWeight: "500" }}>
                      "Amazing experience."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 ">
              <div className="card p-3 mb-2">
                <div className="row">
                  <div className="col-4">
                    <img src={Face} style={{width:"100px"}} />
                  </div>
                  <div className="col-8">
                    <h3 className="card-title">John Smith</h3>
                    <h3 className="card-subtitle text-muted">CTO MyCompany</h3>
                    <p className="card-text" style={{ fontWeight: "500" }}>
                      "Amazing experience."
                    </p>
                  </div>
                </div>
              </div>
            </div>
       
          </div>
        </div>
      </div>
      
    </>
  );
};

export default WhatWeDoSection;
