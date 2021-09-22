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
	hotel_name: yup.string().required("Hotel name is required"),
	address: yup.string().required("Hotel address is required"),
	hotel_info: yup.string().required("Hotel information is required"),
	price: yup.string().required("Hotel price is required"),
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
				<Heading size="2" address="Here you can edit your post" />
			</div>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<div className="update-container">
					{updated && <div className="update-container__success">The accommodation was successfully updated<i className="far fa-check-circle update-container__success-icon"></i></div>}
				</div>
				

				{updateError && <ValidationError>{updateError}</ValidationError>}

				<fieldset disabled={updatingPost}>
					<Form.Group>
                        <Form.Control defaultValue={post.hotel_name} placeholder="Accommodations name" {...register("hotel_name")}/>
                        {errors.hotel_name && <ValidationError>{errors.hotel_name.message}</ValidationError>}
                    </Form.Group>
					
					<Form.Group>
                        <Form.Control defaultValue={post.address} placeholder="Address (e.g Elsewhere 88, 1234 Bergen)" {...register("address")}/>
                        {errors.address && <ValidationError>{errors.address.message}</ValidationError>}
                    </Form.Group>

					<Form.Group>
                        <Form.Control defaultValue={post.hotel_info} placeholder="Information" {...register("hotel_info")}/>
                        {errors.hotel_info && <ValidationError>{errors.hotel_info.message}</ValidationError>}
                    </Form.Group>

					<Form.Group>
                        <Form.Control defaultValue={post.price} placeholder="Price (e.g 999kr)" {...register("price")}/>
                        {errors.price && <ValidationError>{errors.price.message}</ValidationError>}
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
