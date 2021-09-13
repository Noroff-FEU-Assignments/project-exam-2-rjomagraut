import Heading from "../../layout/Heading";
import EnquireModalShow from "./EnquireModal";
import ImageCarousel from "./ImageCarousel";
import Bergen from "../../../images/bergen.jpg";
import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<>
		<div className="homepage-top">
			<Heading content="Welcome to Holidaze" />
			<EnquireModalShow />
		</div>

		<div className="homepage-imagecontainer">
			<Link className="homepage-imagecontainer__link" to="/accommodations"><button className="homepage-imagecontainer__button">Go to accommodations</button></Link><img className="homepage-imagecontainer__image" src={Bergen} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
		</div>
		<div className="image-carousel__container">
			<ImageCarousel />
		</div>
		</>
	);
}