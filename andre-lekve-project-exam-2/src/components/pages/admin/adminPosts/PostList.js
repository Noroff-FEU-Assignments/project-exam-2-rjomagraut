import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "../../../../hooks/useAxios";
import {SearchBar} from "../../../../filter/SearchField";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner'

const filterPosts = (posts, request) => {
    if (!request) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.title.rendered.toLowerCase();
        return postName.includes(request);
    });
};

export default function PostList() {
	const { search } = window.location;
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
    const request = new URLSearchParams(search).get('search');
    const [searchRequest, setSearchRequest] = useState(request || '');
	const filteredPosts = filterPosts(posts, searchRequest);
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

	if (error) return <div className="postlist-empty__warning">Couldn't find any posts <i className="fas fa-exclamation-circle"></i></div>;

	return (
<>
		<div className="searchbar-admin">
			<SearchBar searchRequest={searchRequest} setSearchRequest={setSearchRequest}/>
		</div>	
		<div className="new-post">
			<Link eventKey="first" to="/admin/posts/add">Add a new post <i className="fas fa-plus"></i></Link>
		</div>
		<div className="postlist-empty">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => {
              return <div key={post.id}></div>;
            })
          ) : (
            <div className="postlist-empty__warning">
              There are no posts with that name <i className="fas fa-exclamation-circle"></i>
            </div>
          )}
        </div>	
		<div className="admin-card">
			{filteredPosts.map((post) => {
				return (
					<Link className="admin-card__link" to={`/admin/posts/edit/${post.id}`}>
					<Card title="Click to edit or delete post" className="admin-card__card">
					<Card.Body className="admin-card__body" key={post.id}>
						<div className="admin-card__inside">
						<Card.Title className="admin-card__title">{post.title.rendered}</Card.Title>
						<Card.Text dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
						<Card.Text>{post.slug}</Card.Text>
						<Card.Text>Price{post.price_field}</Card.Text>
						</div>
					</Card.Body>
					</Card>
					</Link>
				);
			})}
		</div>
		</>
	);
}