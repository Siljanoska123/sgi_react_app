import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import '../style/css/contact.css'





export const ContactUs = () => {

    return (

        <div className="image-contact">



            <Container>
                <div >
                    {/* <div className="contact-toppic">
                        <h1>Join us in our mission to provide
                            <span className="red-toppic"> world class education
                            </span>
                        </h1>
                    </div> */}


                    <div className="content-form">

                        <div className="information-left">

                            {/* <div className="contact-form-toppic">Contact us</div>
                            <hr className="hr" /> */}
                            <div className="contact-form-text">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="name" placeholder="Full Name*" />
                                        <Form.Control type="email" placeholder="E-mail*" />
                                    </Form.Group>
                                    <Form.Select aria-label="Default select example">
                                        <option>Choose information*</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                        <Form.Control as="textarea" rows={10} placeholder="Your message*" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Sign me up for the newsletter!" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Send Request
                                    </Button>
                                </Form>
                            </div>

                        </div>
                        {/* <div className="information-right">
                           
                            fdsfe

                        </div> */}

                    </div>

                </div>
            </Container>
        </div>
    )
}