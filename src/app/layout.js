import "./globals.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import db_connection from "@/utils/db/connection";

export const metadata = {
	title: {
		default: "HH",
		template: "HH - %s",
	},
	description: "yoo whats uppp",
};

exports.Client = async () => {
	return await db_connection();
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
