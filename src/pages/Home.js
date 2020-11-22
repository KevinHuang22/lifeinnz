import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img0 from '../img/img0.jpg';
import Img1 from '../img/img1.jpg';
import Img2 from '../img/img2.jpg';

function Home (){

    function ControlledCarousel() {
        const [index, setIndex] = useState(0);

        const handleSelect = (selectIndex, e) => {
            setIndex(selectIndex);
        };
        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className = "d-block w-100"
                        src={Img0}
                        alt="First slide"
                        height="700px"
                      />
                      <Carousel.Caption>
                        <h3>First NZ landscape picture</h3>
                        <p>Welcome to New Zealand</p>
                      </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Img1}
                        alt="Second slide"
                        height="700px"
                      />
                      <Carousel.Caption>
                        <h3>Second NZ landscape picture</h3>
                        <p>Welcome to New Zealand</p>
                      </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img2}
                        alt="Third slide"
                        height="700px"
                    />
              
                    <Carousel.Caption>
                        <h3>Third NZ landscape picture</h3>
                        <p>Welcome to New Zealand</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
    return (
        <>
            <ControlledCarousel/>
        </>
    )
}

export default Home;