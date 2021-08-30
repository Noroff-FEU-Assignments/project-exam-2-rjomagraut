import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../../../common/ValidationError";
import useAxios from "../../../../hooks/useAxios";
import Heading from "../../../layout/Heading";
import Form from "react-bootstrap/Form";
import AdminPage from "../AdminPage";
import DeletePostButton from "./DeletePostButton";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
	content: yup.string().required("Conetnt is required"),
});

export default function EditPost() {
	const [post, setPost] = useState(null);
	const [updated, setUpdated] = useState(false);
	const [fetchingPost, setFetchingPost] = useState(true);
	const [updatingPost, setUpdatingPost] = useState(false);
	const [fetchError, setFetchError] = useState(null);
	const [updateError, setUpdateError] = useState(null);

	const { register, handleSubmit, formState: { errors } } = useForm({
	resolver: yupResolver(schema),
	});

	const getApi = useAxios();

	let { id } = useParams();

	const singlePost = `wp/v2/posts/${id}`;

	useEffect(
		function () {
			async function getPost() {
				try {
					const response = await getApi.get(singlePost);
					setPost(response.data);
				} catch (error) {
					setFetchError(error.toString());
				} finally {
					setFetchingPost(false);
				}
			}

			getPost();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	async function onSubmit(data) {
		setUpdatingPost(true);
		setUpdateError(null);
		setUpdated(false);

		console.log(data);

		try {
			const response = await getApi.put(singlePost, data);
			console.log(response.data);
			setUpdated(true);
		} catch (error) {
			setUpdateError(error.toString());
		} finally {
			setUpdatingPost(false);
		}
	}

	if (fetchingPost) return <div className="loading-container">Loading posts... <Spinner className="loading-container__spinner" animation="border" /></div>;

	if (fetchError) return <div>Sorry, couldn't load post</div>;

	return (
		<><AdminPage/>
			<div className="admin-post__heading">
				<Heading size="2" content="Here you can edit your post" />
			</div>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<div className="update-container">
					{updated && <div className="update-container__success">The post was successfully updated<i class="far fa-check-circle update-container__success-icon"></i></div>}
				</div>
				

				{updateError && <ValidationError>{updateError}</ValidationError>}

				<fieldset disabled={updatingPost}>
					<Form.Group>
                        <Form.Control defaultValue={post.title.rendered} placeholder="Title" {...register("title")}/>
                        {errors.title && <ValidationError>{errors.title.message}</ValidationError>}
                    </Form.Group>
					<Form.Group>
                        <Form.Control as="textarea" rows={1} defaultValue={post.content.rendered} placeholder="Content" {...register("content")}/>
                        {errors.content && <ValidationError>{errors.content.message}</ValidationError>}
                    </Form.Group>
					<Form.Group>
                        <ButtonGroup className="update-button__group" aria-label="Basic example">
							<Button className="update-button__group-button" variant="info" type="submit">Update</Button>
							<DeletePostButton id={post.id} />
						</ButtonGroup>	
                    </Form.Group>
				</fieldset>
			</Form>
</>
	);
}