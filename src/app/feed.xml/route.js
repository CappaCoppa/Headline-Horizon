import RSS from "rss";
import db_connection from "@/utils/db/connection";

// Fetches categories and articles from the database
const fetchFromDatabase = async () => {
    const client = await db_connection();
    const db = await client.db("headline_horizon");

    // Define pipelines for each collection
    const pipeline1 = [
        {
            $project: {
                _id: 0,
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

    // Fetch categories and articles
    const categories = await db
        .collection("sectionlinks")
        .aggregate(pipeline1)
        .toArray();
    const articles = await db
        .collection("articles")
        .aggregate(pipeline2)
        .toArray();

    return { categories, articles };
};

// Helper function to add items to RSS feed
const addItemToFeed = (feed, item, currentYear) => {
    feed.item({
        title: item.title,
        guid: item.guid,
        url: item.url,
        description: item.description || item.sub_headline,
        categories: item.categories,
        language: "en",
        copyright: `${currentYear} Headline Horizon`,
    });
};

export async function GET() {
    const { categories, articles } = await fetchFromDatabase();
    const currentYear = new Date().getFullYear();

    const feed = new RSS({
        // existing initialization code
        title: "U.S. News - In-depth American Analysis | Headline Horizon",
        // ... other feed details
    });

    // Add articles to feed
    articles.forEach((article) => {
        addItemToFeed(
            feed,
            {
                title: article.headline,
                guid: `https://headlinehorizon.com/${encodeURIComponent(
                    article.category
                )}/${encodeURIComponent(article.sub_category)}/${article._id}`,
                url: `https://headlinehorizon.com/${encodeURIComponent(
                    article.category
                )}/${encodeURIComponent(article.sub_category)}/${article._id}`,
                sub_headline: article.sub_headline,
                categories: [article.category, article.sub_category],
            },
            currentYear
        );
    });

    // Add categories and subcategories to feed
    categories.forEach((category) => {
        addItemToFeed(
            feed,
            {
                title: category.title,
                guid: `https://headlinehorizon.com/${encodeURIComponent(
                    category.title
                )}`,
                url: `https://headlinehorizon.com/${encodeURIComponent(
                    category.title
                )}`,
                description: category.description,
            },
            currentYear
        );

        category.subcategories.forEach((subcategory) => {
            addItemToFeed(
                feed,
                {
                    title: subcategory.title,
                    guid: `https://headlinehorizon.com/${encodeURIComponent(
                        category.title
                    )}/${encodeURIComponent(subcategory.title)}`,
                    url: `https://headlinehorizon.com/${encodeURIComponent(
                        category.title
                    )}/${encodeURIComponent(subcategory.title)}`,
                    description: subcategory.description,
                },
                currentYear
            );
        });
    });

    return new Response(feed.xml(), {
        "Content-Type": "application/xml; charset=utf-8",
    });
}
