exports.getArticles = async () => {
	try {
		const res = await fetch(`${process.env.API_URL}/api/articles`);
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};
