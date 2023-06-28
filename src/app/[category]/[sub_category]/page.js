import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

const getData = async (sub_category) => {
	try {
		const res = await fetch(`${process.env.API_URL}/articles/${sub_category}`, {
			cache: "force-cache",
		});
		return await res.json();
	} catch (err) {
		console.log(`An error occured while fetching data from the server: ${err}`);
	}
};

const mappingSubCategoryArticles = (array) => {
	return array.map((article, index) => {
		return (
			// <Suspense key={index} fallback={<Loading />}>
			<Link
				href={`/${article.category}/${article.sub_category}/${article._id}`}>
				<div
					className="flex flex-row gap-16 hover:bg-black-10 transition-all ease-in-out cursor-pointer"
					key={index}>
					<div className="relative w-1/4 h-[170px]">
						<Image
							src={article.images[0].image_url}
							alt={article.images[0].image_alt}
							// width-min={300}
							// height={300}
							layout="fill"
						/>
					</div>
					<div className="relative w-3/4 p-8">
						<div className="flex flex-row gap-8 items-center">
							<p className="text-h8 uppercase text-secondary font-semibold tracking-wider ">
								{article.keywords[0]}
							</p>
							<div className="rounded-full bg-black-25 w-[4px] h-[4px]" />
						</div>
						<h3 className="font-antic text-h5 text-primary font-semibold tracking-wider transition-all ease-in-out hover:underline">
							{article.headline}
						</h3>
						<p className="text-black-50">{article.article[0]}</p>
					</div>
				</div>
			</Link>
			// </Suspense>
		);
	});
};

export default async function SubCategory({ params }) {
	const subCategory = params.sub_category;
	const artiles = await getData(subCategory);

	return (
		<main>
			<div className="bg-black-5 p-64">
				<h1 className="font-antic tracking-wider font-medium capitalize border-b-2 border-y-black-10">
					{subCategory}
				</h1>
				<div className="flex flex-row gap-16 py-24">
					<div className="flex flex-col gap-8 py-24">
						{mappingSubCategoryArticles(artiles)}
						<div className="bg-primary my-32 cursor-pointer hover:bg-secondary transition-all ease-in-out">
							<h5 className="uppercase font-semibold text-black-5 shadow-2xl p-8 text-center">
								show more
							</h5>
						</div>
					</div>
					<div className="w-1/4"></div>
				</div>
			</div>
		</main>
	);
}
