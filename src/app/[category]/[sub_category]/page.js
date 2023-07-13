import Image from "next/image";
import Link from "next/link";
import { getSubCategoryArticles } from "@/utils/lib/articles/sub_category";

export const dynamic = "force-dynamic";

const mappingSubCategoryArticles = (array) => {
	return array.map((article, index) => {
		return (
			<Link
				href={`/${article.category}/${article.sub_category}/${article._id}`}
				key={index}>
				<div className="flex flex-row gap-16 hover:bg-black-10 transition-all ease-in-out cursor-pointer">
					<div className="relative w-1/4 h-[170px]">
						<Image
							src={article.images[0].image_url}
							alt={article.images[0].image_alt}
							width={300}
							height={300}
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
		);
	});
};

export default async function SubCategory({ params }) {
	const category = await params.category;
	const subCategory = await params.sub_category;
	const artiles = await getSubCategoryArticles(category, subCategory);

	return (
		<main>
			<div className="bg-black-5 p-64">
				<h1 className="font-antic tracking-wider font-medium capitalize border-b-2 border-y-black-10">
					{decodeURI(subCategory)}
				</h1>
				<div className="flex flex-row gap-16 py-24">
					<div className="flex flex-col gap-8 py-24">
						{mappingSubCategoryArticles(artiles)}
					</div>
					<div className="w-1/4"></div>
				</div>
			</div>
		</main>
	);
}
