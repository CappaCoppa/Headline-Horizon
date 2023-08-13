import RSS from "rss";
import db_connection from "@/utils/db/connection";

const gettingData = async () => {
    const client = await db_connection();

    const db = await client.db("headline_horizon");
    const collection1 = await db.collection("sectionlinks");
    const collection2 = await db.collection("articles");

    const pipeline1 = [
        {
            $project: {
                _id: 0, // Exclude the _id field from the output
                title: "$category.title",
                description: "$category.description",
                subcategories: {
                    $map: {
                        input: "$sub_category",
                        as: "sub",
                        in: {
                            title: "$$sub.title",
                            description: "$$sub.description",
                        },
                    },
                },
            },
        },
    ];

    const pipeline2 = [
        {
            $project: {
                _id: 1,
                category: 1,
                sub_category: 1,
                headline: 1,
                date: 1,
                image: { $arrayElemAt: ["$images", 0] },
                article: { $arrayElemAt: ["$article", 0] },
            },
        },
    ];

    const categories = await collection1.aggregate(pipeline1).toArray();
    const articles = await collection2.aggregate(pipeline2).toArray();

    return { categories, articles };
};

export async function GET() {
    const { categories, articles } = await gettingData();

    const feed = new RSS({
        title: "U.S. News - In-depth American Analysis | Headline Horizon",
        description:
            "Headline Horizon: Your gateway to the latest U.S. news, stories, and updates. Dive deep into America's pulse with trusted reporting and in-depth analysis. Stay informed, stay ahead!",
        site_url: "https://headlinehorizon.com",
        feed_url: "https://headlinehorizon.com/feed.xml",
        copyright: `${new Date().getFullYear()} Headline Horizon`,
        language: "en",
        pubDate: new Date(),
    });

    articles.forEach((article) => {
        feed.item({
            title: article.headline,
            guid: `https://headlinehorizon.com/${encodeURIComponent(
                article.category
            )}/${encodeURIComponent(article.sub_category)}/${article._id}`,
            url: `https://headlinehorizon.com/${encodeURIComponent(
                article.category
            )}/${encodeURIComponent(article.sub_category)}/${article._id}`,
            description: article.sub_headline,
            categories: [article.category, article.sub_category],
            language: "en",
            copyright: `${new Date().getFullYear()} Headline Horizon`,
        });
    });

    categories.forEach((category) => {
        feed.item({
            title: category.title,
            guid: `https://headlinehorizon.com/${encodeURIComponent(
                category.title
            )}`,
            url: `https://headlinehorizon.com/${encodeURIComponent(
                category.title
            )}`,
            description: category.description,
            language: "en",
            copyright: `${new Date().getFullYear()} Headline Horizon`,
        });

        category.subcategories.forEach((subcategory) => {
            feed.item({
                title: subcategory.title,
                guid: `https://headlinehorizon.com/${encodeURIComponent(
                    category.title
                )}/${encodeURIComponent(subcategory.title)}`,
                url: `https://headlinehorizon.com/${encodeURIComponent(
                    category.title
                )}/${encodeURIComponent(subcategory.title)}`,
                description: subcategory.description,
                language: "en",
                copyright: `${new Date().getFullYear()} Headline Horizon`,
            });
        });
    });

    return new Response(feed.xml(), {
        "Content-Type": "application/xml; charset=utf-8",
    });
}
