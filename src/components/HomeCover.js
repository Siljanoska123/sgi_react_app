import React from "react";
import '../style/css/homeCover.css'
import video from '../style/icons/video.mp4'
import kriva from '../style/sliki/kriva.svg'
import { AboutUs } from "./AboutUs";
import { MissionVision } from "./MissionVision";
import { Container } from "react-bootstrap";



export const HomeCover = () => {

    return (

        <div >
            <section className="home">
                <video src={video} loop autoPlay muted className="video">

                </video>
                {/* <div className="kriva_linija">
                    <img className="linija" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwMCIgaGVpZ2h0PSIxMjMiIHZpZXdCb3g9IjAgMCAxNjAwIDEyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0tMy41MjQxIDg5LjUxMTdDNzc0LjIwOSAxMTIuMDI3IDEzMDguNzIgODIuMTkwMSAxNjAwIDBDMTYwMCA4MS4zNTQyIDE2MDAgMTIyLjAzMSAxNjAwIDEyMi4wMzFILTUiIGZpbGw9IiNGN0Y3RkIiLz4KPC9zdmc+Cg==" />

                </div> */}
                <Container>
                    <div className="overlay"></div>
                    <div className="content">
                        <h2>Never Stop To </h2>
                        <h3>Exploring The World</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                        <a href="/">Explore</a>
                    </div>
                    </Container>

                    <div className="media-icons">
                        <a href="/"><i class="fa-brands fa-facebook-square"></i></a>
                        <a href="/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="/"><i class="fa-solid fa-envelope"></i></a>

                    </div>

               

            </section>



            <AboutUs />
            <MissionVision />



        </div>


    )
}