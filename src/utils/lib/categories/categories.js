export default async function getCategories() {
    try {
        const res = await fetch(`${process.env.API_URL}/api/categories`);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}
