import { useState, useEffect } from "react";
import useAxiosNoAuth from "../../../hooks/useAxiosNoAuth";

export default function FeaturedMedia() {
	const [media, setMedia] = useState([]);
	const getApi = useAxiosNoAuth();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await getApi.get("wp/v2/media");
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
		
	<>
			{media.map((post) => {
				return (

                    <img className="featured-media__image" key={post.post} value={post.id} src={post.source_url} alt="Bryggen in Bergen" title="Bryggen in Bergen"></img>
				
				);
			})}

		</>
		
	);
}
