import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useAxiosNoAuth from "../../../hooks/useAxiosNoAuth";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

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
		<Button className="back-button" onClick={() => history.goBack()}><i class="fas fa-chevron-circle-left"></i> Back</Button>
			<Card className="accommodation-container__card">
					<Card.Body className="accommodation-container__body"key={post.id}>
						<img className="accommodation-container__image" key={post.id} src={post.featured_media_src_url} alt="Accommodation" />
						<div className="accommodation-container__heading">
							<Card.Title className="accommodation-container__posts-title">{post.title.rendered}</Card.Title>
						<p><span className="accommodation-container__posts-info">Accommodationnr:  </span>{post.id}</p>
						</div>
						<p dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
						<p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
						<p><span className="accommodation-container__posts-info">Price: </span>{post.slug}</p>
						<Button className="accommodation-container__posts-button" type="submit">Book</Button>
					</Card.Body>
					</Card>
</>
	);
}
