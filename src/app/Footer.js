import { getCategories } from "@/utils/lib/categories/categories";
import React from "react";
import Link from "next/link";

export const Footer = async () => {
    const categories = await getCategories();

    const mappingCategories = categories.map((category, index) => {
        const subCategories = category.sub_category.map(
            (subCategory, index1) => (
                <Link
                    key={index1}
                    href={`${process.env.API_URL}/${encodeURIComponent(
                        category.category.title
                    )}/${encodeURIComponent(subCategory.title)}`}
                >
                    <p className="cursor-pointer text-black-25 font-semibold my-1 py-1 transition-all duration-300 hover:opacity-50 shadow-black-5 text-left">
                        {subCategory.title}
                    </p>
                </Link>
            )
        );

        return (
            <div key={index} className="justify-self-auto">
                <div>
                    <Link
                        href={`${process.env.API_URL}/${encodeURIComponent(
                            category.category.title
                        )}`}
                    >
                        <h4 className=" cursor-pointer font-antic  text-black-5 transition-all duration-300 hover:opacity-50 text-left">
                            {category.category.title}
                        </h4>
                    </Link>
                    <div className="border-b-[1px] mb-8 text-black-5 text"></div>

                    <div>{subCategories}</div>
                </div>
            </div>
        );
    });

    return (
        <div className="bg-primary py-32 px-32 lg:px-192 grid grid-cols-2 md:grid-cols-3 gap-16">
            {mappingCategories}
        </div>
    );
};
