import React from "react";
import { getTermsData } from "@/utils/lib/terms/terms";

const Terms = async () => {
    const { title, sections } = await getTermsData();

    const mappedSections = sections.map((section) => (
        <div className="py-16">
            <h2 className="text-h5 md:text-h3 font-NotoSerif">
                {section.title}
            </h2>
            <h3 className="text-h7 md:text-h5 font-NotoSans px-64 pt-24">
                {section.description}
            </h3>
        </div>
    ));

    return (
        <div className="bg-black-10 py-32 px-16 md:px-128">
            <h1 className=" text-h4 md:text-h2 font-NotoSerif uppercase text-primary text-center pb-32">
                {title}
            </h1>
            <div>{mappedSections}</div>
        </div>
    );
};

export default Terms;
