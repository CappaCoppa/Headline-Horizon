import path from "path";
import { promises as fs } from "fs";

export async function GET(req, res) {
    try {
        // Find the absolute path of the json directory
        const jsonDirectory = path.join(process.cwd());
        // Read the json data file data.json
        const fileContents = await fs.readFile(
            path.join(jsonDirectory, "./src/utils/json/privacy.json"),
            "utf8"
        );

        // Return the content of the data file in json format
        return new Response(fileContents, {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                    "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
        });
    } catch (e) {
        return new Response(JSON.stringify(err), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                    "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
        });
    }
}
