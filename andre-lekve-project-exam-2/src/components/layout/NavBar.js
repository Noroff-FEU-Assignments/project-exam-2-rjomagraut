import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
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
				<Nav className="mr-auto navbar-menu__text">
				<NavLink exact activeClassName="selected" to="/"><i className="fas fa-home"></i><span className="navbar-menu__text-font">Home</span></NavLink>
				<NavLink activeClassName="selected" to="/accommodations"><i className="fas fa-calendar-alt"></i><span className="navbar-menu__text-font">Booking</span></NavLink>
				<NavLink activeClassName="selected" to="/contact"><i className="fas fa-envelope"></i><span className="navbar-menu__text-font">Contact</span></NavLink>
				</Nav>
				<Nav className="navbar-menu__admin">
								{auth ? (
									<>
										<NavLink to="/admin"><button className="admin-button">Admin Menu <i title="Admin Menu" className="fas fa-users-cog"></i></button></NavLink>
										<button title="Logout" className="logout-button" onClick={logout}>Logout <i className="fas fa-sign-out-alt logout-icon"></i></button>
									</>
								) : (
									<NavLink to="/login"><button title="Login" className="login-button">Admin <i className="fas fa-lock"/></button></NavLink>
								)}
					</Nav>
			</Navbar.Collapse>
		</Container>
		</Navbar>
		</>
	);
}