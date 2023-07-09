import { MongoClient } from "mongodb";

let cachedClient = null;

const db_connection = async () => {
	try {
		if (cachedClient) return cachedClient;

		const client = await MongoClient.connect(process.env.MONGO_URI);

		console.log("Connected to MongoDB");

		cachedClient = client;

		return client;
	} catch (err) {
		console.log(err);
		return err;
	}
};

export default db_connection;
