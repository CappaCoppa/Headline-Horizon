import { getArticles } from "@/utils/lib/articles/articles";
import { getCategories } from "@/utils/lib/categories/categories";

export default async function sitemap() {
    const categories = await getCategories();
    const articles = await getArticles();

    const allArticles = articles.map((article) => {
        try {
            const trimed = article.sub_category.trim();
            return {
                url: `${process.env.API_URL}/${
                    article.category
                }/${encodeURIComponent(trimed)}/${article._id}`,
                lastModified: article.date,
            };
        } catch (e) {
            console.log(e);
        }
    });

    const allCategories = categories.map((category) => {
        try {
            return {
                url: `${process.env.API_URL}/${category.category_title}`,
                lastModified: new Date(),
            };
        } catch (e) {
            console.log(
                "this is the error for allCategories <++++++++++++++++= " + e
            );
        }
    });

    const allSubCategories = categories.map((category) => {
        try {
            return category.subcategory_title.map((title) => {
                const trimed = title.trim();
                return {
                    url: `${process.env.API_URL}/${
                        category.category_title
                    }/${encodeURIComponent(trimed)}`,
                    lastModified: new Date(),
                };
            });
        } catch (e) {
            console.log(`this is the thired console.log for and error: ${e}`);
        }
    });

    return [
        {
            url: `${process.env.API_URL}`,
            lastModified: new Date(),
        },
        ...allCategories,
        ...allSubCategories.flat(1),
        ...allArticles,
    ];
}
