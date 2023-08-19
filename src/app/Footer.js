import getCategories from "@/utils/lib/categories/categories";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/transparent-H.png";

export const Footer = async () => {
    const categories = await getCategories();

    const mappingCategories = categories.map((category, index) => {
        const subCategories = category.subcategory_title.map(
            (subCategory, index1) => (
                <Link
                    key={index1}
                    href={`${process.env.API_URL}/${encodeURIComponent(
                        category.category_title
                    )}/${encodeURIComponent(subCategory)}`}
                >
                    <p className="text-h8 md:text-h7 cursor-pointer font-NotoSans text-black-25 font-semibold my-1 py-1 transition-all duration-300 hover:opacity-50 shadow-black-5 text-left">
                        {subCategory}
                    </p>
                </Link>
            )
        );

        return (
            <div className="justify-self-auto">
                <div>
                    <Link
                        key={index}
                        href={`${process.env.API_URL}/${encodeURIComponent(
                            category.category_title
                        )}`}
                    >
                        <h3 className="text-h7 md:text-h5 cursor-pointer font-NotoSerif  text-black-5 transition-all duration-300 hover:opacity-50 text-left">
                            {category.category_title}
                        </h3>
                    </Link>
                    <div className="border-b-[1px] mb-8 text-black-5 text"></div>

                    <div>{subCategories}</div>
                </div>
            </div>
        );
    });

    return (
        <main>
            <div className="bg-primary py-32 px-32 lg:px-192 grid grid-cols-2 md:grid-cols-3 gap-16">
                {mappingCategories}
            </div>
            <div className="bg-primary-darker py-8 px-32  lg:px-192 flex justify-between items-center">
                <Image src={Logo} width={40} height={40} />
                <div className="flex flex-row gap-8 font-NotoSans text-h8 text-black-25">
                    <Link
                        className="transition-all ease-in-out hover:text-secondary"
                        href={`${process.env.API_URL}/terms`}
                    >
                        Terms & Conditions
                    </Link>
                    <Link
                        className="transition-all ease-in-out hover:text-secondary"
                        href={`${process.env.API_URL}/privacy`}
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </main>
    );
};
