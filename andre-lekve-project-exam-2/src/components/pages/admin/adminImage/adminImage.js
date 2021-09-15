import AdminPage from "../AdminPage";
import Holidaze from "../../../../images/holidaze.png";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function AdminImagePage() {
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
		<div className="adminpage-imagecontainer">
					<img className="adminpage-imagecontainer__image" src={Holidaze} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
				</div>
</>
	);
}
