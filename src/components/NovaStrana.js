import React, { useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
//import { Zoom, Slide } from 'react-slideshow-image';
import { Carousel, Button } from 'react-bootstrap';
import '../style/css/navaStrana.css'

export const NovaStrana = () => {

    const [autoplay, setAutoplay] = useState(true);
    const style1 = {
        textAlign: "center",
        backgroundImage: 'url("https://www.clarus.si/cache/optikac/30--15_soncna-web-02_sl-4b145844695ac3f0.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        padding: "260px 0",
        fontSize: "30px"
    }
    const style2 = {
        textAlign: "center",
        backgroundImage: 'url("https://www.clarus.si/cache/optikac/40-web_sl-4976d4c217bc9048.jpg")',
        backgroundPosition: 'center',
        padding: "260px 0",
        fontSize: "30px"
    }
    const style3 = {
        textAlign: "center",
        backgroundImage: 'url("https://www.clarus.si/cache/optikac/22-banner_web_sl-d0565cb57aba863f.jpg")',
        backgroundPosition: 'center',
        padding: "260px 0",
        fontSize: "30px"
    }
    const style4 = {
        textAlign: "center",
        backgroundImage: 'url("https://www.clarus.si/cache/optikac/32-web_sl-be48bf3bcec8e4e8.jpg")',
        backgroundPosition: 'center',
        padding: "260px 0",
        fontSize: "30px"
    }

    const images = [
        'https://www.clarus.si/cache/optikac/30--15_soncna-web-02_sl-4b145844695ac3f0.jpg',
        'https://www.clarus.si/cache/optikac/40-web_sl-4976d4c217bc9048.jpg',
        'https://www.clarus.si/cache/optikac/22-banner_web_sl-d0565cb57aba863f.jpg',
        'https://www.clarus.si/cache/optikac/32-web_sl-be48bf3bcec8e4e8.jpg'
    ];

    return (
        <div className='home'>
            <div className='promocija'>

                <Carousel fade >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.clarus.si/cache/optikac/30--15_soncna-web-02_sl-4b145844695ac3f0.jpg"
                            alt="First slide"

                        />
                        <Carousel.Caption>
                            <h3>Приправени за сончеви денови?</h3>
                            <p>Посетете не во нашата продавница и одберете си  НАОЧАРИ ЗА СОНЦЕ од најновата колекција </p>
                            <Button variant="primary">Повеќе</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.clarus.si/cache/optikac/32-web_sl-be48bf3bcec8e4e8.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Роденденски попуст</h3>
                            <p>Посетете не и искористејте 15 % попуст</p>
                            <Button variant="primary">Повеќе</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.clarus.si/cache/optikac/40-web_sl-4976d4c217bc9048.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Нова колекција пролет/лето</h3>
                            <p>Богат избор на наочари...</p>
                            <Button variant="primary">Повеќе</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.clarus.si/cache/optikac/22-banner_web_sl-d0565cb57aba863f.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Твое лето, твој попуст</h3>
                            <p>Посетете не и искористејте го попустот на сите видови наочари и контактни леки</p>
                            <Button variant="primary">Повеќе</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
           
        </div >
    )
}
