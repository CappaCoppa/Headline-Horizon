exports.getArticles = async () => {
	try {
		const res = await fetch(`${process.env.API_URL}/api/articles`, {
			next: { revalidate: 240 },
		});
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};
