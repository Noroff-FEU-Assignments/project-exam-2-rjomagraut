import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
export default function NavBar() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		<Container>
			<Navbar.Brand href="/"><span className="logo"><i className="fab fa-jedi-order logo-icon"></i> Wiki-sw</span></Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
				</Nav>
				<Nav>
								{auth ? (
									<>
										<Link to="/user"><i title="User Menu" className="fas fa-users-cog user-button"></i></Link>
										<button title="Logout" className="logout-button" onClick={logout}><i className="fas fa-sign-out-alt logout-icon"></i></button>
									</>
								) : (
									<Link to="/login"><i title="Login" className="fas fa-user login-button"></i></Link>
								)}
					</Nav>
			</Navbar.Collapse>
		</Container>
		</Navbar>
		
	);
}