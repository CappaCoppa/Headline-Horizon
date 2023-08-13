import getSubCategoryArticles from "@/utils/lib/articles/sub_category";
import getCategory from "@/utils/lib/categories/category";
import Link from "next/link";
import Image from "next/image";

export default async function Category({ params }) {
    const title = params.category;
    const category = await getCategory(title);
    const mappedContent = category.sub_category.map(
        async (sub_category, index) => {
            const { articles, articlesLength } = await getSubCategoryArticles(
                title,
                sub_category.title
            );

            if (index % 3 === 0) {
                const slicedArticles = articles.slice(0, 3);
                const mappedArticles = slicedArticles.map((article, index) => {
                    return (
                        <div
                            className=" flex flex-col justify-between cursor-pointer transition ease-in-out hover:bg-black-10 p-8 "
                            key={index}
                        >
                            <Link
                                href={`${article.category}/${article.sub_category}/${article._id}`}
                            >
                                <Image
                                    width={1000}
                                    height={600}
                                    src={article.image.image_url}
                                    alt={article.image.image_alt}
                                    placeholder="blur"
                                    blurDataURL={article.image.mini_image_url}
                                />
                                <p className=" lg:text-h5 cursor-pointer transition-all hover:underline font-semibold tracking-wider font-antic text-primary py-8 uppercase">
                                    {article.headline}
                                </p>
                                <div className="  flex justify-between border-t border-primary py-8 ">
                                    <p className=" text-h7 lg:text-h6 uppercase text-primary">
                                        {article.date}
                                    </p>
                                    <p className=" text-h7 lg:text-h6 cursor-pointer font-bold transition-all hover:underline uppercase text-secondary">
                                        {article.sub_category}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    );
                });

                return (
                    <div className="border-b-[1px] border-black-10 py-16">
                        <h3 className="text-h5 md:text-h4 font-antic cursor-pointer pb-8">
                            {sub_category.title}
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {mappedArticles}
                        </div>
                        <Link href={`/${title}/${sub_category.title}`}>
                            <p className="text-h6 font-antic text-right cursor-pointer text-secondary hover:text-primary transition-all ease-in-out duration-300 mt-16">
                                View more
                            </p>
                        </Link>
                    </div>
                );
            } else if (index % 3 === 1) {
                const slicedArticles = articles.slice(0, 5);
                const reversedArticles = slicedArticles.reverse();

                const mappedArticles = reversedArticles.map(
                    (article, index) => {
                        return (
                            <Link
                                href={`/${article.category}/${article.sub_category}/${article._id}`}
                                key={index}
                            >
                                <div className="flex flex-col sm:flex-row gap-16 hover:bg-black-10 transition-all ease-in-out cursor-pointer">
                                    <div className="relative">
                                        <Image
                                            src={article.image.image_url}
                                            alt={article.image.image_alt}
                                            width={650}
                                            height={400}
                                            placeholder="blur"
                                            blurDataURL={
                                                article.image.mini_image_url
                                            }
                                        />
                                    </div>
                                    <div className="relative w-[100%] sm:w-3/4 p-8">
                                        <div className="flex flex-row gap-8 items-center">
                                            <p className="text-h8 uppercase text-secondary font-semibold tracking-wider ">
                                                {article.keyword}
                                            </p>
                                            <div className="rounded-full bg-black-25 w-[4px] h-[4px]" />
                                        </div>
                                        <h3 className="font-antic text-h5 text-primary font-semibold tracking-wider transition-all ease-in-out hover:underline">
                                            {article.headline}
                                        </h3>
                                        <p className="text-black-50 hidden lg:block">
                                            {`${article.article[0]} ${article.article[1]}..`}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    }
                );

                return (
                    <div className="border-b-[1px] border-black-10 py-16">
                        <h3 className="text-h4 font-antic cursor-pointer pb-8">
                            {sub_category.title}
                        </h3>
                        <div className=" gap-8 grid col-span-1">
                            {mappedArticles}
                        </div>
                        <Link href={`/${title}/${sub_category.title}`}>
                            <p className="text-h6 font-antic text-right cursor-pointer text-secondary hover:text-primary transition-all ease-in-out duration-300 mt-16">
                                View more
                            </p>
                        </Link>
                    </div>
                );
            } else {
                const slicedArticles = articles.slice(0, 2);
                const reversedArticles = slicedArticles.reverse();

                const mappedArticles = reversedArticles.map(
                    (article, index) => {
                        return (
                            <Link
                                href={`/${article.category}/${article.sub_category}/${article._id}`}
                                key={index}
                            >
                                <div className="flex flex-col 2xl:flex-row gap-16 hover:bg-black-10 transition-all ease-in-out cursor-pointer">
                                    <div className="relative">
                                        <Image
                                            src={article.image.image_url}
                                            alt={article.image.image_alt}
                                            width={760}
                                            height={760}
                                            placeholder="blur"
                                            blurDataURL={
                                                article.image.mini_image_url
                                            }
                                        />
                                    </div>
                                    <div className="relative w-[100%] 2xl:w-3/4 p-8">
                                        <div className="flex flex-row gap-8 items-center">
                                            <p className="text-h8 uppercase text-secondary font-semibold tracking-wider ">
                                                {article.keyword}
                                            </p>
                                            <div className="rounded-full bg-black-25 w-[4px] h-[4px]" />
                                        </div>
                                        <h3 className="font-antic text-h5 text-primary font-semibold tracking-wider transition-all ease-in-out hover:underline">
                                            {article.headline}
                                        </h3>
                                        <p className="text-black-50">{`${article.article[0]}`}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    }
                );

                return (
                    <div className="border-b-[1px] border-black-10 py-16">
                        <h3 className="text-h4 font-antic cursor-pointer pb-8">
                            {sub_category.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {mappedArticles}
                        </div>
                        <Link href={`/${title}/${sub_category.title}`}>
                            <h4 className="text-h6 font-antic text-right cursor-pointer text-secondary hover:text-primary transition-all ease-in-out duration-300 mt-16">
                                View more
                            </h4>
                        </Link>
                    </div>
                );
            }
        }
    );

    return (
        <div className="bg-black-5 p-16 lg:px-32 lg:py-32">
            <div className="px-16 md:px-64 pb-32 grid col-span-2 border-b-[1px] border-black-10">
                <h1 className="text-h3 md:text-h2 font-antic uppercase mb-8 md:mb-16">
                    {title}
                </h1>
                <h2 className="text-h7 md:text-h6 text-black-50">
                    {" "}
                    Welcome to the Lifestyle section of Headline Horizon, your
                    reliable source for embracing the quintessential American
                    way of life. Are you seeking time-honored recipes and fine
                    beverages in our Food and Drink segment? Intrigued by sturdy
                    Cars and dependable Trucks? Yearning for the freedom of
                    Travel and the tranquility of the Outdoors, or the comfort
                    of your House and Home? Eager to improve your Fitness and
                    elevate your Well-being, or stay updated with tasteful Style
                    and timeless Beauty? Need wisdom on nurturing Family values
                    or seeking spiritual enrichment through Faith? Discover all
                    this and more in our carefully crafted categories. Join us
                    on this journey, and experience the very essence of the
                    American dream.
                </h2>
            </div>
            <div>{mappedContent}</div>
        </div>
    );
}
