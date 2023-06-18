import { MongoClient } from "mongodb";

const db_connection = async () => {
	try {
		const client = await MongoClient.connect(process.env.MONGO_URI);
		console.log("Connected to MongoDB");
		return client;
	} catch (err) {
		console.log(err);
		return err;
	}
};

export default db_connection;
