"use client";
import Link from "next/link";
import React from "react";

export default function error() {
    return (
        <div className="bg-black-5 p-32 py-64 flex flex-col justify-center items-center align-middle cursor-default text-center">
            <h1 className="font-NotoSerif uppercase font-semibold text-black-5 bg-secondary p-16 rounded-2xl border-4 border-primary">
                404
            </h1>
            <h1 className="font-NotoSerif uppercase font-semibold text-secondary border-b-4 border-primary">
                Page not found
            </h1>
            <p className="py-8 text-h5 text-primary">
                Oops! The page you're looking for can't be found.
            </p>
            <p className="text-h5 text-primary">
                You can headback to the main{" "}
                <span className="text-secondary cursor-pointer font-semibold ">
                    <Link href={"/"}>page</Link>
                </span>
            </p>
        </div>
    );
}
