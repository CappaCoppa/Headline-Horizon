import cache from "memory-cache";
import db_connection from "@/utils/db/connection";

export default async function sitemap() {
    const cacheKey = "sitemap_data";

    // Check if sitemap data is in cache
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
        return cachedData;
    }

    try {
        const client = await db_connection();
        const db = await client.db("headline_horizon");

        const collection1 = await db.collection("sectionlinks");
        const collection2 = await db.collection("articles");

        const pipeline1 = [
            {
                $project: {
                    _id: 0,
                    category_title: "$category.title",
                    subcategory_title: {
                        $map: {
                            input: "$sub_category",
                            as: "sub",
                            in: "$$sub.title",
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
                },
            },
        ];

        const categories = await collection1.aggregate(pipeline1).toArray();
        const articles = await collection2.aggregate(pipeline2).toArray();

        const allArticles = articles.map((article) => {
            const trimmed = article.sub_category.trim();
            return {
                url: `${process.env.API_URL}/${
                    article.category
                }/${encodeURIComponent(trimmed)}/${article._id}`,
                lastModified: article.date,
            };
        });

        const allCategories = categories.map((category) => ({
            url: `${process.env.API_URL}/${category.category_title}`,
            lastModified: new Date(),
        }));

        const allSubCategories = categories.flatMap((category) =>
            category.subcategory_title.map((title) => {
                const trimmed = title.trim();
                return {
                    url: `${process.env.API_URL}/${
                        category.category_title
                    }/${encodeURIComponent(trimmed)}`,
                    lastModified: new Date(),
                };
            })
        );

        const sitemapData = [
            {
                url: `${process.env.API_URL}`,
                lastModified: new Date(),
            },
            ...allCategories,
            ...allSubCategories,
            ...allArticles,
        ];

        // Cache the sitemap data for 60 minutes (3600000 milliseconds)
        cache.put(cacheKey, sitemapData, 3600000);

        return sitemapData;
    } catch (e) {
        console.error(`An error occurred while generating the sitemap: ${e}`);
        throw e;
    }
}
