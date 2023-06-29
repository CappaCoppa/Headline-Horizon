import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "HH - Home" };
const getData = async () => {
	try {
		const res = await fetch(`${process.env.API_URL}/articles`, {
			cache: "force-cache",
		});
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};

const mappedTopArticles = (array) =>
	array.map((articleObject, index) => {
		const truncatedArticle = articleObject.article[0].slice(0, 200) + "...";

		if (index === 0) {
			return (
				<div
					className="row-span-2 col-span-2 cursor-pointer hover:bg-black-opacity-0.30 transition ease-in-out p-8 "
					key={index}>
					<Link
						href={`${articleObject.category}/${articleObject.sub_category}/${articleObject._id}`}>
						<div className="relative">
							<Image
								width="2000"
								height="1000"
								src={articleObject.images[0].image_url}
								alt={articleObject.images[0].image_alt}
							/>
							<h4 className=" bg-secondary-opacity-0.20 absolute bottom-0 m-16 font-semibold tracking-wider px-16 py-8 font-antic uppercase text-black-10">
								{articleObject.sub_category}
							</h4>
						</div>
						<h4 className="font-antic cursor-pointer transition-all hover:underline text-black-10 border-b pb-16 my-16 uppercase">
							{articleObject.headline}
						</h4>
						<div className="flex flex-col justify-between">
							<h7 className="text-black-25 cursor-pointer">
								{truncatedArticle}
							</h7>
							<br />
							<button className="mt-16 w-fit">
								<h6 className="hover:bg-secondary-opacity-0.20 transition ease-in-out p-8 text-black-25 border-black-25 border-[1px] uppercase">
									More
								</h6>
							</button>
						</div>
					</Link>
				</div>
			);
		} else {
			return (
				<div
					className="hover:bg-black-opacity-0.30 cursor-pointer transition ease-in-out p-8"
					key={index}>
					<Link
						href={`${articleObject.category}/${articleObject.sub_category}/${articleObject._id}`}>
						<div className="relative">
							<Image
								width="600"
								height="300"
								src={articleObject.images[0].image_url}
								alt={articleObject.images[0].image_alt}
							/>
							<h6 className=" bg-secondary-opacity-0.20 absolute bottom-0 m-16 font-semibold tracking-wider px-16 py-8 font-antic uppercase text-black-10">
								{articleObject.sub_category}
							</h6>
						</div>
						<h5 className="font-antic cursor-pointer transition-all hover:underline text-black-10 pb-16 mt-16 uppercase">
							{articleObject.headline}
						</h5>
					</Link>
				</div>
			);
		}
	});

const mappingNormalArticles = (array) =>
	array.map((articleObject, index) => {
		return (
			<div
				className=" flex flex-col justify-between cursor-pointer transition ease-in-out hover:bg-black-10 p-8 "
				key={index}>
				<Link
					href={`${articleObject.category}/${articleObject.sub_category}/${articleObject._id}`}>
					<Image
						width={600}
						height={500}
						src={articleObject.images[0].image_url}
						alt={articleObject.images[0].alt}
					/>
					<h6 className=" cursor-pointer transition-all hover:underline font-semibold tracking-wider font-antic text-primary py-8 uppercase">
						{articleObject.headline}
					</h6>
					<div className=" flex justify-between border-t border-primary py-8 ">
						<h7 className=" uppercase text-primary">{articleObject.date}</h7>
						<h7 className=" cursor-pointer font-bold transition-all hover:underline uppercase text-secondary">
							{articleObject.sub_category}
						</h7>
					</div>
				</Link>
			</div>
		);
	});

export default async function Home() {
	try {
		const objectsArray = await getData();
		return (
			<main>
				<div className="py-16 bg-black-5 shadow-2xl"></div>
				<div className="p-64 bg-black-opacity-0.50 grid grid-cols-3 grid-rows-2 gap-24">
					{mappedTopArticles(objectsArray.slice(0, 6))}
				</div>
				<div className="p-64 bg-black-5 grid grid-cols-3 gap-16">
					{mappingNormalArticles(objectsArray)}
				</div>
			</main>
		);
	} catch (err) {
		console.log(err);
	}
}
