import { getArticles } from "@/utils/lib/sitemap/articles/articles";
import { getCategories } from "@/utils/lib/sitemap/categories/categories";

export default async function sitemap() {
	const articles = await getArticles();
	const categories = await getCategories();

	const allArticles = articles.map((article) => {
		const trimed = article.sub_category.trim();
		return {
			url: `${process.env.API_URL}/${article.category}/${encodeURIComponent(
				trimed
			)}/${article._id}`,
			lastModified: article.date,
		};
	});

	const allCategories = categories.map((category) => {
		return {
			url: `${process.env.API_URL}/${category.category.title}`,
			lastModified: new Date(),
		};
	});

	const allSubCategories = categories.map((category) => {
		return category.sub_category.map((sub_category) => {
			const trimed = sub_category.title.trim();
			return {
				url: `${process.env.API_URL}/${
					category.category.title
				}/${encodeURIComponent(trimed)}`,
				lastModified: new Date(),
			};
		});
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
