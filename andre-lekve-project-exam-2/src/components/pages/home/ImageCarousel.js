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
            <div className="image-carousel__heading"><Heading size="3" className="image-carousel__heading-text" content="Take a look at some of our accommodations that our visitors have taken" /><i className="fas fa-camera-retro image-carousel__heading-icon"></i></div>
            <Carousel className="image-carousel__container">
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel1} alt="Small bed with a nice view" title="Small apartment with a nice view"></img>
    <Carousel.Caption className="carousel-caption">
        <div className="carousel-caption__container">
        <h3 className="carousel-caption__container-heading">Small apartment, Bergen Town</h3>
      <p className="carousel-caption__container-text">Small apartment with a nice view.</p>
        </div>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel2} alt="Inside a wooden cabin" title="A beautiful wooden cabin in the outskirts of Bergen"></img>
    <Carousel.Caption className="carousel-caption">
        <div className="carousel-caption__container"><h3 className="carousel-caption__container-heading">Cabin, Bergen Town</h3>
      <p className="carousel-caption__container-text">A beautiful wooden cabin in the outskirts of Bergen.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel3} alt="A nice loft apartment" title="A nice loft apartment in the middle of Bergen City"></img>
    <Carousel.Caption className="carousel-caption">
        <div className="carousel-caption__container"><h3 className="carousel-caption__container-heading">Small apartment, Bergen City</h3>
      <p className="carousel-caption__container-text">A nice loft apartment in the middle of Bergen City.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel4} alt="Big luxury apartment with a beautiful view" title="Big luxury apartment with a beautiful view"></img>
    <Carousel.Caption className="carousel-caption">
        <div className="carousel-caption__container"><h3 className="carousel-caption__container-heading">Luxury apartment, Bergen City</h3>
      <p className="carousel-caption__container-text">Big luxury apartment with a beautiful view.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel5} alt="Big hotelroom with a couch and bed" title="Medium size hotel in Bergen City"></img>
    <Carousel.Caption className="carousel-caption">
        <div className="carousel-caption__container"><h3 className="carousel-caption__container-heading">Hotel, Bergen City</h3>
      <p className="carousel-caption__container-text">Medium size hotel in Bergen City.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel6} alt="Magnificent view of the ocean through a window" title="Small apartment with a view of the ocean"></img>
    <Carousel.Caption className="carousel-caption">
        <div className="carousel-caption__container"><h3 className="carousel-caption__container-heading">Small apartment, Bergen Town</h3>
      <p className="carousel-caption__container-text">Small apartment with a view of the ocean.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel7} alt="Magnificent view of the ocean from inside a house" title="Luxury house with a perfect view"></img>
    <Carousel.Caption className="carousel-caption">
        <div className="carousel-caption__container"><h3 className="carousel-caption__container-heading">House, Bergen Town</h3>
      <p className="carousel-caption__container-text">Luxury house with a perfect view.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel8} alt="Luxury hotelroom with big bed" title="Luxury room from hotel in Bryggen, Bergen"></img>
    <Carousel.Caption className="carousel-caption">
        <div className="carousel-caption__container"><h3 className="carousel-caption__container-heading">Hotel, Bergen City</h3>
      <p className="carousel-caption__container-text">Luxury room from hotel in Bryggen, Bergen.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000} className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel9} alt="Hotelroom with a doublesize bed" title="Nice motel in Håkonsgate, Bergen"></img>
    <Carousel.Caption className="carousel-caption">
        <div className="carousel-caption__container"><h3 className="carousel-caption__container-heading">Motel, Bergen City</h3>
      <p className="carousel-caption__container-text">Nice motel in Håkonsgate, Bergen.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="image-carousel__container-item">
    <img className="image-carousel__container-image" src={Carousel10} alt="Inside a beautiful apartment" title="Beautiful apartment in the heart of Bergen"></img>
    <Carousel.Caption className="carousel-caption">
        <div className="carousel-caption__container"><h3 className="carousel-caption__container-heading">Apartment, Bergen City</h3>
      <p className="carousel-caption__container-text">Beautiful apartment in the heart of Bergen.</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
        </div>
		</>
	);
}