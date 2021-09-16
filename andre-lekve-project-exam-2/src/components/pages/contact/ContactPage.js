import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ValidationError from "../../common/ValidationError";
import Heading from "../../layout/Heading";

const schema = yup.object().shape({
    name: yup.string().required("Please enter your name").min(3, "Your first name must be at least 4 characters"),
    address: yup.string().required("Please enter your address").min(2, "Your address must be at least 2 characters"),
    postalCode: yup.string().required("Please enter your postal code").min(8, "Your postal code must be at least 8 characters"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

export default function ContactForm() {
	const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

	return (
        <>
        <Heading content="Contact Us" />
             <Form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Control placeholder="Full name..." {...register("name")} />
                        {errors.name && <ValidationError>{errors.name.message}</ValidationError>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Control placeholder="Address..." {...register("address")} />
                        {errors.address && <ValidationError>{errors.address.message}</ValidationError>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Control placeholder="Postal code (e.g 1234, Bergen)..." {...register("postalCode")} />
                        {errors.postalCode && <ValidationError>{errors.postalCode.message}</ValidationError>}
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
                </Form>
		</>
	);
}