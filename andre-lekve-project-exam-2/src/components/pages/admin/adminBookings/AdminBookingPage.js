import AdminPage from "../AdminPage";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BookingList from "./BookingList"

export default function AdminBookingPage() {
	return (
		<>
		<AdminPage/>
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
		<Row>
			<Col>
			<Nav variant="pills" className="flex-column">
				<Nav.Item>
				<BookingList />
				</Nav.Item>
			</Nav>
			</Col>		
		</Row>
		</Tab.Container>
</>
	);
}
