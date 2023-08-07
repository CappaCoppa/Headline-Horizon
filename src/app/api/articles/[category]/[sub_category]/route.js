import db_connection from "@/utils/db/connection";

export async function GET(req, { params }) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const show = (await searchParams.get("show")) ?? "5";
        const subCategory = params.sub_category;
        const client = await db_connection();
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
                $sort: { date: -1 }, // Sort by date in descending order
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

        const response = {
            articles: articles,
            articlesLength: totalDocs,
        };

        return new Response(JSON.stringify(response), {
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
