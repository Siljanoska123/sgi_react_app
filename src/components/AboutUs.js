import React from "react";

import imageAboutus from '../style/sliki/aboutUs.jpeg'
import '../style/css/aboutUs.css'
import { Container } from "react-bootstrap";





export const AboutUs = () => {

    return (
        <div >
            <Container>
                <section id="about">
                    <div className="div_left-aboutus">
                        <img src={imageAboutus} className='images' />
                    </div>

                    <div className="div_right-aboutus">
                        <div className="div-top-aboutus">
                            <h3 className="aboutUs">About us</h3>
                        </div>
                        <div className="div-bottom">
                            <h2 >
                                This is a landing page with a full screen video background. Feel free to
                                use this landing page in your projects. keep adding sections, change the
                                video, content , etc
                            </h2>

                        </div>
                    </div>

                </section>



            </Container>

        </div>


    )
}