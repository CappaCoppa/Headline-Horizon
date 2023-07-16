import { MongoClient } from "mongodb";

let cachedClient = null;

const db_connection = async () => {
	try {
		if (cachedClient && cachedClient.isConnected()) {
			console.log("Using cached MongoDB client");
			return cachedClient;
		} else {
			const client = await MongoClient.connect(process.env.MONGO_URI, {
				poolSize: 10, // sets the number of connections in the pool default is 5
			});
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
