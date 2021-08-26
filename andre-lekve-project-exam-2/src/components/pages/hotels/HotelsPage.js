import Heading from "../../layout/Heading";
import useAxios from "../../../hooks/axios";
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

export default function HotelsPage() {
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

	if (loading) return <div className="loading-container">Loading posts... <Spinner className="loading-container__spinner" animation="border" /></div>;
	if (error) return <><h1 className="error-h1">{"Welcome to WIKI-SW"}</h1>
						<h2 className="error-h2">{"You need to login to see the posts."}</h2>
						<p className="error-text">{'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn\
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}</p>
					<div className="error-imagecontainer"><img className="error-imagecontainer__image" src="https://live.staticflickr.com/2465/3951143570_20b4eccd3f_b.jpg" alt="The droids we're googling for by DocChewbacca is licensed under CC BY-NC-SA 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/2.0/" title="The droids we're googling for"></img><p className="error-imagecontainer__text">{"The droids we're googling for by DocChewbacca is licensed under CC BY-NC-SA 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/2.0/"}</p></div></>;

	return (
		<>
		<div className="homepage-searchbar">
			<Heading size="1" className="homepage-heading" content="Welcome to WIKI-SW" />
			<SearchBar searchRequest={searchRequest} setSearchRequest={setSearchRequest}/>
		</div>
		<Heading size="2" className="homepage-heading" content="To edit posts go to you're userpage." />
		<div className="homepage-empty">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => {
              return <div key={post.id}></div>;
            })
          ) : (
            <div className="homepage-empty__warning">
              There are no posts with that name <i class="far fa-frown"></i>
            </div>
          )}
        </div>	
		<div className="homepage-container">
			{filteredPosts.map((post) => {
				return (
					<Card className="homepage-container__posts" title="To edit posts go to you're userpage">
					<Card.Body key={post.id}>
						<Card.Title className="homepage-container__posts-title">{post.title.rendered}</Card.Title>
						<p>{post.excerpt.rendered}</p>
						<p><span className="homepage-container__posts-info">Date publised: </span>{post.date}</p>
						<p><span className="homepage-container__posts-info">Date modified: </span>{post.modified}</p>
						<p><span className="homepage-container__posts-info">Status: </span>{post.status}</p>
					</Card.Body>
					</Card>
				);
			})}
		</div>
		</>
	);
}