import db_connection from "@/utils/db/connection";

export async function GET() {
    try {
        const client = await db_connection();
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
        ];

        const all_articles = await collection
            .aggregate(pipeline)
            .limit(50)
            .toArray(); // Limiting to 50 articles here
        const response = JSON.stringify(all_articles);

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
    } catch (err) {
        return new Response(JSON.stringify(err), {
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
