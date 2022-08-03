import React from 'react';
import Header from "../Header"
import { HomePageStyles } from "../../StyledComponents/StyleSetOne/HomePage.Style"
import HERO_IMAGE from "../../../Assets/Images/adbout us-hero.svg"
import Grid_Grad from "../../../Assets/Images/grid-gradient.svg"
import WHITEGRID from "../../../Assets/Images/grid-white.svg";
import contact from "../../../Assets/Images/contact-us.svg"


export const HomePage = () => {

    return (
        <>
            <HomePageStyles />
            <Header />

            <div className='m-top-2' style={{ background: "#fff" }}>
                <div className='container'>
                    <div className='row mt-1 pt-6'>
                        <div className='col-sm-12 col-lg-6 mt-8'>
                            <h1 className="hero-text" style={{ fontSize: "2.6rem" }}>
                                We innovate together!
                            </h1>
                            <p className="mt-5">IT Team with diverse software development experience working together to deliver solutions for your business</p>
                        </div>

                        <div className='col-sm-12 col-lg-6' id='display-none-mobile' style={{ textAlign: "right" }}>
                            <img src={HERO_IMAGE} alt="Hero-Image" />
                        </div>

                    </div>
                </div>

                <div className="mt-9 responsive-padding" style={{ backgroundColor: "#0d86d1" }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h3 className='text-white' style={{ fontSize: "24px" }}><img src={WHITEGRID} /> &nbsp; &nbsp; Our Mission</h3>
                            </div>

                            <div className='col-sm-12 mt-5'>
                                <h3 className='text-white' style={{ fontSize: "18px" }}>Providing Technological Growth</h3>
                            </div>
                            <div className='col-sm-12 col-lg-7 mt-4'>
                                <p className='text-white'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="container mt-5">
                    <div className="d-flex pt-5">
                        <img src={Grid_Grad} alt="white grid" />
                        <div className="ml-3 text-white ls-2" style={{ height: 32 }}>
                            <h3 className="">Get in touch with us</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 mt-lg-5 mt-md-5 mt-xl-5 mt-sml-0">
                            <div className="m-top-2">
                                <p className="mb-5">
                                    Reach out to the MarquiTech team by filling up the form. We look
                                    forward to hearing from you.
                                </p>
                                <img src={contact} alt="contact us" className="d-sml-none" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6 col-sm-12 mt-lg-5 mt-md-5 mt-xl-5 formDiv">
                            <div className="card" style={{ padding: "2rem" }}>
                                <div className="container">
                                    <div className="form-group">
                                        <label>First Name *</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name *</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number *</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Message *</label>
                                        <textarea className="form-control" rows="3" />
                                    </div>
                                    <button className="btn btn-block btn-primary">Send Message</button>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;