import React from "react";
import Image from "next/image";

const getData = async (sub_category, id) => {
	try {
		const res = await fetch(
			`${process.env.API_URL}/api/articles/${sub_category}/${id}`,
			{ cache: "force-cache" }
		);
		return await res.json();
	} catch (err) {
		console.log(`An error occured while fetching data from the server: ${err}`);
	}
};

export default async function Article({ params }) {
	const articleObject = await getData(params.sub_category, params.article);
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
								<Image
									className="align-middle h-auto"
									fill
									src={articleObject.images[imageIndex].image_url}
									alt={articleObject.images[imageIndex].image_alt}
								/>
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
					<h6 className="text-black text-left py-16">{sentence}</h6>
				</React.Fragment>
			);
		});

	return (
		<main className="bg-black-5 px-64 py-32">
			<div className="items-center align-middle flex justify-center gap-8 pb-8">
				<h7 className="font-bold text-primary uppercase">
					{/* {articleObject.sub_category} */}
				</h7>
				<div className="rounded-full bg-black-25 w-[4px] h-[4px]"></div>
				<h7>
					<span className="font-bold uppercase">published: </span>{" "}
					{/* {articleObject.date} */}
				</h7>
			</div>
			<h1 className="px-128 text-black font-antic uppercase text-center font-bold pb-16">
				{/* {articleObject.headline} */}
			</h1>
			<h5 className="px-256 pb-16 text-black text-center">
				{/* {articleObject.sub_headline} */}
			</h5>
			<div className="flex border-y-black-10 border-y-2 py-16 gap-16">
				{/* <div className="w-3/4">{mappingContent()}</div> */}
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
