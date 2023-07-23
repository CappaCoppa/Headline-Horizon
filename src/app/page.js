import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/utils/lib/articles/articles";

export const dynamic = "force-dynamic";

export const metadata = { title: "HH - Home" };

const mappedTopArticles = (array) =>
    array.map((articleObject, index) => {
        const truncatedArticle = articleObject.article.slice(0, 200) + "...";

        if (index === 0) {
            return (
                <div
                    className="row-span-1 col-span-1 md:row-span-2 md:col-span-2 cursor-pointer hover:bg-black-opacity-0.80  bg-primary-opacity-0.30 xl:bg-black-opacity-0.0  transition ease-in-out p-8 "
                    key={index}
                >
                    <Link
                        href={`${articleObject.category}/${articleObject.sub_category}/${articleObject._id}`}
                    >
                        <div className="relative">
                            <Image
                                width="2000"
                                height="1000"
                                src={articleObject.image.image_url}
                                alt={articleObject.image.image_alt}
                                priority={true}
                            />
                            <p className=" bg-secondary-opacity-0.20 absolute bottom-0 m-16 font-semibold tracking-wider px-16 py-8 font-antic uppercase text-black-10">
                                {articleObject.sub_category}
                            </p>
                        </div>
                        <h1 className=" text-h6 sm:text-h5 lg:text-h4 font-antic cursor-pointer transition-all hover:underline text-black-10 border-b pb-16 my-16 uppercase">
                            {articleObject.headline}
                        </h1>
                        <div className="flex flex-col justify-between">
                            <h2 className="text-black-25 text-h7 sm:text-h6 cursor-pointer">
                                {truncatedArticle}
                            </h2>
                            <br />
                            <button className="mt-16 w-fit">
                                <p className=" text-h8 sm:text-h6 hover:bg-secondary-opacity-0.20 transition ease-in-out p-8 text-black-25 border-black-25 border-[1px] uppercase">
                                    More
                                </p>
                            </button>
                        </div>
                    </Link>
                </div>
            );
        } else {
            return (
                <div
                    className="hover:bg-black-opacity-0.30 cursor-pointer transition ease-in-out p-8"
                    key={index}
                >
                    <Link
                        href={`${articleObject.category}/${articleObject.sub_category}/${articleObject._id}`}
                    >
                        <div className="relative">
                            <Image
                                width="700"
                                height="400"
                                src={articleObject.image.image_url}
                                alt={articleObject.image.image_alt}
                            />
                            <p className=" bg-secondary-opacity-0.20 absolute bottom-0 m-16 font-semibold tracking-wider px-16 py-8 font-antic uppercase text-black-10">
                                {articleObject.sub_category}
                            </p>
                        </div>
                        <h3 className="text-h6 sm:text-h5 font-antic cursor-pointer transition-all hover:underline text-black-10 border-b pb-16 my-16 uppercase">
                            {articleObject.headline}
                        </h3>
                    </Link>
                </div>
            );
        }
    });

const mappingNormalArticles = (array) =>
    array.map((articleObject, index) => {
        return (
            <div
                className=" flex flex-col justify-between cursor-pointer transition ease-in-out hover:bg-black-10 p-8"
                key={index}
            >
                <Link
                    href={`${articleObject.category}/${articleObject.sub_category}/${articleObject._id}`}
                >
                    <Image
                        width={600}
                        height={500}
                        src={articleObject.image.image_url}
                        alt={articleObject.image.image_alt}
                    />
                    <h6 className=" cursor-pointer transition-all hover:underline font-semibold tracking-wider font-antic text-primary py-8 uppercase">
                        {articleObject.headline}
                    </h6>
                    <div className=" flex justify-between border-t border-primary py-8 ">
                        <p className=" uppercase text-primary">
                            {articleObject.date}
                        </p>
                        <p className=" cursor-pointer font-bold transition-all hover:underline uppercase text-secondary">
                            {articleObject.sub_category}
                        </p>
                    </div>
                </Link>
            </div>
        );
    });

export default async function Home() {
    try {
        const objectsArray = await getArticles();
        return (
            <main>
                <div className="p-16 xl:p-32 bg-black-opacity-0.80  grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-2 gap-16 md:gap-24">
                    {mappedTopArticles(objectsArray.slice(0, 6))}
                </div>
                <div className="p-16 xl:p-32 bg-black-5 grid grid-cols-1 md:grid-cols-3 gap-16">
                    {mappingNormalArticles(objectsArray.slice(6))}
                </div>
            </main>
        );
    } catch (err) {
        console.log(err);
    }
}
