import "./globals.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const metadata = {
    title: {
        default: "U.S. News - In-depth American Analysis | Headline Horizon",
        template: "%s - Headline Horizon",
    },
    description:
        "Headline Horizon: Your gateway to the latest U.S. news, stories, and updates. Dive deep into America's pulse with trusted reporting and in-depth analysis. Stay informed, stay ahead!",
    keywords: [
        "U.S. news updates",
        "Latest American stories",
        "Trusted U.S. reporting",
        "In-depth American analysis",
        "Current U.S. headlines",
        "America's top news",
        "Daily U.S. news briefs",
        "Breaking American news",
        "U.S. political updates",
        "American news insights",
    ],
    lang: "en_US",
    metadataBase: `https://headlinehorizon.com`,
    openGraph: {
        title: "U.S. News - In-depth American Analysis | Headline Horizon",
        description:
            "Headline Horizon: Your gateway to the latest U.S. news, stories, and updates. Dive deep into America's pulse with trusted reporting and in-depth analysis. Stay informed, stay ahead!",
        type: "website",
        url: "https://www.headlinehorizon.com/",
        site_name: "Headline Horizon",
        local: "en_US",
    },
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
