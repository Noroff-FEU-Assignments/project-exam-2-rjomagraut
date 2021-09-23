import { useState, useEffect } from "react";
import useAxios from "../../../../hooks/useAxios";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner'

export default function ContactList() {
	const [mails, setMail] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const getApi = useAxios();

	useEffect(function () {
		async function getMail() {
			try {
				const response = await getApi.get("wp/v2/mail");
				console.log("response", response);
				setMail(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getMail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div className="spinner">Loading... <Spinner className="spinner-loader" animation="border" /></div>;

	if (error) return <div className="mail-empty__warning">There are no mails <i className="fas fa-exclamation-circle"></i></div>;

	return (
<>
		
		<div className="contact-card">
			{mails.map((mail) => {
				return (
					<Card className="contact-card__card">
					<Card.Body className="contact-card__body" key={mail.id}>
						<div className="contact-card__inside">
						<Card.Text><span className="contact-card__info">Name: </span>{mail.full_name}</Card.Text>
						<Card.Text><span className="contact-card__info">Address: </span>{mail.address}</Card.Text>
						<Card.Text><span className="contact-card__info">Postal code: </span>{mail.postal_code}</Card.Text>
    					<Card.Text><span className="contact-card__info">Email: </span>{mail.email}</Card.Text>
						<Card.Text><span className="contact-card__info">Message: </span>{mail.message}</Card.Text>
						<Card.Text className="contact-card__info-date"><span className="contact-card__info-datespan">Date received: </span>{mail.date}</Card.Text>
						</div>
					</Card.Body>
					</Card>
				);
			})}
		</div>
		</>
	);
}