"use client";
import { toggle } from "@/redux/menuSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function Hamburger() {
	const dispatch = useDispatch();

	return (
		<>
			<svg
				onClick={() => dispatch(toggle())}
				className=""
				width="40"
				height="40"
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8.33331 28.3333H31.6666"
					stroke="#F3F3F3"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8.33331 20H31.6666"
					stroke="#F3F3F3"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8.33331 11.6667H31.6666"
					stroke="#F3F3F3"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</>
	);
}
