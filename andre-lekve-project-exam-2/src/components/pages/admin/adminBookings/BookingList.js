import { useState, useEffect } from "react";
import useAxios from "../../../../hooks/useAxios";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner'

export default function BookingList() {
	const [bookings, setBooking] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const getApi = useAxios();

	useEffect(function () {
		async function getBookings() {
			try {
				const response = await getApi.get("wp/v2/booking");
				console.log("response", response);
				setBooking(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getBookings();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div className="spinner">Loading... <Spinner className="spinner-loader" animation="border" /></div>;
	if (error) return <div className="booking-empty__warning admin-warning">There are no bookings <i className="fas fa-exclamation-circle"></i></div>;

	return (
		<>
		<div className="booking-card">
			{bookings.map((booking) => {
				return (
					<Card className="booking-card__card">
					<Card.Body className="booking-card__body" key={booking.id}>
						<div className="booking-card__inside">
						<Card.Text><span className="booking-card__info">Name: </span>{booking.full_name}</Card.Text>
						<Card.Text><span className="booking-card__info">Address: </span>{booking.address}</Card.Text>
						<Card.Text><span className="booking-card__info">Email: </span>{booking.email}</Card.Text>
    					<Card.Text><span className="booking-card__info">Booking: </span>{booking.booking}</Card.Text>
						<Card.Text><span className="booking-card__info">Message: </span>{booking.message}</Card.Text>
						<Card.Text className="booking-card__info-date"><span className="booking-card__info-datespan">Date received: </span>{booking.date}</Card.Text>
						</div>
					</Card.Body>
					</Card>
				);
			})}
		</div>
		</>
	);
}