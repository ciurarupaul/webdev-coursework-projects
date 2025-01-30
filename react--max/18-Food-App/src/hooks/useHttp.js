import { useState, useEffect, useCallback } from "react";

async function sendHttpRequest(url, config) {
	const response = await fetch(url, config);
	const resData = await response.json();

	if (!response.ok) {
		throw new Error(
			resData.message || "Somwthing went wrong, please try again!"
		);
	}

	return resData;
}

export default function useHttp(url, config, initialData) {
	const [data, setData] = useState(initialData);
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);

	function clearData() {
		setData(initialData);
	}

	const sendRequest = useCallback(
		async function sendRequest(data) {
			try {
				const resData = await sendHttpRequest(url, {
					...config,
					body: data,
				});
				setData(resData);
			} catch (error) {
				setError(error.message || "Something went wrong!");
			}
			setIsLoading(false);
		},
		[url, config]
	);

	useEffect(() => {
		if (
			(config && (config.method === "GET" || !config.method)) ||
			!config
		) {
			sendRequest();
		}
	}, [sendRequest, config]);

	return {
		data,
		isLoading,
		error,
		sendRequest,
		clearData,
	};
}
