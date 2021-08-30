import PropTypes from "prop-types";
import Heading from "../../layout/Heading";
import Nav from "react-bootstrap/Nav";

export default function AdminPage({ children }) {
	return (
		<>
			<Heading content="Welcome, and may the Force be with you" />
			{children ? children : <p>Here you can add, edit or delete posts.</p>}
			<hr />
			<Nav className="adminpage-home" defaultActiveKey="/posts">
				<Nav.Item classname="adminpage-home__link">
					<Nav.Link classname="adminpage-home__link-text" eventKey="posts" href="/admin/posts/">Go to Posts</Nav.Link>
				</Nav.Item>
			</Nav>
			<hr />
		</>
	);
}

AdminPage.propTypes = {
	children: PropTypes.node,
};