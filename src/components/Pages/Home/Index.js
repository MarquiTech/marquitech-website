import React from 'react';
// import { NavBar } from "../StyledComponents/StyleSetOne/NavBar.Style"
import Header from "../Header"
import {HomePageStyles} from "../../StyledComponents/StyleSetOne/HomePage.Style"
import WhatWeDoSection from '../Home/WhatWeDoSection';





export const HomePage = () => {
    // let [fieldname, setfieldname] = useState("dddd");

    // const changeName = () => {
    //     setfieldname("Miracle")
    // }
    return (
        <>
        <HomePageStyles/>
           <Header/>

            <div className='m-top-2'>
            <div className='container'>
                <div className='row mt-5'>
                <div className='col-sm-12 col-lg-12' style={{minHeight:"120px"}}>
                       
                </div>
                    <div className='col-sm-12 col-lg-6'>
                        <h1 className="hero-text">
                        100% of clients stayed with us after the first project
                        </h1>
                        <p className="mt-5">IT Engineers that actively care about Your business, technology, and relations</p>
                        <button className="btn btn-primary">Get a free consultation</button>
                    </div>
                    
                </div>
            </div>
            <WhatWeDoSection/>
            </div>
        </>
    )
}

export default HomePage;