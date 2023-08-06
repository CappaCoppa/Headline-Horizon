export default async function getSubCategoryArticles(
    category,
    sub_category,
    show = "5"
) {
    try {
        const res = await fetch(
            `${
                process.env.API_URL
            }/api/articles/${category}/${sub_category}?show=${Number(show)}`,
            { cache: "force-cache" }
        );
        return await res.json();
    } catch (err) {
        console.log(
            `An error occurred while fetching data from the server: ${err}`
        );
    }
}
