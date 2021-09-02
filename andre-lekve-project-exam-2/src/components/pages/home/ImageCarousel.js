import Carousel from "react-bootstrap/Carousel";
import Heading from "../../layout/Heading";
import Carousel1 from "../../../images/carousel1.jpg"
import Carousel2 from "../../../images/carousel2.jpg"
import Carousel3 from "../../../images/carousel3.jpg"
import Carousel4 from "../../../images/carousel4.jpg"
import Carousel5 from "../../../images/carousel5.jpg"
import Carousel6 from "../../../images/carousel6.jpg"
import Carousel7 from "../../../images/carousel7.jpg"
import Carousel8 from "../../../images/carousel8.jpg"
import Carousel9 from "../../../images/carousel9.jpg"
import Carousel10 from "../../../images/carousel10.jpg"

export default function ImageCarousel() {
	
	return (
        <>
        <div className="image-carousel">
            <div className="image-carousel__heading"><Heading size="3" className="image-carousel__heading-text" content="Take a look at some of our accommodations that our visitors have taken" /><i class="fas fa-camera-retro image-carousel__heading-icon"></i></div>
            <Carousel className="image-carousel__container">
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel1} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
    <Carousel.Caption>
        <div className="image-carousel__container-caption">
        <h3 className="image-carousel__container-heading">Nulla vitae</h3>
      <p className="image-carousel__container-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel2} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
    <Carousel.Caption>
        <div className="image-carousel__container-caption"><h3 className="image-carousel__container-heading">Lorem ipsum</h3>
      <p className="image-carousel__container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel3} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
    <Carousel.Caption>
        <div className="image-carousel__container-caption"><h3 className="image-carousel__container-heading">Praesent commodo</h3>
      <p className="image-carousel__container-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel4} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
    <Carousel.Caption>
        <div className="image-carousel__container-caption"><h3 className="image-carousel__container-heading">Nulla vitae</h3>
      <p className="image-carousel__container-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel5} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
    <Carousel.Caption>
        <div className="image-carousel__container-caption"><h3 className="image-carousel__container-heading">Lorem ipsum</h3>
      <p className="image-carousel__container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel6} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
    <Carousel.Caption>
        <div className="image-carousel__container-caption"><h3 className="image-carousel__container-heading">Praesent commodo</h3>
      <p className="image-carousel__container-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel7} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
    <Carousel.Caption>
        <div className="image-carousel__container-caption"><h3>Nulla vitae</h3>
      <p className="image-carousel__container-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel8} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
    <Carousel.Caption>
        <div className="image-carousel__container-caption"><h3 className="image-carousel__container-heading">Lorem ipsum</h3>
      <p className="image-carousel__container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel9} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
    <Carousel.Caption>
        <div className="image-carousel__container-caption"><h3 className="image-carousel__container-heading">Praesent commodo</h3>
      <p className="image-carousel__container-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel10} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
    <Carousel.Caption>
        <div className="image-carousel__container-caption"><h3 className="image-carousel__container-heading">Nulla vitae</h3>
      <p className="image-carousel__container-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
        </div>
		</>
	);
}