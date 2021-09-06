import axios from "axios";

const link = process.env.REACT_APP_BASE_URL;

export default function useAxiosNoAuth() {
	

	const apiClient = axios.create({
		baseURL: link,
	});

	apiClient.interceptors.request.use(function (config) {
		return config;
	});

	return apiClient;
}
