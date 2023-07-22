import db_connection from "@/utils/db/connection";

export async function GET() {
    try {
        const client = await db_connection();
        const db = await client.db("headline_horrizon");
        const collection = await db.collection("sectionlinks");

        const pipeline = [
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

        const result = await collection.aggregate(pipeline).toArray();

        const response = JSON.stringify(result);

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
