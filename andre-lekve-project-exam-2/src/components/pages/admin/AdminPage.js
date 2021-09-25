import PropTypes from "prop-types";
import Heading from "../../layout/Heading";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
export default function AdminPage({ children }) {
	return (
		<>
			<Heading content="Welcome, Administrator" />
			{children ? children : <p>Here you can add, edit or delete accommodations, check bookings, read enquiries and mails.</p>}
			<hr />
			<Nav className="adminpage-home">
				<Nav.Item className="adminpage-home__link">
					<NavLink exact activeClassName="active" className="adminpage-home__link-text" to="/admin/accommodations"><i className="fas fa-hotel"></i> Accommodations</NavLink>
				</Nav.Item>
				<Nav.Item className="adminpage-home__link">
					<NavLink activeClassName="active" className="adminpage-home__link-text" to="/admin/bookings"><i className="fas fa-calendar-alt"></i> Bookings</NavLink>
				</Nav.Item>
				<Nav.Item className="adminpage-home__link">
					<NavLink activeClassName="active" className="adminpage-home__link-text" to="/admin/enquiries"><i className="fas fa-paper-plane"></i> Enquiries</NavLink>
				</Nav.Item>
				<Nav.Item className="adminpage-home__link">
					<NavLink activeClassName="active" className="adminpage-home__link-text" to="/admin/contact"><i className="fas fa-envelope"></i> Mails</NavLink>
				</Nav.Item>
			</Nav>
			<hr />
		</>
	);
}

AdminPage.propTypes = {
	children: PropTypes.node,
};