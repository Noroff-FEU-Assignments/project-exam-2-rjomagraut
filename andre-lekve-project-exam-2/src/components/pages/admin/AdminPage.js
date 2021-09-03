import PropTypes from "prop-types";
import Heading from "../../layout/Heading";
import Nav from "react-bootstrap/Nav";

export default function AdminPage({ children }) {
	return (
		<>
			<Heading content="Welcome, Administrator" />
			{children ? children : <p>Here you can add, edit or delete accommodations, read enquiries and mails, and check out bookings.</p>}
			<hr />
			<Nav className="adminpage-home" defaultActiveKey="/posts">
				<Nav.Item classname="adminpage-home__link">
					<Nav.Link classname="adminpage-home__link-text" eventKey="posts" href="/admin/posts/">Accommodations</Nav.Link>
				</Nav.Item>
				<Nav.Item classname="adminpage-home__link">
					<Nav.Link classname="adminpage-home__link-text" eventKey="posts" href="/admin/enquiries/">Enquiries</Nav.Link>
				</Nav.Item>
				<Nav.Item classname="adminpage-home__link">
					<Nav.Link classname="adminpage-home__link-text" eventKey="posts" href="/admin/bookings/">Bookings</Nav.Link>
				</Nav.Item>
			</Nav>
			<hr />
		</>
	);
}

AdminPage.propTypes = {
	children: PropTypes.node,
};