"use client";
import React from "react";
import { toggle } from "@/redux/menuSlice";
import { useDispatch } from "react-redux";

export const Close = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				onClick={() => dispatch(toggle())}
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M27.9999 27.9999L4 4"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M28 4L3.99994 28.0001"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	);
};
