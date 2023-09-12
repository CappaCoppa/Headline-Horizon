import db_connection from "@/utils/db/connection";

const commonHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

async function fetchArticles(client, subCategory, show) {
    const db = await client.db("headline_horizon");
    const collection = await db.collection("articles");
    const totalDocs = await collection.countDocuments({
        sub_category: subCategory,
    });

    const pipeline = [
        {
            $match: { sub_category: subCategory },
        },
        {
            $sort: { date: -1 },
        },
        {
            $project: {
                _id: 1,
                category: 1,
                sub_category: 1,
                headline: 1,
                date: 1,
                image: { $arrayElemAt: ["$images", 0] },
                keyword: { $arrayElemAt: ["$keywords", 0] },
                article: { $slice: ["$article", 2] },
            },
        },
    ];

    const articles = await collection
        .aggregate(pipeline)
        .limit(Number(show))
        .toArray();

    return { articles, totalDocs };
}

export async function GET(req, { params }) {
    let responseBody = null;
    let status = 500;

    try {
        const searchParams = req.nextUrl.searchParams;
        const show = (await searchParams.get("show")) ?? "5";
        const subCategory = params.sub_category;

        const client = await db_connection();
        const { articles, totalDocs } = await fetchArticles(
            client,
            subCategory,
            show
        );

        if (articles) {
            responseBody = JSON.stringify({
                articles: articles,
                articlesLength: totalDocs,
            });
            status = 200;
        } else {
            responseBody = JSON.stringify({
                message: "No articles found",
                code: 400,
            });
            status = 400;
        }
    } catch (e) {
        console.error(e);
        responseBody = JSON.stringify(e);
        status = 500;
    }

    return new Response(responseBody, {
        status,
        headers: commonHeaders,
    });
}
