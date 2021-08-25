import Nav from "react-bootstrap/Nav";
import footerImgLeft from "../../images/footer-left.jpg";
import footerImgRight from "../../images/footer-right.jpg";

export default function Footer() {

	return (
		<>
        <footer className="footer">
            <div className="footer-left">
                <img className="footer-right__image" src={footerImgLeft} alt="Footer colours"></img>
            </div>
            <div className="footer-center">
        <Nav className="justify-content-center footer-center footer-icons">
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
        <div className="footer-copyright"></div>
            <p className="footer-copyright__text">&copy; Holidaze</p>
        </div>
         <div className="footer-right">
                <img className="footer-right__image" src={footerImgRight} alt="Footer colours"></img>
            </div>
        </footer>
        </>
	);
}