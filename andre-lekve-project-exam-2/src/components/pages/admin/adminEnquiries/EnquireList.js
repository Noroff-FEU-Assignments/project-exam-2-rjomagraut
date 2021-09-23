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
		
		<div className="enquiry-card">
			{enquiries.map((enquire) => {
				return (
					<Card className="enquiry-card__card">
					<Card.Body className="enquiry-card__body" key={enquire.id}>
						<div className="enquiry-card__inside">
						<Card.Text><span className="enquiry-card__info">Accommodationnr: </span>{enquire.post}</Card.Text>
						<Card.Text><span className="enquiry-card__info">Name: </span>{enquire.author_name}</Card.Text>
    					<Card.Text><span className="enquiry-card__info">Email: </span>{enquire.author_email}</Card.Text>
						<Card.Text><span className="enquiry-card__info">Message: </span><span dangerouslySetInnerHTML={{__html: enquire.content.rendered}}/></Card.Text>
						<Card.Text className="enquiry-card__info-date"><span className="enquiry-card__info-datespan">Date received: </span>{enquire.date}</Card.Text>
						</div>
					</Card.Body>
					</Card>
				);
			})}
		</div>
		</>
	);
}