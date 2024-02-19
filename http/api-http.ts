"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import axios from "axios";
import { getServerSession } from "next-auth";

// create an axios instance with default configuration
const api = axios.create({
	baseURL: process.env.API_BASE_URL,
	// timeout: 5000,
	// withCredentials: true,
});

// request interceptor to add authentication token
api.interceptors.request.use(async (config) => {
	const data = await getServerSession(authOptions);
	if (data?.user.token) {
		config.headers.Authorization = `Bearer ${data.user.token}`;
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
const getApi = async (url: string, params: Object) => {
	let res = null;
	let err = null;
	try {
		const response = await api.get(url, { params });
		res = response;
	} catch (error) {
		err = error;
	}
	return { res, err };
};

const postApi = async (url: string, data: Object) => {
	let res = null;
	let err = null;
	let status = 404;
	let loading = false;
	try {
		loading = true;
		const response = await api.post(url, data);
		// if()
	} catch (error) {
		err = error;
	}
	return { res, err };
};

const postWithFileApi = async (url: string, data: any) => {
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
};

const putApi = async (url: string, data: any) => {
	try {
		const response = await api.post(url, data);
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

const putWithFileApi = async (url: string, data: any) => {
	try {
		const response = await api.put(url, JSON.stringify(data), {
			headers: {
				// 'accept': "*/*",
				"Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
			},
		});
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

const deleteApi = async (url: string) => {
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
};

export { getApi, postApi, postWithFileApi, putApi, putWithFileApi, deleteApi };
