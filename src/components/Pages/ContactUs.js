import React, { useState } from 'react';
import { Container } from "../StyledComponents/StyleSetOne/Container.Style"



export const HomePage = () => {
    let [fieldname, setfieldname] = useState("dddd");

    const changeName = () => {
        setfieldname("Miracle")
    }
    return (
        <>
            <Container>
                <button onClick={changeName}>{fieldname}</button>
            </Container>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        test
                        <button className='btn btn-primary'>Clickmeeeee</button>
                    </div>
                    <div className='col-sm-12 col-lg-6'>
                        test.
                    </div>
                </div>


            </div>
        </>
    )
}

export default HomePage;