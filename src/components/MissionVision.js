import React from "react";
import { Container } from "react-bootstrap";

import '../style/css/missionVission.css'

export const MissionVision = () => {
    return (
        <div id='mission-vision-header'>

            <section className="image-section">
            </section>
            <Container>
                <section id="mission-vison-section">
                    <div className="mission-vison-div">
                        <div className="div-left">
                            <div className="mission-icon"> <i class="fa-solid fa-crosshairs"></i></div>
                            <div className="mission-top">
                                <h2>Our Mission</h2>
                            </div>
                            <div className="mission-bottom">
                                <h4 >
                                    Promoting standards and achieving excellence in the online reputation management practice whilst promoting community engagement, corporate social responsibility and health and wellness.
                                </h4>

                            </div>
                        </div>

                        <div className="div-right">
                            <div className="vision-icon"> <i class="fa-solid fa-eye"></i></div>
                            <div className="vision-top">
                                <h2>Our Vision</h2>
                            </div>
                            <div className="vision-bottom">
                                <h4 >
                                    SGI as the leading global award body for exquisite online business reputation and brand management.
                                </h4>

                            </div>
                        </div>

                    </div>

                </section>
            </Container>
        </div>
    )
}