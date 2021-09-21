import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../../../common/ValidationError";
import useAxios from "../../../../hooks/useAxios";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const schema = yup.object().shape({
});

export default function AddImage() {
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

		try {
			const response = await getApi.post("/wp/v2/media", data);
			console.log(response.data);
			history.push("/admin/accommodations");
		} catch (error) {
			setServerError(error.toString());
		} finally {
			setRendering(false);
		}
	}

	return (
		<>
			<Form className="add-post" onSubmit={handleSubmit(onSubmit)}>
				{serverError && <ValidationError>{serverError}</ValidationError>}
				<fieldset disabled={rendering}>
					<Form.Group className="position-relative mb-3">
						<Form.Control type="file" required name="file" isInvalid={!!errors.guid} {...register("guid")}/>
						<Form.Control.Feedback type="invalid" tooltip>
						{errors.guid && <ValidationError>{errors.guid.message}</ValidationError>}
						</Form.Control.Feedback>
         		 	</Form.Group>
					<Form.Group>
                        {rendering ? <div className="add-post__submit">Submitting your post... <Spinner className="add-post__submit-spinner" animation="border" /></div> : <Button className="add-post__submit-button button" variant="primary" type="submit">Submit</Button>}
                    </Form.Group>
				</fieldset>
			</Form>
</>
	);
}
