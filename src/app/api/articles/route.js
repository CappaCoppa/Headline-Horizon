import db_connection from "@/utils/db/connection";

const commonHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

async function fetchAllArticles(client) {
    const db = await client.db("headline_horizon");
    const collection = await db.collection("articles");

    const pipeline = [
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
        {
            $sort: { date: -1 }, // Sort by date in descending order
        },
    ];

    const all_articles = await collection
        .aggregate(pipeline)
        .limit(100) // Limit to 100 articles
        .toArray();

    return all_articles;
}

export async function GET() {
    let responseBody = null;
    let status = 500; // Default to internal server error status

    try {
        const client = await db_connection();
        const all_articles = await fetchAllArticles(client);

        if (all_articles.length > 0) {
            responseBody = JSON.stringify(all_articles);
            status = 200;
        } else {
            responseBody = JSON.stringify({
                message: "No articles found",
                code: 400,
            });
            status = 400;
        }
    } catch (err) {
        console.error(err);
        responseBody = JSON.stringify(err);
        status = 400;
    }

    return new Response(responseBody, {
        status,
        headers: commonHeaders,
    });
}
