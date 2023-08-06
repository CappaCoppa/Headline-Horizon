export default async function getArticles() {
    try {
        const res = await fetch(`${process.env.API_URL}/api/articles`, {
            cache: "no-cache",
        });
        const data = await res.json();

        return data;
    } catch (err) {
        console.error(err);
    }
}
