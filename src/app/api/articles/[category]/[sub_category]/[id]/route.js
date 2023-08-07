import db_connection from "@/utils/db/connection";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    try {
        const client = await db_connection();
        const db = await client.db("headline_horizon");
        const collection = await db.collection("articles");
        const article = await collection.findOne({
            _id: Number(params.id),
        });
        const response = JSON.stringify(article);
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
        return new Response(JSON.stringify(e), {
            status: 500,
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
