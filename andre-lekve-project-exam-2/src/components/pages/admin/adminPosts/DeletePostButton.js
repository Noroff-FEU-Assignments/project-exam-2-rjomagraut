import { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import Button from 'react-bootstrap/Button';

export default function DeletePostButton({ id }) {
	const [error, setError] = useState(null);

	const getApi = useAxios();
	const history = useHistory();

	const singlePost = `/wp/v2/posts/${id}`;

	async function postDelete() {
		const verifyPostDelete = window.confirm("Are you sure you want to go to the dark side and delete this post?");

		if (verifyPostDelete) {
			try {
				await getApi.delete(singlePost);
				history.push("/admin/posts");
			} catch (error) {
				setError(error);
			}
		}
	}

	return (
		<Button className="delete-button" variant="danger" onClick={postDelete}>
			{error ? "Error" : "Delete"}
		</Button>
	);
}

DeletePostButton.propTypes = {
	id: PropTypes.number.isRequired,
};
