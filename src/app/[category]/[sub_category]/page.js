import Image from "next/image";
import Link from "next/link";
import getSubCategoryArticles from "@/utils/lib/articles/sub_category";
import getCategory from "@/utils/lib/categories/category";
import { ShowMoreButton } from "@/components/ShowMoreButton";

export async function generateMetadata({ params }) {
    const { category, sub_category } = await getCategory(params.category);
    const subCategory = sub_category.find(
        (item) => (item.title = params.sub_category)
    );

    const concatedDes = subCategory.description.slice(0, 147) + "...";
    return {
        title: subCategory.title,
        description: concatedDes,
        date: new Date(),
        url: `${process.env.API_URL}/${encodeURIComponent(
            category.title
        )}/${encodeURIComponent(subCategory.title)}`,
        metadataBase: `${process.env.API_URL}`,
        lang: "en",
        openGraph: {
            title: subCategory.title,
            imageWidth: 1200,
            description: concatedDes,
            type: "website",
            image: "../../../../public/america.webp",
            url: `${process.env.API_URL}/${encodeURIComponent(
                category.title
            )}/${encodeURIComponent(subCategory.title)}`,
            local: "en_US",
            site_name: `Headline Horizon`,
        },
        twitter: {
            title: subCategory.title,
            description: concatedDes,
            domain: `${process.env.API_URL}`,
            url: `${process.env.API_URL}/${encodeURIComponent(
                category.title
            )}/${encodeURIComponent(subCategory.title)}`,
            creator: "@TildonTim",
            image: "../../../../public/america.webp",
            card: "summary_large_image",
            local: "en_US",
        },
    };
}

const mappingSubCategoryArticles = (array) => {
    return array.map((article, index) => {
        return (
            <Link
                href={`/${article.category}/${article.sub_category}/${article._id}`}
                key={index}
            >
                <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-16 hover:bg-black-10 transition-all ease-in-out cursor-pointer"
                >
                    <div className="relative">
                        <Image
                            src={article.image.image_url}
                            alt={article.image.image_alt}
                            width={650}
                            height={400}
                            placeholder="blur"
                            blurDataURL={article.image.mini_image_url}
                        />
                    </div>
                    <div className="relative w-[100%] sm:w-3/4 p-8">
                        <div className="flex flex-row gap-8 items-center">
                            <p className="text-h8 uppercase text-secondary font-semibold font-NotoSans">
                                {article.keyword}
                            </p>
                            <div className="rounded-full bg-black-25 w-[4px] h-[4px]" />
                        </div>
                        <h2 className="font-NotoSerif text-h5 text-primary font-semibold transition-all ease-in-out hover:underline">
                            {article.headline}
                        </h2>
                        <p className="text-black-75 hidden lg:block font-NotoSans">
                            {`${article.article[0]} ${article.article[1]}..`}
                        </p>
                    </div>
                </div>
            </Link>
        );
    });
};

export default async function SubCategory({ params, searchParams }) {
    const show = searchParams["show"] ?? "5";
    const category = params.category;
    const subCategory = params.sub_category;
    const { articles, articlesLength } = await getSubCategoryArticles(
        category,
        subCategory,
        show
    );
    console.log(articles);

    return (
        <main>
            <div className="bg-black-5 px-16 py-32 md:p-32">
                <h1 className="text-h3 md:text-h2 capitalize font-NotoSerif tracking-wider font-medium  border-b-2 border-y-black-10">
                    {decodeURIComponent(subCategory)}
                </h1>
                <div className="flex flex-row gap-16 py-16 md:py-32">
                    <div className="flex flex-col gap-16">
                        {mappingSubCategoryArticles(articles)}
                    </div>
                </div>
                <ShowMoreButton articlesLength={articlesLength} />
            </div>
        </main>
    );
}
