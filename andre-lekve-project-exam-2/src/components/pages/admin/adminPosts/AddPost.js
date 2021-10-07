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
	hotel_name: yup.string().required("Hotel name is required"),
	address: yup.string().required("Hotel address is required"),
	hotel_info: yup.string().required("Hotel information is required"),
	price: yup.string().required("Hotel price is required"),
});

export default function AddPost() {
	const [rendering, setRendering] = useState(false);
	const [serverError, setServerError] = useState(null);
	const history = useHistory();
	const getApi = useAxios();

	const { register, handleSubmit, formState: { errors } } = useForm({
	resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setServerError(null);
		setRendering(true);

		data.status = "publish";

		try {
			const response = await getApi.post("/wp/v2/posts", data);
			console.log(response.data);
			history.push("/admin/accommodations");
		} catch (error) {
			setServerError(error.toString());
		} finally {
			setRendering(false);
		}
	}

	return (
		<><AdminPage/>
			<div className="admin-post__heading">
				<Heading size="3" content="Here you can add a new accommodation." />
			</div>
			<Form className="add-post" onSubmit={handleSubmit(onSubmit)}>
				{serverError && <ValidationError>{serverError}</ValidationError>}
				<fieldset disabled={rendering}>
					<Form.Group>
						<Form.Control placeholder="Accommodation name" {...register("hotel_name")}  />
						{errors.hotel_name && <ValidationError>{errors.hotel_name.message}</ValidationError>}
					</Form.Group>

					<Form.Group>
						<Form.Control placeholder="Address" {...register("address")}  />
						{errors.address && <ValidationError>{errors.address.message}</ValidationError>}
					</Form.Group>

					<Form.Group>
						<Form.Control as="textarea" rows={2} placeholder="Information" {...register("hotel_info")}  />
						{errors.hotel_info && <ValidationError>{errors.hotel_info.message}</ValidationError>}
					</Form.Group>

					<Form.Group>
						<Form.Control placeholder="Price" {...register("price")}  />
						{errors.price && <ValidationError>{errors.price.message}</ValidationError>}
					</Form.Group>
					
					<Form.Group>
                        {rendering ? <div className="add-post__submit">Submitting your post... <Spinner className="add-post__submit-spinner" animation="border" /></div> : <Button className="add-post__submit-button button" variant="primary" type="submit">Submit</Button>}
                    </Form.Group>
				</fieldset>
			</Form>
</>
	);
}
