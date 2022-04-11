import React from "react";
import { Container, Image } from "react-bootstrap";
import award1 from '../style/sliki/2.jpg'
import award2 from '../style/sliki/3.jpg'
import award3 from '../style/sliki/4.jpg'
import '../style/css/awards.css'




export const Awards = () => {

    return (
        <div>
            <section className="container-cover">

                <div className="award-cover-image">
                    <Image className="award-image" src='https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />

                </div>
                
               

                <Container>
                    <div className="award-cover-topic">
                        <h2>AWARDS </h2>

                    </div>
                </Container>
            </section>

            <Container>
                <section className="section-cards">

                    <div className="card">
                        <div className="image">
                            <Image className="card-image" src={award1} />
                        </div>
                        <div className="card-details">
                            <div class="card-text">
                                <h3 className="card-topic">
                                    SGI Customer Excellence Award
                                </h3>
                                <p className="card-opis">
                                    <ul>
                                        <li>online reputation review</li>
                                        <li>customer excellence</li>
                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <Image className="card-image" src={award2} />
                        </div>
                        <div className="card-details">
                            <div class="card-text">
                                <h3 className="card-topic">
                                    SGI Reputation and Brand Management Award
                                </h3>
                                <p className="card-opis">
                                    <ul>
                                        <li>online reputation review</li>
                                        <li>customer excellence</li>
                                        <li>marketing management</li>
                                        <li>community engagement</li>
                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <Image className="card-image" src={award3} />
                        </div>
                        <div className="card-details">
                            <div class="card-text">
                                <h3 className="card-topic">
                                    SGI Grand Prix Award
                                </h3>
                                <p className="card-opis">
                                    <ul>
                                        <li>online reputation review</li>
                                        <li>customer excellence</li>
                                        <li>marketing management</li>
                                        <li>community engagement</li>
                                        <li>corporate social responsibility</li>
                                        <li>media relations</li>

                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>


                </section>
                <section className="section-cards">

                    <div className="card">
                        <div className="image">
                            <Image className="card-image" src={award1} />
                        </div>
                        <div className="card-details">
                            <div class="card-text">
                                <h3 className="card-topic">
                                    SGI Employee wellbeing
                                </h3>
                                <p className="card-opis">
                                    <ul>
                                        <li>online reputation review</li>
                                        <li>customer excellence</li>
                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>


                </section>





            </Container>

            

        </div>
    )
}