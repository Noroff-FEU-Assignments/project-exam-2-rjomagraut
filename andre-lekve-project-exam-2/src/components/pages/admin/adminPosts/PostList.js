import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "../../../../hooks/useAxios";
import AutoComplete from "../../../../filter/AutoComplete";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

export default function PostList() {

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const getApi = useAxios();



	useEffect(function () {
		async function getMedia() {
			try {
				const response = await getApi.get("wp/v2/posts?per_page=100");
				console.log("response", response);
				setPosts(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getMedia();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div className="spinner">Loading... <Spinner className="spinner-loader" animation="border" /></div>;

	if (error) return <div className="postlist-empty__warning">Couldn't find any accommodations <i className="fas fa-exclamation-circle"></i></div>;

	return (
<>
		<div className="adminsearch-container">
			<AutoComplete />
			<Button className="adminsearch-container__button"><Link eventkey="first" to="/admin/accommodations/add">Add a new accommodation <i className="fas fa-plus"></i></Link></Button>
		</div>
		<div className="admin-card">
          {posts.length > 0 ? (
            posts.map((post) => {
              return (
					<Link className="admin-card__link" to={`/admin/accommodations/edit/${post.id}`}>
					<Card title="Click to edit or delete post" className="admin-card__card">
					<Card.Body className="admin-card__body" key={post.id}>
						<div className="admin-card__inside">
							<img className="admin-card__image" key={post.id} src={post.featured_media_src_url} alt="Accommodation" />
						<Card.Title className="admin-card__title">{post.hotel_name}</Card.Title>
						<Card.Text><span className="admin-card__info">Accommodationnr: </span>{post.id}</Card.Text>
						</div>
					</Card.Body>
					</Card>
					</Link>
			  );	
			})
          ) : (
            <div className="postlist-empty__warning">
              There are no accommodations with that name <i className="fas fa-exclamation-circle"></i>
            </div>
          )}
        </div>	
		</>
	);
}