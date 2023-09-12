import cache from "memory-cache";

export default async function getArticle(category, sub_category, id) {
    const cacheKey = `article_${category}_${sub_category}_${id}`;

    // Check if data for this article is in cache
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
        if (cachedData.error) {
            throw new Error("Cached error, please try again later");
        }
        return cachedData; // Return the cached data
    }

    try {
        const res = await fetch(
            `${process.env.API_URL}/api/articles/${category}/${sub_category}/${id}`,
            { cache: "force-cache" }
        );

        // Check if the request was successful
        if (res.ok) {
            const data = await res.json();

            // Store this data in cache for 60 seconds
            cache.put(cacheKey, data, 60000); // 60 * 1000 ms
            return data;
        } else {
            // Optionally, cache the error for a shorter period of time
            cache.put(cacheKey, { error: true }, 10000); // 10 * 1000 ms
            return null;
        }
    } catch (err) {
        // Log the error but don't cache it
        console.log(
            `An error occurred while fetching data from the server: ${err}`
        );
        throw err;
    }
}
