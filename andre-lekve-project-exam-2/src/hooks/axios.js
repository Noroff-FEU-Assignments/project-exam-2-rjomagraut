import { useContext } from "react";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

const link = process.env.REACT_APP_BASE_URL;

export default function useAxios() {
	const [auth] = useContext(AuthContext);

	const apiClient = axios.create({
		baseURL: link,
	});

	apiClient.interceptors.request.use(function (config) {
		const token = auth.token;
		config.headers.Authorization = token ? `Bearer ${token}` : "";
		return config;
	});

	return apiClient;
}
