import axios from "axios";

// create an axios instance with default configuration
const api = axios.create({
	baseURL: process.env.API_BASE_URL,
	// timeout: 5000,
	// withCredentials: true,
});

// request interceptor to add authentication token
api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
		// console.log(token)
	}
	return config;
});

// response interceptor to handle errors
api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response) {
			// server responded with a status code outside the range of 2xx
			const { data, status } = error.response;
			console.error(
				`Request failed with status ${status}. Error message: ${data.message}`
			);
		} else if (error.request) {
			// request made but no response received
			console.error("No response received from the server.");
		} else {
			// error occurred while setting up the request
			console.error(`Error message: ${error.message}`);
		}
		return Promise.reject(error);
	}
);

// API methods for making GET and POST requests
class ApiHttp {
	static async get(url: string, params: any) {
		try {
			const response = await api.get(url, { params });
			return response.data;
		} catch (error) {
			return Promise.reject(error);
		}
	}

	static async post(url: string, data: any) {
		try {
			const response = await api.post(url, data);
			return response.data;
		} catch (error) {
			return Promise.reject(error);
		}
	}

	static async post_with_file(url: string, data: any) {
		try {
			const response = await api.post(url, data, {
				headers: {
					"Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
				},
			});
			return response.data;
		} catch (error) {
			return Promise.reject(error);
		}
	}

	static async put_with_file(url: string, data: any) {
		try {
			const response = await api.put(url, JSON.stringify(data), {
				headers: {
					// 'accept': "*/*",
					"Content-Type": "application/json", // Set the content type to multipart/form-data
				},
			});
			return response.data;
		} catch (error) {
			return Promise.reject(error);
		}
	}

	static async delete(url: string) {
		try {
			const response = await api.delete(url, {
				headers: {
					// 'accept': "*/*",
					"Content-Type": "application/json", // Set the content type to multipart/form-data
				},
			});
			return response.data;
		} catch (error) {
			return Promise.reject(error);
		}
	}
}

export default ApiHttp;
