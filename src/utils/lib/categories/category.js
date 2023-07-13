exports.getCategory = async (category) => {
	try {
		const res = await fetch(
			`${process.env.API_URL}/api/categories/${category}`,
			{
				cache: "force-cache",
			}
		);
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};
