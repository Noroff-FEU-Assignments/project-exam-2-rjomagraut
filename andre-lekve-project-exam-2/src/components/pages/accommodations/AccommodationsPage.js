import Heading from "../../layout/Heading";
import useAxios from "../../../hooks/useAxios";
import { useState, useEffect } from "react";
import {SearchBar} from "../../../filter/SearchField";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';

const filterPosts = (posts, request) => {
    if (!request) {
        return posts;
    }

    return posts.filter((post) => {
        const postTitle = post.title.rendered.toLowerCase();
        return postTitle.includes(request);
    });
};

export default function AccommodationsPage() {
	const { search } = window.location;
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
    const request = new URLSearchParams(search).get('search');
    const [searchRequest, setSearchRequest] = useState(request || '');
	const filteredPosts = filterPosts(posts, searchRequest);
	const getApi = useAxios();

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
	if (error) return <div className="loading-container__warning">Oops... Something went wrong when loading the accommodations <i class="fas fa-exclamation-circle"></i></div>;

	return (
		<>
		<div className="accommodations-searchbar">
			<Heading size="1" className="accommodations-heading" content="Accommodations" />
			<SearchBar searchRequest={searchRequest} setSearchRequest={setSearchRequest}/>
		</div>
		<Heading size="3" className="accommodations-heading" content="Take a look through our hotels, B&Bs and guesthouses and book your vacation now." />
		<div className="accommodations-empty">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => {
              return <div key={post.id}></div>;
            })
          ) : (
            <div className="accommodations-empty__warning">
              There are no posts with that name <i class="fas fa-exclamation-circle"></i>
            </div>
          )}
        </div>	
		<div className="accommodations-container">
			{filteredPosts.map((post) => {
				return (
					<Card className="accommodations-container__posts" title="To edit posts go to you're admin">
					<Card.Body key={post.id}>
						<Card.Title className="accommodations-container__posts-title">{post.title.rendered}</Card.Title>
						<p>{post.excerpt.rendered}</p>
						<p><span className="accommodations-container__posts-info">Date publised: </span>{post.date}</p>
						<p><span className="accommodations-container__posts-info">Date modified: </span>{post.modified}</p>
						<p><span className="accommodations-container__posts-info">Status: </span>{post.status}</p>
					</Card.Body>
					</Card>
				);
			})}
		</div>
		</>
	);
}