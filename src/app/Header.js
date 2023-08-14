import Link from "next/link";
import { ClientComp } from "@/components/ClientComp";
import Image from "next/image";
import MobileH from "../../public/mobile-H.svg";
import DesktopH from "../../public/desktop-H.svg";

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
        <Link key={index} href={`${process.env.API_URL}/${title}`}>
            <p className="text-h6 tracking-wider text-black-5 font-NotoSerif uppercase cursor-pointer transition-all duration-300 hover:text-black-25">
                {title}
            </p>
        </Link>
    ));

    return (
        <div>
            <div className="bg-primary px-16 md:px-32 md:py-8 flex justify-between gap-16 items-center">
                <Link href={process.env.API_URL}>
                    <div className="  text-h2 cursor-pointer py-8 m-0  text-black-5 xl:hidden">
                        <Image
                            src={MobileH}
                            width={80}
                            height={80}
                            alt="mobile logo"
                        />
                    </div>
                    <div className=" text-h2 cursor-pointer  py-8  text-black-5 hidden xl:block">
                        <Image
                            src={DesktopH}
                            width={600}
                            height={500}
                            alt="desktop logo"
                        />
                    </div>
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
