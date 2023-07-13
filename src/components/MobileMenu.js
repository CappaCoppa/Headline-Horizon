"use client";
import { useEffect } from "react";
import { selectIsOpen } from "@/redux/menuSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { toggle } from "@/redux/menuSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { Close } from "./Close";
export const MobileMenu = ({ categories }) => {
	const selector = useSelector(selectIsOpen);
	const dispatch = useDispatch();

	const mappedContent = categories.map((title, index) => (
		<p className="text-h5 py-8" key={index}>
			<Link onClick={() => dispatch(toggle())} href={`/${title}`}>
				{title}
			</Link>
		</p>
	));

	useEffect(() => {
		// Disables scrolling when the menu is open
		if (selector) {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
			document.documentElement.style.overflow = "";
		}

		// Re-enables scrolling when the component unmounts
		return () => {
			document.body.style.overflow = "";
			document.documentElement.style.overflow = "";
		};
	}, [selector]);

	return (
		<div
			className={`bg-primary border-2 border-r-secondary menu-hidden ${
				selector ? "menu-shown" : ""
			}`}>
			<div className="w-full h-full flex flex-row">
				<div className="px-16 py-16">
					<div className="border-b-[1px] border-b-black-25 pb-16 flex justify-between align-middle items-center ">
						<span className="invisible"> {""} </span>
						<Close />
					</div>
					<div className="font-antic uppercase text-black-5">
						{mappedContent}
					</div>
				</div>
				<div className="w-[4px] bg-secondary text-secondary overflow-hidden">
					{" "}
				</div>
			</div>
		</div>
	);
};
