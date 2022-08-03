import React from 'react';
import Header from "../Header"
import { HomePageStyles } from "../../StyledComponents/StyleSetOne/HomePage.Style"
import WhatWeDoSection from '../Home/WhatWeDoSection';
import HERO_IMAGE from "../../../Assets/Images/hero-image.svg"
import Grid_Grad from "../../../Assets/Images/grid-gradient.svg"
import contact from "../../../Assets/Images/contact-us.svg"



export const HomePage = () => {
    
    return (
        <>
            <HomePageStyles />
            <Header />

            <div className='m-top-2' style={{ background: "#fff" }}>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-sm-12 col-lg-12' style={{ minHeight: "120px" }}>
                            <center>
                                <img src={HERO_IMAGE} alt="Hero-Image" id='mobile-hero-display' style={{ width: "50%" }} />
                            </center>
                        </div>
                        <div className='col-sm-12 col-lg-6'>
                            <h1 className="hero-text">
                                Developing Your Unique Software Solutions
                            </h1>
                            <p className="mt-5">IT Team with diverse software development working to deliver solutions for your businesses</p>
                            <button style={{borderRadius:"2rem"}} className="btn btn-primary mt-4">Get a free consultation</button>
                        </div>

                        <div className='col-sm-12 col-lg-6' id='display-none-mobile'>
                            <img src={HERO_IMAGE} alt="Hero-Image" />
                        </div>

                    </div>
                </div>
                <div className="responsive-padding" style={{ backgroundColor: "#0d86d1", marginTop:"13rem" }}>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-sm-12 col-lg-3' style={{marginBottom:"10px"}}>
                               <div className='card'>
                                <div className='card-body' style={{display:"flex"}}>

                                <div style={{width:"15px", height:"15px", background:"#0d86d1", borderRadius:"2rem"}}></div>&nbsp; &nbsp; <span style={{marginTop:"-4px"}}>User Interface Design</span>
                                </div>
                                  
                               </div>
                            </div>

                            <div className='col-sm-12 col-lg-3' style={{marginBottom:"10px"}}>
                               <div className='card'>
                                <div className='card-body' style={{display:"flex"}}>

                                <div style={{width:"15px", height:"15px", background:"#0d86d1", borderRadius:"2rem"}}></div>&nbsp; &nbsp; <span style={{marginTop:"-4px"}}>Web App Development</span>
                                </div>
                                  
                               </div>
                            </div>


                            <div className='col-sm-12 col-lg-3' style={{marginBottom:"10px"}}>
                               <div className='card'>
                                <div className='card-body' style={{display:"flex"}}>

                                <div style={{width:"15px", height:"15px", background:"#0d86d1", borderRadius:"2rem"}}></div>&nbsp; &nbsp; <span style={{marginTop:"-4px"}}>Mobile App Development</span>
                                </div>
                                  
                               </div>
                            </div>

                            <div className='col-sm-12 col-lg-3' style={{marginBottom:"10px"}}>
                               <div className='card'>
                                <div className='card-body' style={{display:"flex"}}>

                                <div style={{width:"15px", height:"15px", background:"#0d86d1", borderRadius:"2rem"}}></div>&nbsp; &nbsp; <span style={{marginTop:"-4px"}}>Website Development</span>
                                </div>
                                  
                               </div>
                            </div>

                        </div>

                    </div>
                </div>
                <WhatWeDoSection />
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
						<div className="card" style={{padding:"2rem"}}>
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
                        <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
					</div>
                   
					{/* </div> */}
				</div>
			</div>
        </>
    )
}

export default HomePage;