import db_connection from "@/utils/db/connection";

const commonHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function GET(req, { params }) {
    let responseBody = null;
    let status = 500; // Default to 500 in case of an exception

    try {
        const client = await db_connection();
        const db = await client.db("headline_horizon");
        const collection = await db.collection("articles");
        const article = await collection.findOne({
            _id: Number(params.id),
        });

        if (article) {
            responseBody = JSON.stringify(article);
            status = 200;
        } else {
            responseBody = JSON.stringify({
                message: "Article not found",
                code: 400,
            });
            status = 400;
        }
    } catch (e) {
        responseBody = JSON.stringify(e);
        status = 500;
    }

    return new Response(responseBody, {
        status,
        headers: commonHeaders,
    });
}
