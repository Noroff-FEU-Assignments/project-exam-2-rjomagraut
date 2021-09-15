import AdminPage from "../AdminPage";
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
