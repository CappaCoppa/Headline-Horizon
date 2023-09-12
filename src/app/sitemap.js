import db_connection from "@/utils/db/connection";

export default async function sitemap() {
    const client = await db_connection();

    const db = await client.db("headline_horizon");
    const collection1 = await db.collection("sectionlinks");
    const collection2 = await db.collection("articles");

    const pipeline1 = [
        {
            $project: {
                _id: 0, // Exclude the _id field from the output
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
        try {
            const trimed = article.sub_category.trim();
            return {
                url: `${process.env.API_URL}/${
                    article.category
                }/${encodeURIComponent(trimed)}/${article._id}`,
                lastModified: article.date,
            };
        } catch (e) {
            console.log(e);
        }
    });

    const allCategories = categories.map((category) => {
        try {
            return {
                url: `${process.env.API_URL}/${category.category_title}`,
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
            return category.subcategory_title.map((title) => {
                const trimed = title.trim();
                return {
                    url: `${process.env.API_URL}/${
                        category.category_title
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
