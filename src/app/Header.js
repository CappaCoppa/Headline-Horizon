import Link from "next/link";
import React from "react";
import { ClientComp } from "@/components/ClientComp";

export const Header = () => {
	const categories = [
		"U.S.",
		"World",
		"Politics",
		"Entertainment",
		"Business",
		"Lifestyle",
		"Science",
		"Tech",
		"Health",
	];

	const mappedCategories = categories.map((title, index) => (
		<Link key={index} href={`${title}`}>
			<p className="text-h6 tracking-wider text-black-5 font-antic uppercase cursor-pointer transition-all duration-300 hover:text-black-25">
				{title}
			</p>
		</Link>
	));

	return (
		<div>
			<div className="bg-primary px-16 md:px-32 xl:px-64 py-0 flex justify-between items-center">
				<Link href={process.env.API_URL}>
					<h1 className=" text-h2 cursor-pointer font-antic p-0 m-0 uppercase text-black-5 xl:hidden">
						H H
					</h1>
					<h1 className=" text-h2 cursor-pointer font-antic p-0 m-0 uppercase text-black-5 hidden xl:block">
						Headline Horizon
					</h1>
				</Link>
				<div>
					<ClientComp categories={categories} />
					<span className="hidden xl:flex flex-row gap-8">
						{mappedCategories}
					</span>
				</div>
			</div>
			<div className="h-[5px] bg-secondary"></div>
		</div>
	);
};
