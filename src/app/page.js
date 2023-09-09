export default async function Home() {
    try {
        const objectsArray = await getArticles();
        const reversedArray = objectsArray.reverse();
        return <main>hello</main>;
    } catch (err) {
        console.log(err);
    }
}
