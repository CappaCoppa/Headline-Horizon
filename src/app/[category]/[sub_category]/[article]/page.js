import React, { Suspense } from "react";
import Image from "next/image";
import Loading from "./loading";
import getArticle from "@/utils/lib/articles/article";
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
    const articleObject = await getArticle(
        params.category,
        params.sub_category,
        params.article
    );
    const concatedDes = articleObject.article.join(" ").slice(0, 147) + "...";
    return {
        title: articleObject.headline,
        description: concatedDes,
        date: `${articleObject.date}`,
        keywords: articleObject.keywords.slice(0, 10),
        url: `${process.env.API_URL}/${encodeURIComponent(
            articleObject.category
        )}/${encodeURIComponent(articleObject.sub_category)}/${
            articleObject._id
        }`,
        metadataBase: `${process.env.API_URL}`,
        lang: "en",
        openGraph: {
            title: articleObject.headline,
            imageWidth: 1200,
            description: concatedDes,
            type: "article",
            images: articleObject.images.map((image) => `${image.image_url}`),
            url: `${process.env.API_URL}/${encodeURIComponent(
                articleObject.category
            )}/${encodeURIComponent(articleObject.sub_category)}/${
                articleObject._id
            }`,
            local: "en_US",
            site_name: `Headline Horizon`,
            card: concatedDes,
        },
        twitter: {
            title: articleObject.headline,
            card: "summary_large_image",
            domain: `${process.env.API_URL}`,
            url: `${process.env.API_URL}/${encodeURIComponent(
                articleObject.category
            )}/${encodeURIComponent(articleObject.sub_category)}/${
                articleObject._id
            }`,
            description: concatedDes,
            creator: "@TildonTim",
            images: articleObject.images.map((image) => `${image.image_url}`),
            local: "en_US",
        },
    };
}

export default async function Article({ params }) {
    const articleObject = await getArticle(
        params.category,
        params.sub_category,
        params.article
    );
    const numSentences = articleObject.article.length;
    const numImages = articleObject.images.length;
    const sentencesPerImage = Math.ceil(numSentences / numImages);

    const mappingContent = () =>
        articleObject.article.map((sentence, index) => {
            const shouldDisplayImage =
                index % sentencesPerImage === 0 || index === 0;
            const imageIndex = Math.min(
                Math.floor(index / sentencesPerImage),
                numImages - 1
            );
            return (
                <React.Fragment key={index}>
                    {shouldDisplayImage && (
                        <div className="display flex flex-col">
                            <div className="relative">
                                <Suspense fallback={<Loading />}>
                                    <Image
                                        width={2000}
                                        height={1000}
                                        src={
                                            articleObject.images[imageIndex]
                                                .image_url
                                        }
                                        alt={
                                            articleObject.images[imageIndex]
                                                .image_alt
                                        }
                                        className="align-middle h-auto transition-opacity opacity-1 duration-[2s]"
                                        priority={index === 0 ? true : false}
                                        loading={index === 0 ? "eager" : "lazy"}
                                        quality={50}
                                    />
                                </Suspense>
                            </div>
                            {index === 0 && (
                                <audio
                                    controls
                                    className="w-full my-16 border-b-black-10 border-b-2"
                                >
                                    <source
                                        src={articleObject.audio_link}
                                        className="bg-primary"
                                        type="audio/mpeg"
                                    />
                                </audio>
                            )}
                        </div>
                    )}
                    <p className="text-black text-left py-16 text-h6 font-NotoSans">
                        {sentence}
                    </p>
                </React.Fragment>
            );
        });

    // const relatedArticles = await getSubCategoryArticles(
    // 	params.category,
    // 	params.sub_category
    // );

    // const cutArticles = relatedArticles.slice(0, 2);

    // const mappedRelatedArticles = cutArticles.map(article => {
    // 	return (
    // 		<div className="">
    // 			<
    // 		</div>
    // 	)
    // })

    return (
        <main className="bg-black-5 px-16 md:px-32 py-32">
            <div className="items-center align-middle flex justify-center gap-8 pb-8 font-NotoSans">
                <p className="text-h8 md:text-h7 font-bold text-primary uppercase">
                    {articleObject.sub_category}
                </p>
                <div className="rounded-full bg-black-25 w-[4px] h-[4px]"></div>
                <p className="text-h8 font-bold uppercase ">
                    <span className="text-h8 md:text-h7 font-bold uppercase">
                        published :{" "}
                    </span>{" "}
                    {articleObject.date}
                </p>
            </div>
            <h1 className="text-h5 sm:text-h4 md:text-h3 lg:text-h2 xl:text-h1 lg:px-128 md:px-64 text-black font-NotoSerif uppercase text-center font-bold pb-16">
                {articleObject.headline}
            </h1>
            <h2 className="text-h7 sm:text-h6 md:text-h5 lg:text-h4 xl:text-h3 lg:px-256 md:px-128 pb-16 text-black text-center font-NotoSans">
                {articleObject.sub_headline}
            </h2>
            <div className="md:flex border-y-black-10 border-y-2 py-16 md:gap-16">
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="md:w-3/4">{mappingContent()}</div>
                </Suspense>
                <div className="border-l-2 border-black-10 pl-8 hidden  md:flex-col w-1/4 md:hidden">
                    <div className="max-h-[550px] w-[100%] text-center flex justify-center items-center">
                        <h6> {"   "}</h6>
                    </div>
                    <div className="py-16 sticky top-0 max-w-fit">
                        <div className="flex flex-col w-full">
                            <h6 className="text-black-5 bg-primary  font-NotoSerif text-left p-8 uppercase w-full">
                                Related Articles
                            </h6>
                            {/* {mappingRelatedArticles()} */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
