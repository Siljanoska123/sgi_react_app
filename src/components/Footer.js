import React from "react";
import { Form, FormControl, Button, Container } from 'react-bootstrap';
import '../style/css/footer.css'


export const Footer = () => {



    return (

        <div className="footer">
            <Container>
                <section className="footer-top">
                    <div className="footer-top-left">
                        <h3 className="newsletter">Join Our Newsletter</h3>
                        <div className="newsletter-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        </div>

                    </div>

                    <div className="footer-top-right">


                        <form method="post" className="form-newsletter">

                            <div className="div-input-email">
                                <input
                                    type="email"
                                    name="email"
                                    className="input-email"
                                    placeholder="Enter Your Email Address" required="" />
                                <button
                                    type="submit"
                                    className="input-button"
                                    name="submit">
                                    Subscribe
                                </button>
                            </div>

                        </form>
                    </div>
                </section >
                <section className="footer-middle">
                    <div className="footer-middle-one">
                        <h3 className="footer-logo">SGI</h3>
                        <div className="footer-logo-text">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</div>


                        <span className="footer-social-icons">
                            <a href="/"><i class="fa-brands fa-facebook-square"></i></a>
                            <a href="/"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="/"><i class="fa-solid fa-envelope"></i></a>
                        </span>


                    </div>
                    
                    <div className="footer-middle-two">
                        <h5 className="footer-topics">Quick Links</h5>
                        <div className="footer-logo-text">
                            <ul className="footer-ul">
                                <li><a href="/#about">About Us</a></li>
                                <li><a href="/#mission-vision-header">Mission and Vision</a></li>
                                <li><a href="/">Awards</a></li>
                                <li><a href="/">Contact Us</a></li>

                            </ul>
                        </div>

                    </div>
                    <div className="footer-middle-two">
                        <h5 className="footer-topics">Useful Links</h5>
                        <div className="footer-logo-text">
                            <ul className="footer-ul">
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms and Conditions</a></li>
                                <li><a href="/">Disclaimer</a></li>
                                <li><a href="/">Support</a></li>
                                <li><a href="/">FAQ</a></li>

                            </ul>
                        </div>
                        

                    </div>
                    <div className="footer-middle-two">
                        <h5 className="footer-topics">Work Hours</h5>
                        <span className="footer-clock" >
                            <a href="/"><i class="fa-solid fa-clock"></i></a>
                            <span className="work-hours">
                                8 AM - 5PM
                            </span>
                            <span className="work-days">
                               Sunday - Friday
                            </span>
                        </span>

                    </div>

                </section >


                <section className="footer-bottom">
                   
                    <div className="copy-right">
                        Copyright © 2022. All rights reserved
                    </div>
                </section>

            </Container>
        </div >

    )
}



