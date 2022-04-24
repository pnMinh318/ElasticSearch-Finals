import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slider(props) {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 item-slider"
                    src="https://ghienreview.com/wp-content/uploads/2022/02/Ghienreview-Gia-toc-Gucci-01-min.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 item-slider"
                    src="https://ghienreview.com/wp-content/uploads/2021/12/Ghienreview-Spiderman-no-way-home-04-min.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 item-slider"
                    src="https://ghienreview.com/wp-content/uploads/2021/11/Ghien-review-Red-Notice-01.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;