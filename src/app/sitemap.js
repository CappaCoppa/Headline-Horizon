const fetchCategories = async () => {
	try {
		const res = await fetch(`${process.env.API_URL}/api/categories`, {
			cache: "force-cache",
		});
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};

const fetchArticles = async () => {
	try {
		const res = await fetch(`${process.env.API_URL}/api/articles`, {
			cache: "force-cache",
		});
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};

export default async function sitemap() {
	const categories = await fetchCategories();
	const articles = await fetchArticles();
	const allArticles = articles.map((article) => {
		console.log(article + " <++++++++++++++++++");
		try {
			const trimed = article.sub_category.trim();
			return {
				url: `${process.env.API_URL}/${article.category}/${encodeURIComponent(
					trimed
				)}/${article._id}`,
				lastModified: article.date,
			};
		} catch (e) {
			console.log(e);
			console.log(article);
		}
	});

	const allCategories = categories.map((category) => {
		try {
			return {
				url: `${process.env.API_URL}/${category.category.title}`,
				lastModified: new Date(),
			};
		} catch (e) {
			console.log(
				"this is the error for allCategories <++++++++++++++++= " + e
			);
		}
	});

	const allSubCategories = categories.map((category) => {
		try {
			return category.sub_category.map((sub_category) => {
				const trimed = sub_category.title.trim();
				return {
					url: `${process.env.API_URL}/${
						category.category.title
					}/${encodeURIComponent(trimed)}`,
					lastModified: new Date(),
				};
			});
		} catch (e) {
			console.log(`this is the thired console.log for and error: ${e}`);
		}
	});

	return [
		{
			url: `${process.env.API_URL}`,
			lastModified: new Date(),
		},
		...allCategories,
		...allSubCategories.flat(1),
		...allArticles,
	];
}
