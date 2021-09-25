import Heading from "../../layout/Heading";
import useAxiosNoAuth from "../../../hooks/useAxiosNoAuth";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';
import AutoComplete from "../../../filter/AutoComplete";

export default function AccommodationsPage() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const getApi = useAxiosNoAuth();


	useEffect(function () {
		async function getPosts() {
			try {
				const response = await getApi.get("wp/v2/posts?per_page=100");
				setPosts(response.data);
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div className="loading-container">Loading accommodations... <Spinner className="loading-container__spinner" animation="border" /></div>;
	if (error) return <div className="loading-container__warning">Oops... Something went wrong when loading the accommodations <i className="fas fa-exclamation-circle"></i></div>;
	
	return (
		<>
		<div className="accommodations-searchbar">
			<Heading size="1" className="accommodations-heading" content="Accommodations" />
			<AutoComplete />
		</div>
		<Heading size="3" className="accommodations-heading" content="Take a look through our hotels, B&Bs and guesthouses and book your vacation now." />
		<div className="accommodations-container">
          {posts.length > 0 ? (
            posts.map((post) => {
              return (
					<Link className="accommodations-container__link" to={`/accommodations/${post.id}`}>
					<Card className="accommodations-container__card">
					<Card.Body className="accommodations-container__body" key={post.id}>
						<img className="accommodations-container__image" key={post.id} src={post.featured_media_src_url} alt="Accommodation" />
						<div className="accommodations-container__posts">
						<Card.Title className="accommodations-container__posts-title">{post.hotel_name}</Card.Title>
						<p>{post.address}</p>
						<p><span className="accommodations-container__posts-info">Price: </span>{post.price}</p>
						<p><span className="accommodations-container__posts-info">Accommodationnr:  </span>{post.id}</p>
						<p className="accommodations-container__posts-infoextra">CLICK FOR MORE INFO</p>
						</div>
					</Card.Body>
					</Card>
					</Link>
				);
            })
          ) : (
            <div className="accommodations-empty__warning">
              There are no accommodations with that name <i className="fas fa-exclamation-circle"></i>
            </div>
          )}
        </div>	
		</>
	);
}