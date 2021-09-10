import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ValidationError from "../../common/ValidationError";
import useAxios from "../../../hooks/useAxios";
import Spinner from 'react-bootstrap/Spinner';

const schema = yup.object().shape({
    author_name: yup.string().required("Please enter your name").min(3, "Your first name must be at least 4 characters"),
    author_email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    content: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});
  
export default function EnquireModal() {
	const [rendering, setRendering] = useState(false);
	const [serverError, setServerError] = useState(null);

	const getApi = useAxios();

	const { register, handleSubmit, formState: { errors } } = useForm({
	resolver: yupResolver(schema),
	});
	
	async function onSubmit(data) {
		setServerError(null);
		setRendering(true);

		try {
			const response = await getApi.post("/wp/v2/pages/40", data); 
			console.log(response.data);

		} catch (error) {
			setServerError(error.toString());
		} finally {
			setRendering(false);
		}
	}
// "/contact-form-7/v1/contact-forms/20/feedback"
	return (
        <>
             <Form className="enquiry-container" onSubmit={handleSubmit(onSubmit)}>
				{serverError && <ValidationError>{serverError}</ValidationError>}
				<fieldset disabled={rendering}>
					<Form.Group>
                        <Form.Control type="hidden" {...register("post")} />
                    </Form.Group>

					<Form.Group>
                        <Form.Control placeholder="Full name..." {...register("author_name")} />
                        {errors.author_name && <ValidationError>{errors.author_name.message}</ValidationError>}
                    </Form.Group>
	
                    <Form.Group>
                        <Form.Control placeholder="Email..." {...register("author_email")} />
                        {errors.author_email && <ValidationError>{errors.author_email.message}</ValidationError>}
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Message..." {...register("content")} />
                        {errors.content && <ValidationError>{errors.content.message}</ValidationError>}
                    </Form.Group>

                    <Form.Group>
                        {rendering ? <div className="enquiry-container__submit">Enquiry on the way... <Spinner className="enquiry-container__submit-spinner" animation="border" /></div> : <Button className="enquiry-container__submit-button  button" variant="primary" type="submit">Send</Button>}
                    </Form.Group>
				</fieldset>
                </Form>
		</>
	);
}
