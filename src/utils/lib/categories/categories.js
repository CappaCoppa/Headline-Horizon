exports.getCategories = async () => {
    try {
        const res = await fetch(`${process.env.API_URL}/api/categories`, {
            cache: "force-cache",
        });
        console.log(res);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};
