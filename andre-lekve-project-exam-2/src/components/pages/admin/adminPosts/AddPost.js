import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../../../common/ValidationError";
import useAxios from "../../../../hooks/useAxios";
import Heading from "../../../layout/Heading";
import Form from "react-bootstrap/Form";
import AdminPage from "../AdminPage";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
	content: yup.string().required("Content is required"),
});

export default function AddPost() {
	const [rendering, setRendering] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useHistory();
	const getApi = useAxios();

	const { register, handleChange, handleSubmit, formState: { errors } } = useForm({
	resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setServerError(null);
		setRendering(true);

		data.status = "publish";

		try {
			const response = await getApi.post("/wp/v2/posts", data);
			console.log(response.data);
			history.push("/admin/posts");
		} catch (error) {
			setServerError(error.toString());
		} finally {
			setRendering(false);
		}
	}

	return (
		<><AdminPage/>
			<div className="admin-post__heading">
				<Heading size="2" content="Here you can add a new post" />
			</div>
			<Form className="add-post" onSubmit={handleSubmit(onSubmit)}>
				{serverError && <ValidationError>{serverError}</ValidationError>}
				<fieldset disabled={rendering}>
					{/* <Form.Group className="position-relative mb-3">
						<Form.Control type="file" required name="file" onChange={handleChange} isInvalid={!!errors.featured_media_src_url} {...register("featured_media_src_url")}/>
						<Form.Control.Feedback type="invalid" tooltip>
						{errors.featured_media_src_url && <ValidationError>{errors.featured_media_src_url.message}</ValidationError>}
						</Form.Control.Feedback>
         		 	</Form.Group> */}
			
					<Form.Group>
						<Form.Control placeholder="Title" {...register("title")}  />
						{errors.title && <ValidationError>{errors.title.message}</ValidationError>}
					</Form.Group>

					<Form.Group>
						<Form.Control as="textarea" rows={1} placeholder="Content" {...register("content")}  />
						{errors.content && <ValidationError>{errors.content.message}</ValidationError>}
					</Form.Group>

					<Form.Group>
						<Form.Control as="textarea" rows={1} placeholder="Price" {...register("slug")}  />
						{errors.slug && <ValidationError>{errors.slug.message}</ValidationError>}
					</Form.Group>

					{/* <Form.Group>
						<Form.Control as="textarea" rows={1} placeholder="Rating" {...register("template")}  />
						{errors.template && <ValidationError>{errors.template.message}</ValidationError>}
					</Form.Group> */}

					<Form.Group>
                        {rendering ? <div className="add-post__submit">Submitting your post... <Spinner className="add-post__submit-spinner" animation="border" /></div> : <Button className="add-post__submit-button button" variant="primary" type="submit">Submit</Button>}
                    </Form.Group>
				</fieldset>
			</Form>
</>
	);
}
