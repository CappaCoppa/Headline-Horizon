exports.getSubCategoryArticles = async (sub_category) => {
	try {
		const res = await fetch(
			`${process.env.API_URL}/api/articles/${sub_category}`,
			{
				next: { revalidate: 240 },
			}
		);
		return await res.json();
	} catch (err) {
		console.log(`An error occured while fetching data from the server: ${err}`);
	}
};
