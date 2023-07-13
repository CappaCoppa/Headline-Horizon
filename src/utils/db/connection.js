import { MongoClient } from "mongodb";

const db_connection = async () => {
	let cachedClient = null;
	try {
		if (cachedClient) return cachedClient;
		else {
			const client = await MongoClient.connect(process.env.MONGO_URI);

			console.log("Connected to MongoDB");

			cachedClient = client;

			return client;
		}
	} catch (err) {
		console.log(err);
		return err;
	}
};

export default db_connection;
