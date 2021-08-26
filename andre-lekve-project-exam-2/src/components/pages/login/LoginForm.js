import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import ValidationError from "../../common/ValidationError";
import { BASE_URL, TOKEN_PATH } from "../../../api/projectExamAPI";
import Form from "react-bootstrap/Form";
import {AuthContext} from "../../../context/AuthContext";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const webpage = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
	username: yup.string().required("Please enter your email/username"),
	password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
	const [rendering, setRendering] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const history = useHistory();

	const { register, handleSubmit, formState: { errors } } = useForm({
	resolver: yupResolver(schema),
	});
	/* eslint-disable no-unused-vars */
	const [auth, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setRendering(true);
		setLoginError(null);

		try {
			const response = await axios.post(webpage, data);
			setAuth(response.data);
			history.push("/user");
		} catch (error) {
			setLoginError(error.toString());
		} finally {
			setRendering(false);
		}
	}

	return (
		<>	
             <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
				 {loginError && <ValidationError>{loginError}</ValidationError>}
				 <fieldset disabled={rendering}>
                    <Form.Group>
                        <Form.Control placeholder="Username/email..." {...register("username")}/>
                        {errors.username && <ValidationError>{errors.username.message}</ValidationError>}
                    </Form.Group>
                
                    <Form.Group>
                        <Form.Control placeholder="Password..." {...register("password")} type="password"/>
                        {errors.password && <ValidationError>{errors.password.message}</ValidationError>}
                    </Form.Group>
					
					<Form.Group>
                        {rendering ? <div className="login-form__login">Logging you in... <Spinner className="login-form__login-spinner" animation="border" /></div> : <Button className="login-form__login-button button" variant="primary" type="submit">Login</Button>}
                    </Form.Group>
					</fieldset >
                </Form>
		</>
	);
}