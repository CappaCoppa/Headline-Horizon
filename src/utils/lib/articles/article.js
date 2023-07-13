exports.getArticle = async (category, sub_category, id) => {
	try {
		const res = await fetch(
			`${process.env.API_URL}/api/articles/${category}/${sub_category}/${id}`,
			{ cache: "force-cache" }
		);
		return await res.json();
	} catch (err) {
		console.log(`An error occured while fetching data from the server: ${err}`);
	}
};
