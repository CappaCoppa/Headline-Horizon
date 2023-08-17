export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${process.env.API_URL}/sitemap.xml`,
    };
}
