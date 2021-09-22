import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ValidationError from "../../common/ValidationError";
import Heading from "../../layout/Heading";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";

const schema = yup.object().shape({
    full_name: yup.string().required("Please enter your name").min(3, "Your first name must be at least 4 characters"),
    address: yup.string().required("Please enter your address").min(2, "Your address must be at least 2 characters"),
    postal_code: yup.string().required("Please enter your postal code").min(8, "Your postal code must be at least 8 characters"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
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
			const response = await getApi.post("/wp/v2/mail/149", data); 
			console.log(response.data);

		} catch (error) {
			setServerError(error.toString());
		} finally {
			setRendering(false);
		}
	}

	return (
        <>
        <Heading content="Contact Us" />
             <Form className="enquiry-container" onSubmit={handleSubmit(onSubmit)}>
				{serverError && <ValidationError>{serverError}</ValidationError>}
				<fieldset disabled={rendering}>
                    <Form.Group>
                        <Form.Control placeholder="Full name..." {...register("full_name")} />
                        {errors.full_name && <ValidationError>{errors.full_name.message}</ValidationError>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Control placeholder="Address..." {...register("address")} />
                        {errors.address && <ValidationError>{errors.address.message}</ValidationError>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Control placeholder="Postal code (e.g 1234, Bergen)..." {...register("postal_code")} />
                        {errors.postal_code && <ValidationError>{errors.postal_code.message}</ValidationError>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Control placeholder="Email..." {...register("email")} />
                        {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
                    </Form.Group>

                
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Message..." {...register("message")} />
                        {errors.message && <ValidationError>{errors.message.message}</ValidationError>}
                    </Form.Group>

                    <Button className="button" variant="info" type="submit">
                        Submit
                    </Button>
                    </fieldset>
                </Form>
		</>
	);
}