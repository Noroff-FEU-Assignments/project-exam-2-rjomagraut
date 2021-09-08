import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Heading from "../../../layout/Heading";
import useAxios from "../../../../hooks/useAxios";
import NavDropdown from "react-bootstrap/NavDropdown";
import {SearchBarMedia} from "../../../../filter/SearchField";

const filterMedia = (media, request) => {
    if (!request) {
        return media;
    }

    return media.filter((media) => {
        const mediaTitle = media.title.rendered.toLowerCase();
        return mediaTitle.includes(request);
    });
};

export default function PostsMediaDropdown({ register }) {
	const [media, setMedia] = useState([]);
	const { search } = window.location;
    const request = new URLSearchParams(search).get('search');
    const [searchRequest, setSearchRequest] = useState(request || '');
	const filteredMedia = filterMedia(media, searchRequest);
	const getApi = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await getApi.get("wp/v2/media?per_page=100");
				console.log(response);
				setMedia(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		getMedia();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		
	<div className="accommodations-top">
		<Heading size="1" className="accommodations-heading" content="Accommodations" />
		<NavDropdown className="accommodations-dropdown" title="Media options" id="collasible-nav-dropdown" {...register("featured_media")}>
			<SearchBarMedia searchRequest={searchRequest} setSearchRequest={setSearchRequest}/>
			<div className="accommodations-dropdown__empty">
          {filteredMedia.length > 0 ? (
            filteredMedia.map((post) => {
              return <div key={post.id}></div>;
            })
          ) : (
            <div className="accommodations-empty__warning">
              There are no accommodations with that name <i className="fas fa-exclamation-circle"></i>
            </div>
          )}
        </div>	
			{filteredMedia.map((post) => {
				return (
					<>
					<NavDropdown.Item key={post.id} value={post.id}>
						{post.title.rendered}
					</NavDropdown.Item>
					</>
				);
			})}
		</NavDropdown>
		</div>
		
	);
}

PostsMediaDropdown.propTypes = {
	register: PropTypes.func,
};

PostsMediaDropdown.defaultProps = {
	register: () => {},
};
