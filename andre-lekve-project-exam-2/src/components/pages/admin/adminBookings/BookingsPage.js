import AdminPage from "../AdminPage";
import Heading from "../../../layout/Heading";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function BookingsPage() {
	return (
		<>
		<AdminPage/>
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<div className="heading-bookings">
			<Heading content="Bookings" />
			</div>
		<Row>
			<Col>
			<Nav variant="pills" className="flex-column">
				<Nav.Item>
				
				</Nav.Item>
			</Nav>
			</Col>		
		</Row>
		</Tab.Container>
</>
	);
}
