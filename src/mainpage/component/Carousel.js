import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Carousel.css'
import { Carousel } from "react-bootstrap";

const main_img_list = [
    {
        id: 1,
        alt: 'First image',
        image: require('./carousel_img/carousel_0.jpg')
    },
    {
        id: 2,
        alt: 'Second image',
        image: require('./carousel_img/carousel_1.jpg')
    },
    {
        id: 3,
        alt: 'Third image',
        image: require('./carousel_img/carousel_2.jpg')
    },
    {
        id: 4,
        alt: 'Fourth image',
        image: require('./carousel_img/carousel_3.jpg')
    }];

export default function ProjectCarousel() {
    return (
        <div>
            <Carousel
                controls={false}>
                {
                    main_img_list.map(item => (
                        <Carousel.Item key={item.id} interval={3000}>
                            <img className="d-block w-100" src={item.image} alt={item.alt} />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
}