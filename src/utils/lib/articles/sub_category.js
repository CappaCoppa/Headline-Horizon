export default async function getSubCategoryArticles(category, sub_category) {
    try {
        const res = await fetch(
            `${process.env.API_URL}/api/articles/${category}/${sub_category}`,
            { cache: "force-cache" }
        );
        return await res.json();
    } catch (err) {
        console.log(
            `An error occured while fetching data from the server: ${err}`
        );
    }
}
