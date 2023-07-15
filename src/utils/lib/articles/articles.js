exports.getArticles = async () => {
	try {
		const res = await fetch(`${process.env.API_URL}/api/articles`, {
			cache: "force-cache",
		});

		// If the fetch request fails, throw an error
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		const data = await res.json();

		// Check if data is an array
		if (!Array.isArray(data)) {
			console.error("Data is not an array: ", data);
			return []; // Return an empty array if data is not an array
		}

		return data;
	} catch (err) {
		console.error(err); // Use console.error to log errors

		// If anything goes wrong, return an empty array to prevent map function errors
		return [];
	}
};
