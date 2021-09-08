import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosNoAuth from "../../../hooks/useAxiosNoAuth";
import FeaturedMedia from "./FeaturedMedia";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';


export default function SingleAccommodation() {
	const [post, setPost] = useState(null);
	const [fetchingPost, setFetchingPost] = useState(true);
	const [fetchError, setFetchError] = useState(null);

	const getApi = useAxiosNoAuth();

	let { id } = useParams();

	const singleAccommodation = `wp/v2/posts/${id}`;

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
			<Card className="accommodations-container__card">
					<Card.Body className="accommodations-container__body"key={post.id}>
						<FeaturedMedia className="accommodations-container__image" key={post.id} id={post.featured_media} />
						<div className="accommodations-container__posts">
						<Card.Title className="accommodations-container__posts-title">{post.title.rendered}</Card.Title>
						<p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
						<p><span className="accommodations-container__posts-info">Price: </span>{post.tags}</p>
						<p><span className="accommodations-container__posts-info">Rating:  </span>{post.status}</p>
						</div>
					</Card.Body>
					</Card>
</>
	);
}
