import React, { Suspense } from "react";
import Image from "next/image";
import Loading from "./loading";
import { getArticle } from "@/utils/lib/articles/article";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
	const articleObject = await getArticle(params.sub_category, params.article);
	const concatedDes = articleObject.article.join(" ").slice(0, 150);
	return {
		title: articleObject.headline,
		description: concatedDes,
		date: `${articleObject.date}`,
		keywords: articleObject.keywords.slice(0, 10),
		url: `${process.env.API_URL}/${articleObject.category}/${articleObject.sub_category}/${articleObject._id}`,
		openGraph: {
			title: articleObject.headline,
			description: concatedDes,

			type: "article",
			images: articleObject.images.map((image) => `${image.image_url}`),
			url: `${process.env.API_URL}/${articleObject.category}/${articleObject.sub_category}/${articleObject._id}`,
			local: "en_US",
			site_name: `${process.env.API_URL}`,
		},
	};
}

export default async function Article({ params }) {
	const articleObject = await getArticle(params.sub_category, params.article);
	const numSentences = articleObject.article.length;
	const numImages = articleObject.images.length;
	const sentencesPerImage = Math.ceil(numSentences / numImages);

	const mappingContent = () =>
		articleObject.article.map((sentence, index) => {
			const shouldDisplayImage = index % sentencesPerImage === 0 || index === 0;
			const imageIndex = Math.min(
				Math.floor(index / sentencesPerImage),
				numImages - 1
			);
			return (
				<React.Fragment key={index}>
					{shouldDisplayImage && (
						<div className="display flex flex-col">
							<div className="h-[700px] relative">
								<Suspense fallback={<Loading />}>
									<Image
										fill
										src={articleObject.images[imageIndex].image_url}
										alt={articleObject.images[imageIndex].image_alt}
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
									className="w-full my-16 border-b-black-10 border-b-2">
									<source
										src={articleObject.audio_link}
										className="bg-primary"
										type="audio/mpeg"
									/>
								</audio>
							)}
						</div>
					)}
					<p className="text-black text-left py-16 text-h6">{sentence}</p>
				</React.Fragment>
			);
		});

	return (
		<main className="bg-black-5 px-64 py-32">
			<div className="items-center align-middle flex justify-center gap-8 pb-8">
				<p className="text-h7 font-bold text-primary uppercase">
					{articleObject.sub_category}
				</p>
				<div className="rounded-full bg-black-25 w-[4px] h-[4px]"></div>
				<p>
					<span className="text-h7 font-bold uppercase">published: </span>{" "}
					{articleObject.date}
				</p>
			</div>
			<h1 className="px-128 text-black font-antic uppercase text-center font-bold pb-16">
				{articleObject.headline}
			</h1>
			<h2 className="text-h5 px-256 pb-16 text-black text-center">
				{articleObject.sub_headline}
			</h2>
			<div className="flex border-y-black-10 border-y-2 py-16 gap-16">
				<Suspense fallback={<p>Loading...</p>}>
					<div className="w-3/4">{mappingContent()}</div>
				</Suspense>
				<div className="border-l-2 border-black-10 pl-8 w-1/4">
					<div className="bg-secondary h-[550px] w-[100%] text-center flex justify-center items-center">
						<h6>Add container</h6>
					</div>
					<div className="py-16 sticky top-0">
						<h6 className="text-black-5 bg-primary  font-antic text-left p-8 uppercase">
							Related Articles
						</h6>
						{/* {mappingRelatedArticles()} */}
					</div>
				</div>
			</div>
		</main>
	);
}
