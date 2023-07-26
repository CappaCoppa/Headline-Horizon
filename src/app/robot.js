export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: `${process.env.API_URL}/sitemap.xml`,
    };
}
