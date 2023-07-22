import db_connection from "@/utils/db/connection";

export async function GET(req, { params }) {
    try {
        const subCategory = params.sub_category;
        const client = await db_connection();
        const db = await client.db("headline_horrizon");
        const collection = await db.collection("articles");

        const pipeline = [
            {
                $match: { sub_category: subCategory },
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

        const articles = await collection.aggregate(pipeline).toArray();
        const response = JSON.stringify(articles);
        return new Response(response, {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                    "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
        });
    } catch (e) {
        console.log(e);
        return new Response(JSON.stringify(e), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                    "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
        });
    }
}
