import PropTypes from "prop-types";
import Heading from "../../layout/Heading";
import Nav from "react-bootstrap/Nav";
import Holidaze from "../../../images/holidaze.png";

export default function AdminPage({ children }) {
	return (
		<>
			<Heading content="Welcome, Administrator" />
			{children ? children : <p>Here you can add, edit or delete accommodations, read enquiries and mails, and check out bookings.</p>}
			<hr />
			<Nav className="adminpage-home" defaultActiveKey="/posts">
				<Nav.Item className="adminpage-home__link">
					<Nav.Link className="adminpage-home__link-text" eventKey="posts" href="/admin/posts/">Accommodations</Nav.Link>
				</Nav.Item>
				<Nav.Item className="adminpage-home__link">
					<Nav.Link className="adminpage-home__link-text" eventKey="posts" href="/admin/enquiries/">Enquiries</Nav.Link>
				</Nav.Item>
				<Nav.Item className="adminpage-home__link">
					<Nav.Link className="adminpage-home__link-text" eventKey="posts" href="/admin/bookings/">Bookings</Nav.Link>
				</Nav.Item>
			</Nav>
			<hr />
			<div className="adminpage-imagecontainer">
			<img className="adminpage-imagecontainer__image" src={Holidaze} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
		</div>
		</>
	);
}

AdminPage.propTypes = {
	children: PropTypes.node,
};