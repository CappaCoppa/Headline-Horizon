import { MongoClient } from "mongodb";
console.log("This is the mongoDB connection file " + process.env.MONGO_URI);

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
