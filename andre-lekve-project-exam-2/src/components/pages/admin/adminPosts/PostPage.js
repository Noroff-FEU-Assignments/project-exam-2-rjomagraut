import AdminPage from "../AdminPage";
import Heading from "../../../layout/Heading";
import PostList from "./PostList";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function PostPage() {
	return (
		<>
		<AdminPage/>
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<div className="heading-bookings">
			<Heading content="Accommodations" />
			</div>
		<Row>
			<Col>
			<Nav variant="pills" className="flex-column">
				<Nav.Item>
				<PostList />
				</Nav.Item>
			</Nav>
			</Col>		
		</Row>
		</Tab.Container>
</>
	);
}
