import getSubCategoryArticles from "@/utils/lib/articles/sub_category";
import getCategory from "@/utils/lib/categories/category";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }) {
    const category = await getCategory(params.category);
    const { title, description } = category.category;
    const concatedDes = description.slice(0, 147) + "...";

    return {
        title: title,
        description: concatedDes,
        date: new Date(),
        image: "../../../public.america.webp",
        url: `${process.env.API_URL}/${encodeURIComponent(title)}`,
        lang: "en_US",
        metadataBase: `${process.env.API_URL}`,
        openGraph: {
            title: title,
            imageWidth: 1200,
            description: concatedDes,
            type: "website",
            image: "../../../../public/america.webp",
            url: `${process.env.API_URL}/${encodeURIComponent(title)}`,
            local: "en_US",
            site_name: `Headline Horizon`,
        },
        twitter: {
            title: title,
            description: concatedDes,
            site: `${process.env.API_URL}`,
            creator: "@TildonTim",
            image: "../../../../public/america.webp",
            card: "summary_large_image",
            local: "en_US",
        },
    };
}

export default async function Category({ params }) {
    const title = params.category;
    const category = await getCategory(title);
    const mappedContent = category.sub_category.map(
        async (sub_category, index) => {
            const { articles } = await getSubCategoryArticles(
                title,
                sub_category.title
            );

            if (articles.length > 0) {
                if (index % 3 === 0) {
                    const slicedArticles = articles.slice(0, 3);
                    const mappedArticles = slicedArticles.map(
                        (article, index) => {
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
                                            blurDataURL={
                                                article.image.mini_image_url
                                            }
                                        />
                                        <h3 className=" text-h6 uppercase cursor-pointer transition-all hover:underline font-semibold font-NotoSerif text-primary py-8">
                                            {article.headline}
                                        </h3>
                                        <div className="flex justify-between border-t border-primary py-8 font-NotoSans">
                                            <p className=" text-h7 uppercase text-primary">
                                                {article.date.slice(0, 10)}
                                            </p>
                                            <p className=" text-h7 cursor-pointer font-bold transition-all hover:underline uppercase text-secondary">
                                                {article.sub_category}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        }
                    );

                    return (
                        <div className="border-b-[1px] border-black-10 py-16">
                            <Link href={`/${title}/${sub_category.title}`}>
                                <h3 className="text-h4  font-NotoSerif capitalize cursor-pointer pb-8">
                                    {sub_category.title}
                                </h3>
                            </Link>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {mappedArticles}
                            </div>
                            <Link href={`/${title}/${sub_category.title}`}>
                                <p className="text-h6 font-NotoSerif text-right cursor-pointer text-secondary hover:text-primary transition-all ease-in-out duration-300 mt-16">
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
                                                <p className="text-h8 uppercase text-secondary font-semibold ">
                                                    {article.keyword}
                                                </p>
                                                <div className="rounded-full bg-black-25 w-[4px] h-[4px]" />
                                            </div>
                                            <h3 className="font-NotoSerif text-h6 uppercase text-primary font-semibold transition-all ease-in-out hover:underline">
                                                {article.headline}
                                            </h3>
                                            <p className="text-black-75 hidden lg:block font-NotoSans">
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
                            <Link href={`/${title}/${sub_category.title}`}>
                                <h3 className="text-h4 font-NotoSerif capitalize cursor-pointer pb-8">
                                    {sub_category.title}
                                </h3>
                            </Link>
                            <div className=" gap-8 grid col-span-1">
                                {mappedArticles}
                            </div>
                            <Link href={`/${title}/${sub_category.title}`}>
                                <p className="text-h6 font-NotoSerif text-right cursor-pointer text-secondary hover:text-primary transition-all ease-in-out duration-300 mt-16">
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
                                                <p className="text-h8 uppercase text-secondary font-semibold font-NotoSans">
                                                    {article.keyword}
                                                </p>
                                                <div className="rounded-full bg-black-25 w-[4px] h-[4px]" />
                                            </div>
                                            <h3 className="font-NotoSerif text-h6 font-semibold text-primary uppercase transition-all ease-in-out hover:underline">
                                                {article.headline}
                                            </h3>
                                            <p className="text-black-75">{`${article.article[0]}`}</p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        }
                    );

                    return (
                        <div className="border-b-[1px] border-black-10 py-16">
                            <Link href={`/${title}/${sub_category.title}`}>
                                <h3 className="text-h4 font-NotoSerif capitalize cursor-pointer pb-8">
                                    {sub_category.title}
                                </h3>
                            </Link>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {mappedArticles}
                            </div>
                            <Link href={`/${title}/${sub_category.title}`}>
                                <h4 className="text-h6 font-NotoSerif text-right cursor-pointer text-secondary hover:text-primary transition-all ease-in-out duration-300 mt-16">
                                    View more
                                </h4>
                            </Link>
                        </div>
                    );
                }
            }
        }
    );

    return (
        <div className="bg-black-5 p-16 lg:px-32 lg:py-32">
            <div className="px-16 md:px-64 pb-32 grid col-span-2 border-b-[1px] border-black-10">
                <Link href={`/${title}`}>
                    <h1 className="text-h3 md:text-h2 font-NotoSerif uppercase mb-8 md:mb-16">
                        {title}
                    </h1>
                </Link>
                <h2 className="text-h7 md:text-h6 text-black-75">
                    {category.category.description}
                </h2>
            </div>
            <div>{mappedContent}</div>
        </div>
    );
}
