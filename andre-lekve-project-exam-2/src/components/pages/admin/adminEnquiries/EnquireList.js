import { useState, useEffect } from "react";
import useAxios from "../../../../hooks/useAxios";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner'



export default function EnquireList() {

	const [enquiries, setEnquiries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const getApi = useAxios();

	useEffect(function () {
		async function getEnquiries() {
			try {
				const response = await getApi.get("wp/v2/comments");
				console.log("response", response);
				setEnquiries(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getEnquiries();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div className="spinner">Loading... <Spinner className="spinner-loader" animation="border" /></div>;

	if (error) return <div className="enquirelist-empty__warning">There are no enquiries <i className="fas fa-exclamation-circle"></i></div>;

	return (
<>
		
		<div className="admin-card">
			{enquiries.map((enquire) => {
				return (
					<Card title="Click to edit or delete enquire" className="admin-card__card">
					<Card.Body className="admin-card__body" key={enquire.id}>
						<div className="admin-card__inside">
						<Card.Title className="admin-card__title">Name: {enquire.author_name}</Card.Title>
						<Card.Text>Accommodationnr: {enquire.post}</Card.Text>
    					<Card.Text className="admin-card__email">Email: {enquire.author_email}</Card.Text>
						<Card.Text>Message: <span dangerouslySetInnerHTML={{__html: enquire.content.rendered}}/></Card.Text>
						<Card.Text>Sent: {enquire.date}</Card.Text>
						</div>
					</Card.Body>
					</Card>
				);
			})}
		</div>
		</>
	);
}