import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useAxiosNoAuth from "../../../hooks/useAxiosNoAuth";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Carousel from "react-bootstrap/Carousel";

export default function SingleAccommodation() {
	const [post, setPost] = useState(null);
	const [fetchingPost, setFetchingPost] = useState(true);
	const [fetchError, setFetchError] = useState(null);

	const getApi = useAxiosNoAuth();

	let { id } = useParams();

	const singleAccommodation = `wp/v2/posts/${id}`;
	const history = useHistory();

	useEffect(
		function () {
			async function getPost() {
				try {
					const response = await getApi.get(singleAccommodation);
					setPost(response.data);
				} catch (error) {
					setFetchError(error.toString());
				} finally {
					setFetchingPost(false);
				}
			}

			getPost();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	if (fetchingPost) return <div className="loading-container">Loading accommodation... <Spinner className="loading-container__spinner" animation="border" /></div>;
	if (fetchError) return <div className="loading-container__warning">Oops... Something went wrong when loading the accommodation <i className="fas fa-exclamation-circle"></i></div>;

	return (
		<>
		<Button className="back-button" onClick={() => history.goBack()}><i className="fas fa-chevron-circle-left"></i> Back</Button>
			<Card className="accommodation-container__card" key={id}>
					<Card.Body className="accommodation-container__body"key={post.id}>
						<Carousel className="accommodation-container__carousel">
						<Carousel.Item interval={5000}>
    					<img className="accommodation-container__carousel-image" key={post.id} src={post.featured_media_src_url} alt="Accommodation" />
						</Carousel.Item>
						</Carousel>
						<div className="accommodation-container__heading">
							<Card.Title className="accommodation-container__posts-title">{post.title.rendered}</Card.Title>
						<p><span className="accommodation-container__posts-info">Accommodationnr:  </span>{post.id}</p>
						</div>
						<p>{post.address}</p>
						<p>{post.hotel_info}</p>
						<p><span className="accommodation-container__posts-info">Price: </span>{post.price}</p>
						<Button className="accommodation-container__posts-button" type="submit">Book</Button>
					</Card.Body>
					</Card>
</>
	);
}
