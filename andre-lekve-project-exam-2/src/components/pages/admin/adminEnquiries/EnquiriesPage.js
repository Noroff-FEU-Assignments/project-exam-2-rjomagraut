import AdminPage from "../AdminPage";

import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function EnquiriesPage() {
	return (
		<>
		<AdminPage/>
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
