import path from "path";
import { promises as fs } from "fs";

// Declare common headers
const commonHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function GET(req, res) {
    try {
        // Define the absolute path of the JSON file
        const jsonFilePath = path.join(
            __dirname,
            "./src/utils/json/terms.json"
        );

        // Read the JSON data file
        const fileContents = await fs.readFile(jsonFilePath, "utf8");

        // Return the content of the data file in JSON format
        res.status(200).set(commonHeaders).send(fileContents);
    } catch (e) {
        res.status(400).set(commonHeaders).send(JSON.stringify(e));
    }
}
