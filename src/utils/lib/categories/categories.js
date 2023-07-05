exports.getCategories = async () => {
	try {
		const res = await fetch(`${process.env.API_URL}/api/categories`);
		return await res.json();
	} catch (e) {
		console.log(e);
	}
};
