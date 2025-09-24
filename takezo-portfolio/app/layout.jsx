import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
	title: "Takezo's Portfolio",
	description: "Developed by Dave Jornales",
	openGraph: {
		url: "https://dave-portfolio-three.vercel.app/",
		siteName: "Takezo's Portfolio",
		images: [
			{
				url: "https://dave-portfolio-three.vercel.app/api/og",
				alt: "Test Thumbnail",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<ThemeProvider>
			<html lang="en">
				<body
					className={`antialiased !bg-my-bgcolor text-neutral-50 p-10 font-inter`}
				>
					<Header />
					{children}
					<Footer />
				</body>
			</html>
		</ThemeProvider>
	);
}
