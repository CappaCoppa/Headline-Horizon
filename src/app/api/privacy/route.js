import path from "path";
import { promises as fs } from "fs";

// Common headers
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
            process.cwd(),
            "./src/utils/json/privacy.json"
        );

        // Read the JSON data file
        const fileContents = await fs.readFile(jsonFilePath, "utf8");

        // Return the content of the data file in JSON format
        return new Response(fileContents, {
            status: 200,
            headers: commonHeaders,
        });
    } catch (e) {
        return new Response(JSON.stringify(e), {
            status: 400,
            headers: commonHeaders,
        });
    }
}
