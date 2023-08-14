import "./globals.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Noto_Serif, Noto_Sans } from "next/font/google";

const NotoSerif = Noto_Serif({
    subsets: ["latin"],
    variable: "--font-Noto-Serif",
});

const NotoSans = Noto_Sans({
    subsets: ["latin"],
    variable: "--font-Noto-Sans",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
    metadataBase: `${process.env.API_URL}`,
    openGraph: {
        title: "U.S. News - In-depth American Analysis | Headline Horizon",
        description:
            "Headline Horizon: Your gateway to the latest U.S. news, stories, and updates. Dive deep into America's pulse with trusted reporting and in-depth analysis. Stay informed, stay ahead!",
        type: "website",
        url: `${process.env.API_URL}`,
        site_name: "Headline Horizon",
        local: "en_US",
    },
    twitter: {
        title: "U.S. News - In-depth American Analysis | Headline Horizon",
        description:
            "Headline Horizon: Your gateway to the latest U.S. news, stories, and updates. Dive deep into America's pulse with trusted reporting and in-depth analysis. Stay informed, stay ahead!",
        site: `${process.env.API_URL}`,
        creator: "@TildonTim",
        image: "../../../../public/america.webp",
        card: "summary_large_image",
        local: "en_US",
    },
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3446792269165420"
                    crossorigin="anonymous"
                ></script>
            </head>
            <body
                className={`${NotoSerif.variable} ${NotoSans.variable} overflow-x-hidden w-[100%]`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
