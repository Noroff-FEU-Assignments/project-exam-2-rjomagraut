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
		<div className="navbar-left">
                <img src={navImgLeft} alt="Navbar styling"></img>
        </div>
		<Navbar collapseOnSelect expand="lg" bg="white" variant="light">
			
		<Container>
			<Navbar.Brand href="/"><img src={logo} alt="Holidaze logo"/></Navbar.Brand>
			<Navbar.Toggle className="navbar-menu" aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto navbar-menu__user">
				<Link to="/">Home</Link>
				<Link to="/hotels">Hotels</Link>
				<Link to="/contact">Contact</Link>
				</Nav>
				<Nav className="navbar-menu__admin">
								{auth ? (
									<>
										<Link to="/user"><i title="User Menu" className="fas fa-users-cog admin-button"></i></Link>
										<button title="Logout" className="logout-button" onClick={logout}><i className="fas fa-sign-out-alt logout-icon"></i></button>
									</>
								) : (
									<Link to="/login"><div title="Login" className="login-button">Admin <i className="fas fa-lock"/></div></Link>
								)}
					</Nav>
			</Navbar.Collapse>
		</Container>
		
		</Navbar>
		<div className="navbar-right">
                <img src={navImgRight} alt="Navbar styling"></img>
        </div>
		</>
	);
}