import db_connection from "@/utils/db/connection";

export async function GET(req, { params }) {
	try {
		console.log("First Console =>>>>>>>>>>>>>>>>>>>>.");
		const subCategory = await params.sub_category;
		const client = await db_connection();
		const db = await client.db("headline_horrizon");
		const collection = await db.collection("articles");
		const articles = await collection
			.find({ sub_category: subCategory })
			.toArray();
		const response = JSON.stringify(articles);
		console.log("Second console =>>>>>>>>>>>>>>> " + response);
		return new Response(response, {
			status: 200,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type, Authorization",
			},
		});
	} catch (e) {
		console.log(e);
		return new Response(JSON.stringify(e), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type, Authorization",
			},
		});
	}
}
