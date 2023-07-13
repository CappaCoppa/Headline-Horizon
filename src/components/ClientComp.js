"use client";
import React from "react";
import Hamburger from "./Hamburger";
import { MobileMenu } from "./MobileMenu";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { Overlay } from "./Overlay";

export const ClientComp = ({ categories }) => {
	return (
		<div className="xl:hidden">
			<Provider store={store}>
				<Hamburger />
				<MobileMenu
					className="absolute top-0 right-0"
					categories={categories}
				/>
				<Overlay />
			</Provider>
		</div>
	);
};
