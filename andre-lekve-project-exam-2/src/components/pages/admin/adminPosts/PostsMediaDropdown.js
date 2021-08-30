import { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
		
		<NavDropdown className="postsmedia-dropdown" title="Media options" id="collasible-nav-dropdown" {...register("featured_media")}>
			<SearchBarMedia searchRequest={searchRequest} setSearchRequest={setSearchRequest}/>
			<div className="postsmedia-dropdown__empty">
          {filteredMedia.length > 0 ? (
            filteredMedia.map((media) => {
              return <div key={media.id}></div>;
            })
          ) : (
            <div className="postsmedia-dropdown__empty-warning">
              No media with that name <i class="far fa-frown"></i>
            </div>
          )}
        </div>	
			{filteredMedia.map((media) => {
				return (
					<>
					<NavDropdown.Item key={media.id} value={media.id}>
						{media.title.rendered}
					</NavDropdown.Item>
					</>
				);
			})}
		</NavDropdown>
		
	);
}

PostsMediaDropdown.propTypes = {
	register: PropTypes.func,
};

PostsMediaDropdown.defaultProps = {
	register: () => {},
};
