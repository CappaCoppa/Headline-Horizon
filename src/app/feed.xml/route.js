import { getArticles } from "@/utils/lib/articles/articles";
import RSS from "rss";

export async function GET() {
	try {
		const articles = await getArticles();

		const feed = new RSS({
			title: "Headline Horizon",
			description:
				"Headline Horizon is a news aggregator that provides you with the latest news from the world's leading newspapers.",
			site_url: `${process.env.API_URL}`,
			feed_url: `${process.env.API_URL}/api/feed.xml`,
			copyright: `${new Date().getFullYear()} Headline Horizon`,
			language: "en",
			pubDate: new Date(),
		});

		articles.forEach((article) => {
			const trimed = article.sub_category.trim();
			feed.item({
				title: article.headline,
				guid: `${process.env.API_URL}/${article.category}/${encodeURIComponent(
					trimed
				)}/${article._id}`,
				url: `${process.env.API_URL}/${article.category}/${encodeURIComponent(
					trimed
				)}/${article._id}`,
				date: article.date,
				description: article.sub_headline,
				categories: [article.category, article.sub_category],
				language: "en",
			});
		});

		return new Response(feed.xml(), {
			headers: {
				"Content-Type": "application/atom+xml; charset=utf-8",
			},
		});
	} catch (err) {
		console.log(err);
		return new Response(err, {
			status: 500,
		});
	}
}
