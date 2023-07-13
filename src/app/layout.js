import "./globals.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const metadata = {
	title: {
		default: "HH",
		template: "HH - %s",
	},
	description: "yoo whats uppp",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="overflow-x-hidden w-[100%]">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
