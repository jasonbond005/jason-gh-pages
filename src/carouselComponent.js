import  Carousel  from "react-bootstrap/Carousel";
import slider1 from './images/sky3.jpg';
import slider2 from './images/sky2.jpg';
import slider3 from './images/sky.jpg';
import { ThemeContext } from ".";
import {React, useContext} from 'react';


const CarouselComponent = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
    return ( 
        <Carousel>
      <Carousel.Item className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="sliderText"  style={{ color: theme.foreground }}>First slide label</h3>
          <p className="sliderText"  style={{ color: theme.foreground }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="sliderText"  style={{ color: theme.foreground }}>Second slide label</h3>
          <p className="sliderText" style={{ color: theme.foreground }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="sliderText" style={{ color: theme.foreground }}>Third slide label</h3>
          <p className="sliderText" style={{ color: theme.foreground }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     );
}
 
export default CarouselComponent;