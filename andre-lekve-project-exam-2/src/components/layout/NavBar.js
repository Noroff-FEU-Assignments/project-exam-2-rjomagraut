import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
import navImgLeft from "../../images/nav-left.jpg";
import navImgRight from "../../images/nav-right.jpg";
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
		<nav className="navbar">
		<div className="nav-left">
                <img src={navImgLeft} alt="Italian Trulli"></img>
        </div>
		<div className="nav-center">
			<Navbar collapseOnSelect expand="lg" bg="white" variant="light">
		<Container>
			<Navbar.Brand href="/"><div className="logo"><img src={logo} alt="Italian Trulli"></img></div></Navbar.Brand>
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
		</div>
		<div className="nav-right">
                <img src={navImgRight} alt="Italian Trulli"></img>
        </div>
		</nav>
		</>
	);
}