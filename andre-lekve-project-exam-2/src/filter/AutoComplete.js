import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../hooks/useAxios";
import Dropdown from "react-bootstrap/Dropdown";
import {SearchBar} from "./SearchField";

const filterPosts = (post, request) => {
    if (!request) {
        return post;
    }

    return post.filter((post) => {
        const postTitle = post.title.rendered.toLowerCase();
        return postTitle.includes(request);
    });
};

export default function AutoComplete({ register }) {
	const [post, setMedia] = useState([]);
	const { search } = window.location;
    const request = new URLSearchParams(search).get('search');
    const [searchRequest, setSearchRequest] = useState(request || '');
	const filteredMedia = filterPosts(post, searchRequest);
	const getApi = useAxios();

	useEffect(function () {
		async function getPosts() {
			try {
				const response = await getApi.get("wp/v2/posts");
				console.log(response);
				setMedia(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		getPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	return (
		<>
		
        <Dropdown>
        <Dropdown.Toggle className="autocomplete-dropdown" id="dropdown-basic" bsPrefix="p-0">
           <SearchBar {...register("featured_media")} searchRequest={searchRequest} setSearchRequest={setSearchRequest}/>
        	</Dropdown.Toggle>
        	<Dropdown.Menu className="autocomplete-dropdown__menu">
				
          {filteredMedia.length > 0 ? (
            filteredMedia.map((post) => {
              return (
				  
					<Dropdown.Item href={`/accommodations/${post.id}`} >{post.hotel_name}</Dropdown.Item>
					  );
            })
          ) : (
            <div className="postlist-empty__warning">
              No accommodations with that name <i class="far fa-frown"></i>
            </div>
          )}
      	</Dropdown.Menu>
        </Dropdown>

		</>
		
	);
}

AutoComplete.propTypes = {
	register: PropTypes.func,
};

AutoComplete.defaultProps = {
	register: () => {},
};
