import db_connection from "@/utils/db/connection";

export async function GET(req) {
	const client = await db_connection();
	const db = await client.db("headline_horrizon");
	const collection = await db.collection("articles");
	const all_articles = await collection.find().toArray();
	return new Response(JSON.stringify(all_articles), {
		status: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	});
}
