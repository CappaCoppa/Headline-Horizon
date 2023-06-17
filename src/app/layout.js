import "./globals.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const metadata = {
	title: {
		default: "HH",
		template: "HH - %s",
	},
	description: "you whats uppp",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
			</body>
			<Footer />
		</html>
	);
}
