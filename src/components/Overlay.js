"yse client";
import React from "react";
import { toggle } from "@/redux/menuSlice";
import { selectIsOpen } from "@/redux/menuSlice";
import { useDispatch, useSelector } from "react-redux";

export const Overlay = () => {
	const dispatch = useDispatch();
	const selector = useSelector(selectIsOpen);

	return (
		<div
			className={`overlay ${selector ? "overlay-show" : ""}`}
			onClick={() => dispatch(toggle())}>
			{""}
		</div>
	);
};
