"use client";
import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const ShowMoreButton = ({ articlesLength }) => {
    const router = useRouter();
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);
    const searchParams = useSearchParams();
    const show = searchParams.get("show") ?? "5";

    const handleClick = () => {
        if (Number(show) > articlesLength) {
            return null;
        } else {
            router.push(
                `/${pathSegments[0]}/${pathSegments[1]}?show=${
                    Number(show) + 5
                }`,
                undefined,
                { scroll: true }
            );
        }
    };

    return (
        <div
            onClick={handleClick}
            className="p-16 text-center align-middle cursor-pointer bg-primary hover:bg-primary-opacity-0.30 transition-all ease-in-out"
        >
            <p className="uppercase font-antic text-h6 text-black-5">
                show more
            </p>
        </div>
    );
};
