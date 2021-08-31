import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
// import navImgLeft from "../../images/nav-left.jpg";
// import navImgRight from "../../images/nav-right.jpg";
import logo from "../../images/logo.jpg";
import Container from "react-bootstrap/Container";
export default function NavBar() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
		<>
		<Navbar collapseOnSelect expand="lg" bg="white" variant="light">
			
		<Container>
			<Navbar.Brand href="/"><img src={logo} alt="Holidaze logo"/></Navbar.Brand>
			<Navbar.Toggle className="navbar-menu" aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto navbar-menu__admin">
				<Link to="/">Home</Link>
				<Link to="/accommodations">Booking</Link>
				<Link to="/contact">Contact</Link>
				</Nav>
				<Nav className="navbar-menu__admin">
								{auth ? (
									<>
										<Link to="/admin"><button className="admin-button">Admin Menu <i title="Admin Menu" className="fas fa-users-cog"></i></button></Link>
										<button title="Logout" className="logout-button" onClick={logout}>Logout <i className="fas fa-sign-out-alt logout-icon"></i></button>
									</>
								) : (
									<Link to="/login"><button title="Login" className="login-button">Admin <i className="fas fa-lock"/></button></Link>
								)}
					</Nav>
			</Navbar.Collapse>
		</Container>
		
		</Navbar>
		</>
	);
}