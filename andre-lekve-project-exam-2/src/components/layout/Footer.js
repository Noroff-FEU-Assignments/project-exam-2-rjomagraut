import Nav from "react-bootstrap/Nav";

export default function Footer() {

	return (
		<>
        <footer className="footer">
        <Nav className="justify-content-center footer-logo">
            <Nav.Item>
                <span className="footer-logo__text"><i className="fab fa-jedi-order footer-logo-icon"></i> Wiki-sw</span>
            </Nav.Item>
        </Nav>
        <Nav className="justify-content-center footer-icons">
            <Nav.Item>
            <Nav.Link href="#"><i className="fab fa-facebook-square footer-icons__facebook"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="#"><i className="fab fa-twitter-square footer-icons__twitter"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="#"><i className="fab fa-pinterest-square footer-icons__pinterest"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="#"><i className="fab fa-instagram-square footer-icons__instagram"></i></Nav.Link>
            </Nav.Item>
        </Nav>
        <Nav className="justify-content-center footer-copyright">
            <Nav.Item>
                <p class="footer-copyright__text">&copy; Wiki-SW - André Lekve</p>
            </Nav.Item>
        </Nav>
        </footer>
        </>
	);
}