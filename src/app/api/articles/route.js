import db_connection from "@/utils/db/connection";

export async function GET(req) {
	try {
		const client = await db_connection();
		const db = await client.db("headline_horrizon");
		const collection = await db.collection("articles");
		const all_articles = await collection.find().toArray();
		const response = JSON.stringify(all_articles);
		return new Response(response, {
			status: 200,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type, Authorization",
			},
		});
	} catch (err) {
		return new Response(JSON.stringify(err), {
			status: 400,
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		});
	}
}
